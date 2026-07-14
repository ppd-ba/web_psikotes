// APP ENGINE FOR PPD BA ONLINE TEST
// Handles router, test logic, timer, state management, LocalStorage, and Admin Dashboard

// Global State
let state = {
  currentView: 'login', // login, test, result, admin-login, admin-dashboard
  nrp: '',
  questions: [],
  currentIndex: 0,
  answers: {}, // questionId: selectedOption
  flagged: {},  // questionId: boolean (ragu-ragu)
  timeLeft: 2700, // 45 minutes in seconds
  timerInterval: null,
  testStartTime: null,
  testDurationUsed: 0,
  
  // Database Mock & Real (LocalStorage as primary local DB)
  resultsDb: [],
  isAdminAuthenticated: false,
  
  // GAS integration url (Google Apps Script Web App URL)
  gasUrl: localStorage.getItem('ppd_gas_url') || ''
};

// Default Admin Password
const ADMIN_PASSWORD = 'adminPPA2026';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // 1. Load PPD Web Portal logo from local ppd_icon.txt
  loadPpdLogo();
  
  // 2. Load Results Database from LocalStorage
  loadLocalDatabase();
  
  // 3. Setup event listeners
  setupEventListeners();
  
  // 4. Populate questions
  state.questions = [...questionBank]; // Loaded from questions.js
  
  // 5. Navigate to login
  showView('login');
}

// Load Logo
function loadPpdLogo() {
  fetch('ppd_icon.txt')
    .then(response => response.text())
    .then(data => {
      if (data.startsWith('data:image/png;base64,')) {
        const logos = document.querySelectorAll('.brand-logo');
        logos.forEach(logo => {
          logo.src = data;
        });
      }
    })
    .catch(err => {
      console.log('Using SVG fallback logo due to txt read error:', err);
    });
}

// Database Operations
function loadLocalDatabase() {
  const savedDb = localStorage.getItem('ppd_results_db');
  if (savedDb) {
    state.resultsDb = JSON.parse(savedDb);
  } else {
    // Populate with dummy data for initial admin view
    state.resultsDb = [
      { nrp: 'PPA0921', date: '2026-07-10 10:14', score: 24, total: 30, duration: '28:12', categoryScores: { logic: 7, math: 10, spatial: 7 }, insight: 'Kemampuan aritmatika sangat kuat. Analisis spasial baik. Pola kerja cepat dan terstruktur.' },
      { nrp: 'PPA1124', date: '2026-07-11 14:22', score: 18, total: 30, duration: '34:45', categoryScores: { logic: 5, math: 8, spatial: 5 }, insight: 'Pemahaman logika memadai. Perlu melatih ketelitian pada perhitungan cerita tambang. Cenderung hati-hati.' },
      { nrp: 'PPA0842', date: '2026-07-12 09:05', score: 27, total: 30, duration: '21:05', categoryScores: { logic: 8, math: 11, spatial: 8 }, insight: 'Sangat Kompeten. Berpikir logis dan visualisasi spasial sangat tajam. Pengambilan keputusan sangat cepat.' },
      { nrp: 'PPA1309', date: '2026-07-12 11:40', score: 12, total: 30, duration: '44:12', categoryScores: { logic: 3, math: 5, spatial: 4 }, insight: 'Perlu peningkatan di semua sektor. Pengerjaan lambat dan kurang teliti. Disarankan training ulang dasar.' }
    ];
    saveLocalDatabase();
  }
}

function saveLocalDatabase() {
  localStorage.setItem('ppd_results_db', JSON.stringify(state.resultsDb));
}

// Router
function showView(viewId) {
  state.currentView = viewId;
  
  // Hide all views
  const views = document.querySelectorAll('.view-container');
  views.forEach(v => v.classList.remove('active'));
  
  // Show target view
  const target = document.getElementById(viewId + '-view');
  if (target) {
    target.classList.add('active');
  }
  
  // Handle specific page load logic
  if (viewId === 'admin-dashboard') {
    if (!state.isAdminAuthenticated) {
      showView('admin-login');
    } else {
      if (state.gasUrl) {
        document.getElementById('admin-total-participants').textContent = "Loading...";
        fetchResultsFromGoogleSheets()
          .then(() => {
            renderAdminDashboard();
          })
          .catch(() => {
            renderAdminDashboard();
          });
      } else {
        renderAdminDashboard();
      }
    }
  }
}

// Event Listeners
function setupEventListeners() {
  // Login Forms
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nrpInput = document.getElementById('nrp-input').value.trim().toUpperCase();
    if (nrpInput) {
      state.nrp = nrpInput;
      startTest();
    }
  });

  document.getElementById('admin-login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const passInput = document.getElementById('admin-pass-input').value;
    if (passInput === ADMIN_PASSWORD) {
      state.isAdminAuthenticated = true;
      showView('admin-dashboard');
    } else {
      alert('Password Admin Salah!');
    }
  });

  // Navigation Buttons
  document.getElementById('btn-prev').addEventListener('click', () => navigateQuestion(-1));
  document.getElementById('btn-next').addEventListener('click', () => navigateQuestion(1));
  document.getElementById('btn-flag').addEventListener('click', toggleFlag);
  document.getElementById('btn-submit').addEventListener('click', () => showModal('submit-modal'));
  
  // Modal Buttons
  document.getElementById('btn-confirm-submit').addEventListener('click', () => {
    hideModal('submit-modal');
    submitTest();
  });
  
  document.querySelectorAll('.btn-close-modal').forEach(b => {
    b.addEventListener('click', () => {
      const modal = b.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  // Retake Button
  document.getElementById('btn-retake').addEventListener('click', () => {
    retakeTest();
  });
  
  document.getElementById('btn-finish-test').addEventListener('click', () => {
    showView('login');
  });

  // Admin Links & controls
  document.getElementById('link-admin-login').addEventListener('click', () => {
    showView('admin-login');
  });
  
  document.getElementById('link-admin-logout').addEventListener('click', () => {
    state.isAdminAuthenticated = false;
    showView('login');
  });
  
  document.getElementById('btn-save-gas').addEventListener('click', () => {
    const url = document.getElementById('gas-url-input').value.trim();
    state.gasUrl = url;
    localStorage.setItem('ppd_gas_url', url);
    alert('URL Google Sheets berhasil disimpan!');
  });
  
  document.getElementById('search-input').addEventListener('input', (e) => {
    filterParticipantsTable(e.target.value.trim().toUpperCase());
  });
}

// TEST ENGINE
function startTest() {
  state.answers = {};
  state.flagged = {};
  state.currentIndex = 0;
  state.timeLeft = 2700; // 45 minutes
  state.testStartTime = new Date();
  
  // Render navigator grid
  renderNavigatorGrid();
  
  // Show first question
  renderQuestion(0);
  
  // Start Timer
  startTimer();
  
  showView('test');
}

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  
  const timerBar = document.getElementById('timer-bar');
  const timerDisplay = document.getElementById('timer-display');
  
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    
    // Calculate display values
    const min = Math.floor(state.timeLeft / 60);
    const sec = state.timeLeft % 60;
    timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    
    // Percentage for progress bar
    const pct = (state.timeLeft / 2700) * 100;
    timerBar.style.width = pct + '%';
    
    // Color thresholds
    if (state.timeLeft <= 300) { // 5 minutes left
      timerBar.className = 'timer-bar critical';
      timerDisplay.className = 'timer-display critical';
    } else if (state.timeLeft <= 900) { // 15 minutes left
      timerBar.className = 'timer-bar warning';
      timerDisplay.className = 'timer-display';
    } else {
      timerBar.className = 'timer-bar';
      timerDisplay.className = 'timer-display';
    }
    
    // Time out check
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      alert('Waktu ujian telah habis! Jawaban Anda akan otomatis terkirim.');
      submitTest(true);
    }
  }, 1000);
}

function renderQuestion(index) {
  state.currentIndex = index;
  const q = state.questions[index];
  
  // Active state in navigator grid
  document.querySelectorAll('.nav-item').forEach((n, idx) => {
    n.classList.remove('current');
    if (idx === index) n.classList.add('current');
  });

  // Question details
  document.getElementById('question-idx').textContent = `Soal No. ${index + 1} dari 30`;
  
  // Render question text & category label
  let catLabel = "Logika Deret";
  if (q.category === 'math') catLabel = "Aritmatika Logika";
  if (q.category === 'spatial') catLabel = "Logika Spasial";
  document.getElementById('question-cat-label').textContent = catLabel;
  
  document.getElementById('question-text').textContent = q.question;
  
  // Render SVG Media if exists
  const mediaContainer = document.getElementById('question-media-box');
  if (q.svg) {
    mediaContainer.style.display = 'flex';
    mediaContainer.innerHTML = q.svg;
  } else {
    mediaContainer.style.display = 'none';
    mediaContainer.innerHTML = '';
  }
  
  // Render Options
  const optionsList = document.getElementById('options-list');
  optionsList.innerHTML = '';
  
  q.options.forEach((opt, idx) => {
    const isSelected = state.answers[q.id] === opt;
    const optionChar = String.fromCharCode(65 + idx); // A, B, C, D, E
    
    const optItem = document.createElement('div');
    optItem.className = `option-item ${isSelected ? 'selected' : ''}`;
    optItem.addEventListener('click', () => selectOption(q.id, opt));
    
    optItem.innerHTML = `
      <div class="option-radio"></div>
      <div class="option-text"><strong>${optionChar}.</strong> ${opt}</div>
    `;
    
    optionsList.appendChild(optItem);
  });
  
  // Update Prev/Next Buttons disabled state
  document.getElementById('btn-prev').disabled = index === 0;
  
  // Rename 'Next' to 'Finish' on the last question
  const nextBtn = document.getElementById('btn-next');
  if (index === state.questions.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'inline-flex';
  }
  
  // Toggle Flag Button text/style based on current state
  const flagBtn = document.getElementById('btn-flag');
  if (state.flagged[q.id]) {
    flagBtn.textContent = 'Batal Ragu-ragu';
    flagBtn.className = 'btn btn-danger';
  } else {
    flagBtn.textContent = 'Ragu-ragu';
    flagBtn.className = 'btn btn-secondary';
  }
}

function selectOption(qId, value) {
  state.answers[qId] = value;
  
  // Refresh current view to show selected state
  renderQuestion(state.currentIndex);
  
  // Update navigator item style
  const navItem = document.getElementById(`nav-item-${state.currentIndex}`);
  if (navItem) {
    navItem.classList.add('answered');
  }
  
  // Update counter
  updateAnswerCounter();
}

function toggleFlag() {
  const q = state.questions[state.currentIndex];
  state.flagged[q.id] = !state.flagged[q.id];
  
  const navItem = document.getElementById(`nav-item-${state.currentIndex}`);
  if (navItem) {
    if (state.flagged[q.id]) {
      navItem.classList.add('flagged');
    } else {
      navItem.classList.remove('flagged');
    }
  }
  
  // Refresh question buttons
  renderQuestion(state.currentIndex);
}

function navigateQuestion(step) {
  const newIdx = state.currentIndex + step;
  if (newIdx >= 0 && newIdx < state.questions.length) {
    renderQuestion(newIdx);
  }
}

function renderNavigatorGrid() {
  const grid = document.getElementById('navigator-grid');
  grid.innerHTML = '';
  
  state.questions.forEach((q, idx) => {
    const navItem = document.createElement('div');
    navItem.id = `nav-item-${idx}`;
    navItem.className = 'nav-item';
    navItem.textContent = idx + 1;
    navItem.addEventListener('click', () => renderQuestion(idx));
    grid.appendChild(navItem);
  });
  
  updateAnswerCounter();
}

function updateAnswerCounter() {
  const answeredCount = Object.keys(state.answers).length;
  document.getElementById('answered-count').textContent = answeredCount;
}

// MODAL UTILS
function showModal(id) {
  document.getElementById(id).classList.add('active');
}

function hideModal(id) {
  document.getElementById(id).classList.remove('active');
}

// TEST SUBMISSION
function submitTest(autoSubmit = false) {
  if (state.timerInterval) clearInterval(state.timerInterval);
  
  // 1. Calculate duration used
  const endTime = new Date();
  const diffMs = endTime - state.testStartTime;
  const totalSecUsed = Math.floor(diffMs / 1000);
  state.testDurationUsed = totalSecUsed;
  
  const minUsed = Math.floor(totalSecUsed / 60);
  const secUsed = totalSecUsed % 60;
  const durationStr = `${String(minUsed).padStart(2, '0')}:${String(secUsed).padStart(2, '0')}`;
  
  // 2. Score calculations & category breakdown
  let correctAnswers = 0;
  let catScores = { logic: 0, math: 0, spatial: 0 };
  
  state.questions.forEach(q => {
    const userAnswer = state.answers[q.id];
    if (userAnswer === q.answer) {
      correctAnswers++;
      catScores[q.category]++;
    }
  });
  
  // 3. Generate psychological insight
  const insight = generatePsychologyInsight(correctAnswers, catScores, totalSecUsed);
  
  // 4. Save result record
  const resultRecord = {
    nrp: state.nrp,
    date: formatCurrentDate(),
    score: correctAnswers,
    total: state.questions.length,
    duration: durationStr,
    categoryScores: catScores,
    insight: insight
  };
  
  state.resultsDb.unshift(resultRecord); // Add to the top of database
  saveLocalDatabase();
  
  // 5. Send to Google Sheets (if configured)
  if (state.gasUrl) {
    sendToGoogleSheetsAPI(resultRecord);
  }
  
  // 6. Populate results screen UI
  document.getElementById('res-score-num').textContent = correctAnswers;
  document.getElementById('res-name').textContent = `Peserta: ${state.nrp}`;
  document.getElementById('res-nrp').textContent = `Seksi: PPD BA | Durasi: ${durationStr}`;
  document.getElementById('res-feedback-text').innerHTML = `
    <strong>Analisis Hasil:</strong><br>
    • Deret Angka (Kognitif): ${catScores.logic}/8 benar<br>
    • Perhitungan Aritmatika & Logika: ${catScores.math}/12 benar<br>
    • Logika Spasial & Bangun Ruang: ${catScores.spatial}/10 benar<br><br>
    <strong>Rekomendasi Evaluasi:</strong><br>
    ${insight}
  `;
  
  showView('result');
}

// AUTOMATIC PSYCHOLOGY INSIGHT GENERATOR
function generatePsychologyInsight(score, catScores, durationSeconds) {
  let feedback = '';
  
  if (score >= 26) {
    feedback += "<strong>Kategori: Sangat Kompeten (A).</strong> Luar biasa! Anda menunjukkan ketajaman penalaran logis, aritmatika taktis, dan spasial 3D tingkat tinggi yang sangat matang untuk level pengawas (Group Leader).";
  } else if (score >= 20) {
    feedback += "<strong>Kategori: Kompeten (B).</strong> Kemampuan kognitif Anda sudah memenuhi standar kepemimpinan lapangan. Anda sudah memahami logika kerja terintegrasi dengan baik.";
  } else if (score >= 15) {
    feedback += "<strong>Kategori: Cukup Kompeten (C).</strong> Anda berada di batas ambang minimal. Anda memiliki fondasi logika dasar, namun masih rentan mengalami kesalahan saat menghadapi beban kerja lapangan yang rumit.";
  } else {
    feedback += "<strong>Kategori: Perlu Pembinaan Intesif (D).</strong> Anda masih mengalami kendala besar dalam pemecahan logika matematis dan spasial 3D. Sangat disarankan untuk mempelajari modul kembali.";
  }
  
  // Category specific notes
  let weakAreas = [];
  if (catScores.logic < 5) weakAreas.push("Deret Angka (Kognitif Dasar)");
  if (catScores.math < 8) weakAreas.push("Perhitungan Cerita Tambang (Aritmatika)");
  if (catScores.spatial < 6) weakAreas.push("Logika Spasial/3D (Bangun Ruang)");
  
  if (weakAreas.length > 0) {
    feedback += `<br><br><span style="color: #fbbf24;">⚠️ Area Pengembangan:</span> Anda perlu memfokuskan latihan tambahan pada materi <strong>${weakAreas.join(', ')}</strong>.`;
    feedback += "<br>💡 <em>Saran: Klik tombol <strong>'Kerjakan Ulang Ujian'</strong> di bawah untuk berlatih melatih respon visual dan perhitungan Anda secara berulang.";
  } else {
    feedback += "<br><br><span style="color: #10b981;">✔️ Kekuatan Kompetensi:</span> Profil kognitif Anda seimbang dan konsisten di seluruh aspek penalaran logika, hitungan, maupun visualisasi ruang.";
  }
  
  // Speed analysis
  const mins = durationSeconds / 60;
  if (mins < 20) {
    feedback += "<br>🕒 <em>Analisis Kecepatan Kerja:</em> Gaya pengerjaan Anda tergolong **Sangat Cepat**. Namun, pastikan ketelitian tetap terjaga.";
  } else if (mins > 40) {
    feedback += "<br>🕒 <em>Analisis Kecepatan Kerja:</em> Anda cenderung menghabiskan waktu terlalu lama untuk menganalisis soal. Latihlah kecepatan respon agar tidak mengalami *delay* pengerjaan di lapangan.";
  } else {
    feedback += "<br>🕒 <em>Analisis Kecepatan Kerja:</em> Manajemen waktu Anda seimbang dan efisien.";
  }
  
  return feedback;
}

// RETAKE TEST
function retakeTest() {
  if (confirm("Apakah Anda yakin ingin mengulang pengerjaan soal? Hasil pengerjaan saat ini tidak akan dihapus dari database admin.")) {
    startTest();
  }
}

// GOOGLE SHEETS API CALL
function sendToGoogleSheetsAPI(record) {
  console.log('Sending result record to Google Sheets API...');
  
  // Format matching GAS Web App expectations
  const postData = {
    action: 'insert',
    nrp: record.nrp,
    date: record.date,
    score: record.score,
    total: record.total,
    duration: record.duration,
    insight: record.insight.replace(/<\/?[^>]+(>|$)/g, "") // Strip HTML tags
  };
  
  fetch(state.gasUrl, {
    method: 'POST',
    mode: 'no-cors', // standard CORS bypass for GAS Web Apps
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(() => {
    console.log('Result sync sent successfully!');
  })
  .catch(err => {
    console.error('Error syncing with Google Sheets:', err);
  });
}

// ADMIN DASHBOARD RENDERING
function renderAdminDashboard() {
  const db = state.resultsDb;
  
  // 1. Set URL Input
  document.getElementById('gas-url-input').value = state.gasUrl;
  
  // 2. Metrics calculation
  const totalParticipants = db.length;
  document.getElementById('admin-total-participants').textContent = totalParticipants;
  
  if (totalParticipants === 0) {
    document.getElementById('admin-avg-score').textContent = '0%';
    document.getElementById('admin-max-score').textContent = '0/30';
    document.getElementById('admin-pass-rate').textContent = '0%';
    document.getElementById('participants-table-body').innerHTML = `<tr><td colspan="6" style="text-align:center;">Belum ada riwayat hasil ujian.</td></tr>`;
    return;
  }
  
  let totalScore = 0;
  let maxScore = 0;
  let passedCount = 0; // Passing grade threshold is score >= 18 (60%)
  
  db.forEach(r => {
    totalScore += r.score;
    if (r.score > maxScore) maxScore = r.score;
    if (r.score >= 18) passedCount++;
  });
  
  const avgScore = (totalScore / totalParticipants).toFixed(1);
  const avgPct = ((avgScore / 30) * 100).toFixed(0);
  const passRate = ((passedCount / totalParticipants) * 100).toFixed(0);
  
  document.getElementById('admin-avg-score').textContent = `${avgPct}% (${avgScore}/30)`;
  document.getElementById('admin-max-score').textContent = `${maxScore}/30`;
  document.getElementById('admin-pass-rate').textContent = `${passRate}%`;
  
  // 3. Render SVG Histogram (Score Distribution Chart)
  renderScoreDistributionChart(db);
  
  // 4. Render Category performance
  renderCategoryPerformance(db);
  
  // 5. Render overall suggestions recommendations
  renderOverallRecommendations(db);
  
  // 6. Render Table Rows
  renderParticipantsTable(db);
}

function renderScoreDistributionChart(db) {
  // We divide scores into 4 intervals: 0-11 (Failed), 12-17 (Low), 18-23 (Average), 24-30 (Excellent)
  let intervals = { failed: 0, low: 0, average: 0, excellent: 0 };
  
  db.forEach(r => {
    if (r.score >= 24) intervals.excellent++;
    else if (r.score >= 18) intervals.average++;
    else if (r.score >= 12) intervals.low++;
    else intervals.failed++;
  });
  
  const maxIntervalVal = Math.max(intervals.failed, intervals.low, intervals.average, intervals.excellent) || 1;
  
  const failedBar = document.getElementById('bar-failed');
  const lowBar = document.getElementById('bar-low');
  const avgBar = document.getElementById('bar-avg');
  const excBar = document.getElementById('bar-exc');
  
  failedBar.style.height = `${(intervals.failed / maxIntervalVal) * 100}%`;
  failedBar.querySelector('.bar-value').textContent = intervals.failed;
  
  lowBar.style.height = `${(intervals.low / maxIntervalVal) * 100}%`;
  lowBar.querySelector('.bar-value').textContent = intervals.low;
  
  avgBar.style.height = `${(intervals.average / maxIntervalVal) * 100}%`;
  avgBar.querySelector('.bar-value').textContent = intervals.average;
  
  excBar.style.height = `${(intervals.excellent / maxIntervalVal) * 100}%`;
  excBar.querySelector('.bar-value').textContent = intervals.excellent;
}

function renderCategoryPerformance(db) {
  let totalLogic = 0;
  let totalMath = 0;
  let totalSpatial = 0;
  
  db.forEach(r => {
    // If category scores are available
    if (r.categoryScores) {
      totalLogic += r.categoryScores.logic || 0;
      totalMath += r.categoryScores.math || 0;
      totalSpatial += r.categoryScores.spatial || 0;
    } else {
      // Fallback rough estimate from total score
      totalLogic += Math.round(r.score * 0.25);
      totalMath += Math.round(r.score * 0.4);
      totalSpatial += Math.round(r.score * 0.35);
    }
  });
  
  const count = db.length;
  // Calculate average percentages
  // Logic: max is 8. Math: max is 12. Spatial: max is 10.
  const avgLogicPct = (((totalLogic / count) / 8) * 100).toFixed(0);
  const avgMathPct = (((totalMath / count) / 12) * 100).toFixed(0);
  const avgSpatialPct = (((totalSpatial / count) / 10) * 100).toFixed(0);
  
  // Update progress bars
  const logicBar = document.getElementById('progress-logic');
  logicBar.style.width = `${avgLogicPct}%`;
  logicBar.style.backgroundColor = '#fbbf24'; // Yellow
  document.getElementById('val-logic').textContent = `${avgLogicPct}%`;
  
  const mathBar = document.getElementById('progress-math');
  mathBar.style.width = `${avgMathPct}%`;
  mathBar.style.backgroundColor = '#10b981'; // Green
  document.getElementById('val-math').textContent = `${avgMathPct}%`;
  
  const spatialBar = document.getElementById('progress-spatial');
  spatialBar.style.width = `${avgSpatialPct}%`;
  spatialBar.style.backgroundColor = '#3b82f6'; // Blue
  document.getElementById('val-spatial').textContent = `${avgSpatialPct}%`;
}

function renderOverallRecommendations(db) {
  let totalLogic = 0, totalMath = 0, totalSpatial = 0;
  db.forEach(r => {
    if (r.categoryScores) {
      totalLogic += r.categoryScores.logic || 0;
      totalMath += r.categoryScores.math || 0;
      totalSpatial += r.categoryScores.spatial || 0;
    }
  });
  
  const count = db.length;
  const avgLogicPct = ((totalLogic / count) / 8) * 100;
  const avgMathPct = ((totalMath / count) / 12) * 100;
  const avgSpatialPct = ((totalSpatial / count) / 10) * 100;
  
  const recList = document.getElementById('recommendations-list');
  recList.innerHTML = '';
  
  // Find weak points
  let categories = [
    { name: 'Deret Angka & Kecepatan Kognitif', score: avgLogicPct, rec: 'Lakukan pemanasan soal logika deret 10 menit sebelum shift untuk melatih ketajaman berfikir kru.' },
    { name: 'Aritmatika & Perhitungan Logis Tambang', score: avgMathPct, rec: 'Adakan review studi kasus perhitungan kapasitas bucket excavator vs vessel dump truck pada pembinaan Group Leader.' },
    { name: 'Logika Spasial & Bangun Ruang 3D', score: avgSpatialPct, rec: 'Berikan latihan membaca layout penampang tambang dan visualisasi spasial 2D/3D kepada calon GL.' }
  ];
  
  // Sort from lowest performing category
  categories.sort((a, b) => a.score - b.score);
  
  categories.forEach((cat, idx) => {
    const li = document.createElement('li');
    let urgency = 'Prioritas Rendah';
    if (idx === 0) urgency = 'Prioritas Utama (Mendesak)';
    else if (idx === 1) urgency = 'Prioritas Menengah';
    
    li.innerHTML = `<strong>${cat.name} (${cat.score.toFixed(0)}%):</strong> ${cat.rec} <em style="color:#f97316;">[${urgency}]</em>`;
    recList.appendChild(li);
  });
}

function renderParticipantsTable(db) {
  const tbody = document.getElementById('participants-table-body');
  tbody.innerHTML = '';
  
  db.forEach((r, idx) => {
    const tr = document.createElement('tr');
    tr.id = `row-participant-${idx}`;
    
    // Determine score class badge
    let badgeClass = 'score-mid';
    if (r.score >= 24) badgeClass = 'score-high';
    else if (r.score < 18) badgeClass = 'score-low';
    
    tr.innerHTML = `
      <td><strong>${r.nrp}</strong></td>
      <td>${r.date}</td>
      <td><span class="score-badge ${badgeClass}">${r.score} / ${r.total}</span></td>
      <td>${r.duration}</td>
      <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${r.insight.replace(/<\/?[^>]+(>|$)/g, "")}</td>
      <td>
        <button class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="viewParticipantDetails(${idx})">Detail</button>
        <button class="btn btn-danger" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="resetParticipant('${r.nrp}', '${r.date}')">Reset</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function filterParticipantsTable(query) {
  const db = state.resultsDb;
  const tbody = document.getElementById('participants-table-body');
  tbody.innerHTML = '';
  
  const filtered = db.filter(r => r.nrp.includes(query));
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">NRP "${query}" tidak ditemukan.</td></tr>`;
    return;
  }
  
  renderParticipantsTable(filtered);
}

// VIEW PARTICIPANT DETAILS MODAL
window.viewParticipantDetails = function(index) {
  const r = state.resultsDb[index];
  
  document.getElementById('modal-details-title').textContent = `Analisis Hasil: ${r.nrp}`;
  document.getElementById('modal-details-body').innerHTML = `
    <div style="font-family: var(--font-title); font-size: 1.1rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
      Hasil Tes Online Calon GL
    </div>
    <p><strong>NRP Pegawai:</strong> ${r.nrp}</p>
    <p><strong>Waktu Selesai:</strong> ${r.date}</p>
    <p><strong>Skor Total:</strong> <span class="score-badge ${r.score >= 24 ? 'score-high' : r.score >= 18 ? 'score-mid' : 'score-low'}">${r.score} dari ${r.total} benar</span></p>
    <p><strong>Durasi Pengisian:</strong> ${r.duration} menit</p>
    <br>
    <div style="background: var(--bg-secondary); padding: 0.75rem; border-radius: 6px; border: 1px dashed var(--border-color);">
      <strong>Rincian Kategori:</strong><br>
      • Deret Angka (Kognitif): ${r.categoryScores ? r.categoryScores.logic : 'N/A'}/8 benar<br>
      • Aritmatika Logika (Soal Cerita): ${r.categoryScores ? r.categoryScores.math : 'N/A'}/12 benar<br>
      • Spasial 3D (Bangun Ruang): ${r.categoryScores ? r.categoryScores.spatial : 'N/A'}/10 benar
    </div>
    <br>
    <div>
      <strong>Umpan Balik Psikologi Lapangan:</strong><br>
      <p style="color: var(--text-secondary); line-height: 1.5; margin-top: 0.25rem;">${r.insight}</p>
    </div>
  `;
  
  showModal('details-modal');
};

// RESET PARTICIPANT RECORD (Perubahan by NRP)
window.resetParticipant = function(nrp, date) {
  if (confirm(`Apakah Anda yakin ingin menghapus data ujian NRP ${nrp} tanggal ${date}? Tindakan ini akan memungkinkan karyawan tersebut untuk login dan menguji ulang dari awal.`)) {
    // 1. Filter out the selected record from local memory
    state.resultsDb = state.resultsDb.filter(r => !(r.nrp === nrp && r.date === date));
    saveLocalDatabase();
    
    // 2. Delete from Google Sheets if URL configured
    if (state.gasUrl) {
      deleteFromGoogleSheets(nrp, date);
    }
    
    // 3. Refresh table & metrics
    renderAdminDashboard();
  }
};

// GOOGLE SHEETS API GET/DELETE HELPERS
function fetchResultsFromGoogleSheets() {
  if (!state.gasUrl) return Promise.resolve(state.resultsDb);
  
  return fetch(state.gasUrl)
    .then(res => {
      if (!res.ok) throw new Error('gSheet fetch failed');
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        // Reverse array so new ones appear at the top, since doGet returns top-to-bottom
        state.resultsDb = data.reverse();
        saveLocalDatabase();
        return data;
      }
      return state.resultsDb;
    })
    .catch(err => {
      console.error('Failed to sync from Google Sheets, using local cache:', err);
      return state.resultsDb;
    });
}

function deleteFromGoogleSheets(nrp, date) {
  const postData = {
    action: 'delete',
    nrp: nrp,
    date: date
  };
  
  fetch(state.gasUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(() => {
    console.log('Reset command successfully transmitted to Google Sheets.');
  })
  .catch(err => {
    console.error('Error syncing reset command with Google Sheets:', err);
  });
}

// UTILS
function formatCurrentDate() {
  const d = new Date();
  const yr = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const dy = String(d.getDate()).padStart(2, '0');
  const hr = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${yr}-${mo}-${dy} ${hr}:${min}`;
}
