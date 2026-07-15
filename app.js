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
  timeLeft: 3600, // 60 minutes in seconds
  timerInterval: null,
  testStartTime: null,
  testDurationUsed: 0,
  
  // Database Mock & Real (LocalStorage as primary local DB)
  resultsDb: [],
  isAdminAuthenticated: false,
  
  // GAS integration url (Google Apps Script Web App URL)
  gasUrl: localStorage.getItem('ppd_gas_url') || 'https://script.google.com/macros/s/AKfycbys_315Pn64jHPxbgWpZIWBNxuK_Xkk53JhMX6nG_rigPoSyHgbxxbLUacitHcJBXhc/exec'
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
    // Populate with dummy data for initial admin view (scaled to 50 questions)
    state.resultsDb = [
      { nrp: 'PPA0921', date: '2026-07-10 10:14', score: 40, total: 50, duration: '41:12', categoryScores: { logic: 14, math: 13, spatial: 13 }, insight: 'Kemampuan aritmatika sangat kuat. Analisis spasial baik. Pola kerja cepat dan terstruktur.' },
      { nrp: 'PPA1124', date: '2026-07-11 14:22', score: 30, total: 50, duration: '48:45', categoryScores: { logic: 10, math: 10, spatial: 10 }, insight: 'Pemahaman logika memadai. Perlu melatih ketelitian pada perhitungan cerita tambang. Cenderung hati-hati.' },
      { nrp: 'PPA0842', date: '2026-07-12 09:05', score: 45, total: 50, duration: '31:05', categoryScores: { logic: 16, math: 15, spatial: 14 }, insight: 'Sangat Kompeten. Berpikir logis dan visualisasi spasial sangat tajam. Pengambilan keputusan sangat cepat.' },
      { nrp: 'PPA1309', date: '2026-07-12 11:40', score: 20, total: 50, duration: '58:12', categoryScores: { logic: 6, math: 7, spatial: 7 }, insight: 'Perlu peningkatan di semua sektor. Pengerjaan lambat dan kurang teliti. Disarankan training ulang dasar.' }
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
      showModal('instructions-modal');
    }
  });

  document.getElementById('btn-start-confirm').addEventListener('click', () => {
    hideModal('instructions-modal');
    startTest();
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

  document.getElementById('btn-back-exit').addEventListener('click', () => {
    hideModal('back-confirm-modal');
    submitTest();
  });

  // Intercept browser popstate (mobile physical back button / swipe back gesture)
  window.addEventListener('popstate', (e) => {
    if (state.currentView === 'test') {
      // Re-push page state to trap history navigation
      history.pushState({ page: 'test' }, '');
      showModal('back-confirm-modal');
    }
  });

  // Warn user on tab closing or refreshing page
  window.addEventListener('beforeunload', (e) => {
    if (state.currentView === 'test') {
      e.preventDefault();
      e.returnValue = 'Tes sedang berlangsung. Jika Anda keluar/reload, tes akan berakhir.';
    }
  });
}

// TEST ENGINE
function startTest() {
  state.answers = {};
  state.flagged = {};
  state.currentIndex = 0;
  state.timeLeft = 3600; // 60 minutes
  state.testStartTime = new Date();
  
  // Render navigator grid
  renderNavigatorGrid();
  
  // Show first question
  renderQuestion(0);
  
  // Start Timer
  startTimer();
  
  showView('test');
  
  // Push state to browser history to trap back button
  history.pushState({ page: 'test' }, '');
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
    const pct = (state.timeLeft / 3600) * 100;
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
  document.getElementById('question-idx').textContent = `Soal No. ${index + 1} dari 50`;
  
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
  
  const hasSvgOptions = q.options.some(opt => opt.trim().startsWith('<svg'));
  if (hasSvgOptions) {
    optionsList.className = 'options-list grid-options';
  } else {
    optionsList.className = 'options-list';
  }
  
  q.options.forEach((opt, idx) => {
    const isSelected = state.answers[q.id] === opt;
    const optionChar = String.fromCharCode(65 + idx); // A, B, C, D, E
    const isSvg = opt.trim().startsWith('<svg');
    
    const optItem = document.createElement('div');
    optItem.className = `option-item ${isSelected ? 'selected' : ''} ${isSvg ? 'is-svg-option' : ''}`;
    optItem.addEventListener('click', () => selectOption(q.id, opt));
    
    if (isSvg) {
      optItem.innerHTML = `
        <div class="option-radio"></div>
        <div class="option-text option-text-svg">
          <strong>${optionChar}.</strong>
          <div class="svg-wrapper">${opt}</div>
        </div>
      `;
    } else {
      optItem.innerHTML = `
        <div class="option-radio"></div>
        <div class="option-text"><strong>${optionChar}.</strong> ${opt}</div>
      `;
    }
    
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
  const durationStr = `00:${String(minUsed).padStart(2, '0')}:${String(secUsed).padStart(2, '0')}`;
  
  // 2. Score calculations & category breakdown
  let correctAnswers = 0;
  let unansweredCount = 0;
  let catScores = { logic: 0, math: 0, spatial: 0 };
  
  state.questions.forEach(q => {
    const userAnswer = state.answers[q.id];
    if (userAnswer === undefined || userAnswer === null || userAnswer === '') {
      unansweredCount++;
    } else if (userAnswer === q.answer) {
      correctAnswers++;
      catScores[q.category]++;
    }
  });
  
  // 3. Generate psychological insight
  const insight = generatePsychologyInsight(correctAnswers, catScores, totalSecUsed, unansweredCount);
  
  // 4. Save result record
  const resultRecord = {
    nrp: state.nrp,
    date: formatCurrentDate(),
    score: correctAnswers,
    total: state.questions.length,
    duration: durationStr,
    unanswered: unansweredCount,
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
  document.getElementById('res-score-num').textContent = correctAnswers * 2;
  document.getElementById('res-name').textContent = `Peserta: ${state.nrp}`;
  document.getElementById('res-nrp').innerHTML = `Seksi: PPD Site Bukit Asam | Durasi: ${durationStr}<br>Soal Tidak Dijawab: <strong style="color: #f59e0b;">${unansweredCount}</strong> / 50 soal`;
  document.getElementById('res-feedback-text').innerHTML = `
    <strong>Analisis Hasil:</strong><br>
    • Deret Angka & Deret Gambar: ${catScores.logic * 2}/36<br>
    • Perhitungan Aritmatika & Logika: ${catScores.math * 2}/32<br>
    • Logika Spasial & Bangun Ruang: ${catScores.spatial * 2}/32<br><br>
    <strong>Rekomendasi Evaluasi:</strong><br>
    ${insight}
  `;
  
  showView('result');
}

// AUTOMATIC PSYCHOLOGY INSIGHT GENERATOR
function generatePsychologyInsight(score, catScores, durationSeconds, unansweredCount) {
  let feedback = '';
  
  if (score >= 42) {
    feedback += "<strong>Kategori: Sangat Kompeten (A).</strong> Luar biasa! Anda menunjukkan ketajaman penalaran logis, aritmatika taktis, dan spasial 3D tingkat tinggi yang sangat matang untuk level pengawas (Group Leader).";
  } else if (score >= 32) {
    feedback += "<strong>Kategori: Kompeten (B).</strong> Kemampuan kognitif Anda sudah memenuhi standar kepemimpinan lapangan. Anda sudah memahami logika kerja terintegrasi dengan baik.";
  } else if (score >= 25) {
    feedback += "<strong>Kategori: Cukup Kompeten (C).</strong> Anda berada di batas ambang minimal. Anda memiliki fondasi logika dasar, namun masih rentan mengalami kesalahan saat menghadapi beban kerja lapangan yang rumit.";
  } else {
    feedback += "<strong>Kategori: Perlu Pembinaan Intensif (D).</strong> Anda masih mengalami kendala besar dalam pemecahan logika matematis dan spasial 3D. Sangat disarankan untuk mempelajari modul kembali.";
  }
  
  // Category specific notes
  let weakAreas = [];
  if (catScores.logic < 11) weakAreas.push("Deret Angka & Deret Gambar (Logika Gambar)");
  if (catScores.math < 10) weakAreas.push("Perhitungan Cerita Tambang (Aritmatika)");
  if (catScores.spatial < 10) weakAreas.push("Logika Spasial/3D (Bangun Ruang)");
  
  if (weakAreas.length > 0) {
    feedback += `<br><br><span style="color: #fbbf24;">⚠️ Area Pengembangan:</span> Anda perlu memfokuskan latihan tambahan pada materi <strong>${weakAreas.join(', ')}</strong>.`;
    feedback += "<br>💡 <em>Saran: Klik tombol <strong>'Kerjakan Ulang Ujian'</strong> di bawah untuk berlatih melatih respon visual dan perhitungan Anda secara berulang.";
  } else {
    feedback += "<br><br><span style='color: #10b981;'>✔️ Kekuatan Kompetensi:</span> Profil kognitif Anda seimbang dan konsisten di seluruh aspek penalaran logika, hitungan, maupun visualisasi ruang.";
  }
  
  // Speed analysis
  const mins = durationSeconds / 60;
  if (mins < 30) {
    feedback += "<br>🕒 <em>Analisis Kecepatan Kerja:</em> Gaya pengerjaan Anda tergolong **Sangat Cepat**. Namun, pastikan ketelitian tetap terjaga.";
  } else if (mins > 55) {
    feedback += "<br>🕒 <em>Analisis Kecepatan Kerja:</em> Anda cenderung menghabiskan waktu terlalu lama untuk menganalisis soal. Latihlah kecepatan respon agar tidak mengalami *delay* pengerjaan di lapangan.";
  } else {
    feedback += "<br>🕒 <em>Analisis Kecepatan Kerja:</em> Manajemen waktu Anda seimbang dan efisien.";
  }
  
  // Unanswered questions note
  if (unansweredCount !== undefined && unansweredCount > 0) {
    feedback += `<br>⚠️ <em>Soal Tidak Dijawab:</em> Terdapat <strong>${unansweredCount}</strong> soal yang tidak dijawab / tidak sempat diisi (kehabisan waktu).`;
  } else {
    feedback += `<br>✔️ <em>Soal Tidak Dijawab:</em> Seluruh soal (50 soal) berhasil diselesaikan dan dijawab.`;
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
  // Sort chronologically to calculate attempt numbers
  const sortedChronologically = [...state.resultsDb].sort((a, b) => new Date(a.date) - new Date(b.date));
  const nrpAttemptCounts = {};
  sortedChronologically.forEach(r => {
    if (!nrpAttemptCounts[r.nrp]) {
      nrpAttemptCounts[r.nrp] = 0;
    }
    nrpAttemptCounts[r.nrp]++;
    r.attemptNumber = nrpAttemptCounts[r.nrp];
  });

  const db = state.resultsDb;
  
  // 1. Set URL Input
  document.getElementById('gas-url-input').value = state.gasUrl;
  
  // 2. Metrics calculation
  const totalParticipants = db.length;
  document.getElementById('admin-total-participants').textContent = totalParticipants;
  
  if (totalParticipants === 0) {
    document.getElementById('admin-avg-score').textContent = '0%';
    document.getElementById('admin-max-score').textContent = '0/100';
    document.getElementById('admin-pass-rate').textContent = '0%';
    document.getElementById('participants-table-body').innerHTML = `<tr><td colspan="6" style="text-align:center;">Belum ada riwayat hasil ujian.</td></tr>`;
    return;
  }
  
  let totalScore = 0;
  let maxScore = 0;
  let passedCount = 0; // Passing grade threshold is score >= 30 (60%)
  
  db.forEach(r => {
    totalScore += r.score;
    if (r.score > maxScore) maxScore = r.score;
    if (r.score >= 30) passedCount++;
  });
  
  const avgScore = (totalScore / totalParticipants).toFixed(1);
  const avgPct = ((avgScore / 50) * 100).toFixed(0);
  const passRate = ((passedCount / totalParticipants) * 100).toFixed(0);
  
  document.getElementById('admin-avg-score').textContent = `${avgPct}% (${(avgScore * 2).toFixed(1)}/100)`;
  document.getElementById('admin-max-score').textContent = `${maxScore * 2}/100`;
  document.getElementById('admin-pass-rate').textContent = `${passRate}%`;
  
  // 3. Render SVG Histogram (Score Distribution Chart)
  renderScoreDistributionChart(db);
  
  // 4. Render Category performance
  renderCategoryPerformance(db);
  
  // 5. Render overall suggestions recommendations
  renderOverallRecommendations(db);
  
  // 5.5. Render overall group psychology profile
  renderGroupPsychology(db);
  
  // 6. Render Table Rows
  renderParticipantsTable(db);
}

function getAspectAnalysis(scoreLogic, scoreMath, scoreSpatial) {
  // logic max: 18, math max: 16, spatial max: 16
  const pctLogic = (scoreLogic / 18) * 100;
  const pctMath = (scoreMath / 16) * 100;
  const pctSpatial = (scoreSpatial / 16) * 100;

  let logicLevel = 'Kurang', logicColor = '#ef4444', logicDesc = '';
  if (pctLogic >= 80) {
    logicLevel = 'Tinggi'; logicColor = '#10b981';
    logicDesc = 'Sangat tajam dalam menganalisis pola kerusakan unit. Mampu mendeteksi pola kegagalan berulang secara prediktif dan mengambil keputusan pemecahan masalah secara terstruktur.';
  } else if (pctLogic >= 60) {
    logicLevel = 'Sedang'; logicColor = '#3b82f6';
    logicDesc = 'Cukup baik dalam memahami logika kerja komponen dan mencari akar masalah kerusakan standar. Mampu mengambil tindakan taktis harian dengan bimbingan berkala.';
  } else {
    logicLevel = 'Kurang'; logicColor = '#f59e0b';
    logicDesc = 'Cenderung reaktif dalam penanganan breakdown. Membutuhkan instruksi kerja yang detail untuk mendeteksi akar penyebab kerusakan mekanis.';
  }

  let mathLevel = 'Kurang', mathColor = '#ef4444', mathDesc = '';
  if (pctMath >= 80) {
    mathLevel = 'Tinggi'; mathColor = '#10b981';
    mathDesc = 'Akurasi hitungan dan estimasi MTTR sangat presisi. Mampu mengelola resource workshop secara maksimal, memperhitungkan PA/MA secara rasional, serta peka terhadap biaya operasional.';
  } else if (pctMath >= 60) {
    mathLevel = 'Sedang'; mathColor = '#3b82f6';
    mathDesc = 'Cukup mampu membagi beban kerja kru workshop secara proporsional. Estimasi waktu rilis unit wajar namun membutuhkan kontrol berkala agar terhindar dari keterlambatan.';
  } else {
    mathLevel = 'Kurang'; mathColor = '#f59e0b';
    mathDesc = 'Rawan salah membuat kalkulasi prioritas rilis unit. Mengalami kesulitan dalam mengatur pembagian shift mekanik secara efisien dan memprediksi target kesiapan unit.';
  }

  let spatialLevel = 'Kurang', spatialColor = '#ef4444', spatialDesc = '';
  if (pctSpatial >= 80) {
    spatialLevel = 'Tinggi'; spatialColor = '#10b981';
    spatialDesc = 'Memiliki orientasi ruang dan visualisasi K3 yang sangat matang. Sangat terampil membaca blueprint elektrikal/hidrolik serta disiplin tinggi terhadap standardisasi layout workshop (5S).';
  } else if (pctSpatial >= 60) {
    spatialLevel = 'Sedang'; spatialColor = '#3b82f6';
    spatialDesc = 'Cukup memahami rambu-rambu bahaya di area workshop/tambang. Mampu membaca manual book teknik dasar dan mengikuti layout penataan workshop standar.';
  } else {
    spatialLevel = 'Kurang'; spatialColor = '#f59e0b';
    spatialDesc = 'Sensitivitas bahaya spasial lingkungan kerja kurang optimal. Memerlukan pengawasan ketat saat membaca peta layout tambang dan penegakan penggunaan APD/keselamatan kerja dasar.';
  }

  return {
    logic: { level: logicLevel, color: logicColor, desc: logicDesc, pct: pctLogic.toFixed(0) },
    math: { level: mathLevel, color: mathColor, desc: mathDesc, pct: pctMath.toFixed(0) },
    spatial: { level: spatialLevel, color: spatialColor, desc: spatialDesc, pct: pctSpatial.toFixed(0) }
  };
}

function renderGroupPsychology(db) {
  const count = db.length;
  const box = document.getElementById('group-psychology-box');
  if (!box) return;
  
  if (count === 0) {
    box.innerHTML = 'Belum ada riwayat hasil ujian untuk dianalisa.';
    return;
  }
  
  let countA = 0, countB = 0, countC = 0, countD = 0;
  let totalScore = 0;
  let totalLogic = 0, totalMath = 0, totalSpatial = 0;
  
  db.forEach(r => {
    totalScore += r.score;
    if (r.score >= 42) countA++;
    else if (r.score >= 32) countB++;
    else if (r.score >= 25) countC++;
    else countD++;

    if (r.categoryScores) {
      totalLogic += r.categoryScores.logic || 0;
      totalMath += r.categoryScores.math || 0;
      totalSpatial += r.categoryScores.spatial || 0;
    } else {
      totalLogic += Math.round(r.score * 0.36);
      totalMath += Math.round(r.score * 0.32);
      totalSpatial += Math.round(r.score * 0.32);
    }
  });
  
  const avgScore = totalScore / count;
  const pctA = ((countA / count) * 100).toFixed(0);
  const pctB = ((countB / count) * 100).toFixed(0);
  const pctC = ((countC / count) * 100).toFixed(0);
  const pctD = ((countD / count) * 100).toFixed(0);
  
  let summaryText = '';
  let leadershipStyleText = '';
  let hrInterventionText = '';
  
  if (avgScore >= 35) {
    summaryText = `Kelompok kandidat ini secara umum memiliki <strong>keunggulan kognitif yang merata</strong>. Sebanyak ${pctA}% peserta berada pada kategori Sangat Kompeten (A) dan ${pctB}% Kompeten (B).`;
    leadershipStyleText = `Gaya kepemimpinan kelompok cenderung bersifat <strong>analitis, berorientasi pada data operasional, dan taktis dalam perencanaan kerja lapangan</strong>.`;
    hrInterventionText = `Rekomendasi PPD: Kelompok ini dapat segera diakselerasi untuk pelatihan supervisi lapangan (*Leadership & Supervision*) dan diposisikan pada front kerja aktif.`;
  } else if (avgScore >= 25) {
    summaryText = `Kelompok kandidat ini berada pada level <strong>cukup siap pakai</strong> dengan catatan khusus. Sebanyak ${pctB}% berada pada kategori Kompeten (B) dan ${pctC}% Cukup Kompeten (C).`;
    leadershipStyleText = `Gaya kepemimpinan kelompok cenderung bertipe <strong>hati-hati (kalkulatif) namun berisiko lambat merespon masalah</strong> di bawah tekanan lapangan.`;
    hrInterventionText = `Rekomendasi PPD: Diperlukan pembekalan teknis mendalam mengenai perhitungan produktivitas harian dan dasar-dasar pemecahan masalah operasional tim.`;
  } else {
    summaryText = `Sebagian besar kandidat dalam kelompok ini (${pctD}% kategori D) memiliki <strong>celah kompetensi logika dan numerik yang cukup lebar</strong>.`;
    leadershipStyleText = `Kelompok ini cenderung menunjukkan gaya kerja yang <strong>kurang terstruktur dan rentan melakukan kesalahan pengambilan keputusan taktis di lapangan</strong>.`;
    hrInterventionText = `Rekomendasi PPD: Disarankan mengadakan program pembinaan kompetensi dasar matematika praktis dan materi keselamatan kerja sebelum ditugaskan penuh sebagai pengawas lapangan.`;
  }

  // Calculate average percentages
  const avgLogicPct = ((totalLogic / count) / 18) * 100;
  const avgMathPct = ((totalMath / count) / 16) * 100;
  const avgSpatialPct = ((totalSpatial / count) / 16) * 100;

  let groupLogicLevel = 'Cukup', groupLogicColor = '#f59e0b', groupLogicDesc = '';
  if (avgLogicPct >= 75) {
    groupLogicLevel = 'Kuat (Tinggi)'; groupLogicColor = '#10b981';
    groupLogicDesc = 'Mayoritas kelompok memiliki kompetensi analisis kerusakan unit tambang yang sangat tajam dan pemecahan masalah taktis yang cepat.';
  } else if (avgLogicPct >= 55) {
    groupLogicLevel = 'Cukup (Menengah)'; groupLogicColor = '#3b82f6';
    groupLogicDesc = 'Kelompok memiliki dasar pemecahan masalah yang wajar, namun respons taktis harian sering kali reaktif saat menghadapi breakdown unit ganda.';
  } else {
    groupLogicLevel = 'Butuh Perhatian'; groupLogicColor = '#ef4444';
    groupLogicDesc = 'Kemampuan analisis troubleshooting kelompok masih sangat terbatas, berisiko menyebabkan waktu tunda perbaikan unit bertambah lama.';
  }

  let groupMathLevel = 'Cukup', groupMathColor = '#f59e0b', groupMathDesc = '';
  if (avgMathPct >= 75) {
    groupMathLevel = 'Kuat (Tinggi)'; groupMathColor = '#10b981';
    groupMathDesc = 'Kemampuan kelompok dalam mengkalkulasi waktu MTTR, produktivitas harian, dan pembagian porsi penugasan kru di workshop dinilai presisi.';
  } else if (avgMathPct >= 55) {
    groupMathLevel = 'Cukup (Menengah)'; groupMathColor = '#3b82f6';
    groupMathDesc = 'Kalkulasi perencanaan estimasi unit dirilis sudah memadai, tetapi rawan meleset jika dihadapkan pada target produksi tambang yang ketat.';
  } else {
    groupMathLevel = 'Butuh Perhatian'; groupMathColor = '#ef4444';
    groupMathDesc = 'Akurasi pembagian alokasi mekanik dan efisiensi waktu pemulihan unit kerja kelompok masih rendah, rawan menghambat produktivitas site.';
  }

  let groupSpatialLevel = 'Cukup', groupSpatialColor = '#f59e0b', groupSpatialDesc = '';
  if (avgSpatialPct >= 75) {
    groupSpatialLevel = 'Kuat (Tinggi)'; groupSpatialColor = '#10b981';
    groupSpatialDesc = 'Kelompok menunjukkan pemahaman gambar teknik hidrolik/elektrikal yang unggul serta pemeliharaan standar layout workshop (5S) yang disiplin.';
  } else if (avgSpatialPct >= 55) {
    groupSpatialLevel = 'Cukup (Menengah)'; groupSpatialColor = '#3b82f6';
    groupSpatialDesc = 'Tingkat kepatuhan keselamatan (K3) kelompok tergolong aman, namun penerapan kerapian workshop (5S) masih perlu dimonitor secara reguler.';
  } else {
    groupSpatialLevel = 'Butuh Perhatian'; groupSpatialColor = '#ef4444';
    groupSpatialDesc = 'Tingkat pengenalan bahaya visual/spasial kelompok di lingkungan kerja masih minim, meningkatkan risiko insiden kerja atau penyimpangan APD.';
  }
  
  box.innerHTML = `
    <div style="margin-bottom:0.75rem; display:grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; text-align:center;">
      <div style="background:rgba(16,185,129,0.1); padding:0.5rem; border-radius:4px; border:1px solid rgba(16,185,129,0.2);">
        <strong style="color:#10b981; font-size:1.1rem;">${pctA}%</strong><br><span style="font-size:0.7rem;">Kategori A</span>
      </div>
      <div style="background:rgba(59,130,246,0.1); padding:0.5rem; border-radius:4px; border:1px solid rgba(59,130,246,0.2);">
        <strong style="color:#3b82f6; font-size:1.1rem;">${pctB}%</strong><br><span style="font-size:0.7rem;">Kategori B</span>
      </div>
      <div style="background:rgba(245,158,11,0.1); padding:0.5rem; border-radius:4px; border:1px solid rgba(245,158,11,0.2);">
        <strong style="color:#f59e0b; font-size:1.1rem;">${pctC}%</strong><br><span style="font-size:0.7rem;">Kategori C</span>
      </div>
      <div style="background:rgba(239,68,68,0.1); padding:0.5rem; border-radius:4px; border:1px solid rgba(239,68,68,0.2);">
        <strong style="color:#ef4444; font-size:1.1rem;">${pctD}%</strong><br><span style="font-size:0.7rem;">Kategori D</span>
      </div>
    </div>
    
    <div style="border-bottom: 1px dashed var(--border-color); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
      <p style="margin-bottom:0.35rem;">🎯 <strong>Kesimpulan Profil:</strong> ${summaryText}</p>
      <p style="margin-bottom:0.35rem;">⚡ <strong>Karakter Pengawasan Kelompok:</strong> ${leadershipStyleText}</p>
      <p style="margin-bottom:0.35rem;">💡 <strong>Rekomendasi Intervensi PPD:</strong> ${hrInterventionText}</p>
    </div>

    <div>
      <h4 style="font-size:0.85rem; margin-bottom:0.5rem; color:var(--accent);">Analisis Detail Aspek Psikologi Kelompok:</h4>
      
      <!-- Aspek 1 -->
      <div style="margin-bottom:0.5rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:2px;">
          <span>🧠 <strong>Penalaran Taktis & Logika Lapangan</strong></span>
          <span style="color:${groupLogicColor}; font-weight:bold;">${groupLogicLevel} (${avgLogicPct.toFixed(0)}%)</span>
        </div>
        <div style="height:5px; background:#334155; border-radius:2px; overflow:hidden;">
          <div style="width:${avgLogicPct}%; height:100%; background:${groupLogicColor}; border-radius:2px;"></div>
        </div>
        <p style="font-size:0.7rem; color:var(--text-muted); margin-top:2px; margin-bottom:0.4rem; line-height:1.3;">${groupLogicDesc}</p>
      </div>

      <!-- Aspek 2 -->
      <div style="margin-bottom:0.5rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:2px;">
          <span>📊 <strong>Akurasi & Pengambilan Keputusan Numerik</strong></span>
          <span style="color:${groupMathColor}; font-weight:bold;">${groupMathLevel} (${avgMathPct.toFixed(0)}%)</span>
        </div>
        <div style="height:5px; background:#334155; border-radius:2px; overflow:hidden;">
          <div style="width:${avgMathPct}%; height:100%; background:${groupMathColor}; border-radius:2px;"></div>
        </div>
        <p style="font-size:0.7rem; color:var(--text-muted); margin-top:2px; margin-bottom:0.4rem; line-height:1.3;">${groupMathDesc}</p>
      </div>

      <!-- Aspek 3 -->
      <div style="margin-bottom:0.25rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:2px;">
          <span>🗺️ <strong>Kesadaran Spasial & Orientasi K3</strong></span>
          <span style="color:${groupSpatialColor}; font-weight:bold;">${groupSpatialLevel} (${avgSpatialPct.toFixed(0)}%)</span>
        </div>
        <div style="height:5px; background:#334155; border-radius:2px; overflow:hidden;">
          <div style="width:${avgSpatialPct}%; height:100%; background:${groupSpatialColor}; border-radius:2px;"></div>
        </div>
        <p style="font-size:0.7rem; color:var(--text-muted); margin-top:2px; line-height:1.3;">${groupSpatialDesc}</p>
      </div>
    </div>
  `;
}

function renderScoreDistributionChart(db) {
  // We divide scores into 4 intervals: 0-19 (Failed), 20-29 (Low), 30-39 (Average), 40-50 (Excellent)
  let intervals = { failed: 0, low: 0, average: 0, excellent: 0 };
  
  db.forEach(r => {
    if (r.score >= 40) intervals.excellent++;
    else if (r.score >= 30) intervals.average++;
    else if (r.score >= 20) intervals.low++;
    else intervals.failed++;
  });
  
  const maxIntervalVal = Math.max(intervals.failed, intervals.low, intervals.average, intervals.excellent) || 1;
  
  const failedBar = document.getElementById('bar-failed');
  const lowBar = document.getElementById('bar-low');
  const avgBar = document.getElementById('bar-avg');
  const excBar = document.getElementById('bar-exc');
  
  failedBar.style.height = `${(intervals.failed / maxIntervalVal) * 100}%`;
  failedBar.parentElement.querySelector('.bar-value').textContent = intervals.failed;
  
  lowBar.style.height = `${(intervals.low / maxIntervalVal) * 100}%`;
  lowBar.parentElement.querySelector('.bar-value').textContent = intervals.low;
  
  avgBar.style.height = `${(intervals.average / maxIntervalVal) * 100}%`;
  avgBar.parentElement.querySelector('.bar-value').textContent = intervals.average;
  
  excBar.style.height = `${(intervals.excellent / maxIntervalVal) * 100}%`;
  excBar.parentElement.querySelector('.bar-value').textContent = intervals.excellent;
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
  // Logic: max is 18. Math: max is 16. Spatial: max is 16.
  const avgLogicPct = (((totalLogic / count) / 18) * 100).toFixed(0);
  const avgMathPct = (((totalMath / count) / 16) * 100).toFixed(0);
  const avgSpatialPct = (((totalSpatial / count) / 16) * 100).toFixed(0);
  
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
  const avgLogicPct = ((totalLogic / count) / 18) * 100;
  const avgMathPct = ((totalMath / count) / 16) * 100;
  const avgSpatialPct = ((totalSpatial / count) / 16) * 100;
  
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
  
  // Sort by score descending (highest score first) for ranking
  const sortedByScore = [...db].sort((a, b) => b.score - a.score);
  state.currentlyRenderedDb = sortedByScore; // Save list state for clean onclick indexing
  
  sortedByScore.forEach((r, idx) => {
    const tr = document.createElement('tr');
    
    // Determine score class badge on a scale of 100
    const scaledScore = r.score * 2;
    let badgeClass = 'score-mid';
    if (scaledScore >= 80) badgeClass = 'score-high';
    else if (scaledScore < 60) badgeClass = 'score-low';
    
    // Find absolute rank in globally sorted list of all records
    const globalRank = state.resultsDb
      .slice()
      .sort((a, b) => b.score - a.score)
      .findIndex(item => item.nrp === r.nrp && item.date === r.date) + 1;
    
    tr.innerHTML = `
      <td>
        <span style="display:inline-block; padding: 0.15rem 0.35rem; background:rgba(251,191,36,0.1); border:1px solid rgba(251,191,36,0.25); border-radius:4px; font-size:0.7rem; color:var(--accent); font-weight:bold; margin-bottom:0.25rem;">Peringkat #${globalRank}</span>
        <br>
        <strong>${r.nrp}</strong>
        <div style="font-size:0.72rem; color:var(--text-muted); margin-top:2px;">Tes ke-${r.attemptNumber || 1}</div>
      </td>
      <td>${formatDisplayDate(r.date)}</td>
      <td><span class="score-badge ${badgeClass}">${scaledScore} / 100</span></td>
      <td>${formatDisplayDuration(r.duration)}</td>
      <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${r.insight.replace(/<\/?[^>]+(>|$)/g, "")}</td>
      <td>
        <button class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="viewParticipantDetails(${idx})">Detail</button>
        <button class="btn btn-danger" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="resetParticipant(${idx})">Reset</button>
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
  const r = state.currentlyRenderedDb ? state.currentlyRenderedDb[index] : state.resultsDb[index];
  if (!r) return;
  
  let competenceClass = '';
  let traits = '';
  let coachingPlan = '';
  let badgeColor = '';
  const scaledScore = r.score * 2;
  
  if (scaledScore >= 84) {
    competenceClass = 'Sangat Kompeten (Kategori A)';
    badgeColor = 'score-high';
    traits = 'Memiliki logika penalaran taktis dan pemahaman pola visual yang sangat tajam. Sangat mampu menganalisis masalah teknis yang kompleks dan cepat mengambil keputusan pengawasan yang aman.';
    coachingPlan = 'Sangat cocok untuk dipromosikan segera menjadi Group Leader Mandiri dan didelegasikan tanggung jawab pengawasan shift kritis.';
  } else if (scaledScore >= 64) {
    competenceClass = 'Kompeten (Kategori B)';
    badgeColor = 'score-high';
    traits = 'Memiliki pemahaman logika kerja yang stabil dan perhitungan matematis operasional yang baik. Mampu mengarahkan anggota tim sesuai SOP dengan andal.';
    coachingPlan = 'Diberikan pendampingan (coaching) mandiri selama 3 bulan pertama, fokus pada peningkatan kecepatan respon situasi darurat.';
  } else if (scaledScore >= 50) {
    competenceClass = 'Cukup Kompeten (Kategori C)';
    badgeColor = 'score-mid';
    traits = 'Memiliki pemahaman dasar untuk logika pengawasan, namun masih rentan melakukan kesalahan kalkulasi di bawah tekanan kerja lapangan yang tinggi.';
    coachingPlan = 'Disarankan mengikuti program pembinaan (mentoring) intensif dan pelatihan dasar manajemen operasional sebelum memegang shift mandiri.';
  } else {
    competenceClass = 'Perlu Pembinaan Intensif (Kategori D)';
    badgeColor = 'score-low';
    traits = 'Menunjukkan kendala yang signifikan pada penalaran logis, hitungan operasional dasar, maupun pemahaman pola visual. Kurang direkomendasikan untuk tanggung jawab pengawasan langsung saat ini.';
    coachingPlan = 'Wajib mengikuti training ulang (retraining) materi teknis dasar dan didampingi secara ketat oleh Group Leader senior.';
  }
  
  // Get Aspect Analysis
  const logicScore = r.categoryScores ? r.categoryScores.logic : Math.round(r.score * 0.36);
  const mathScore = r.categoryScores ? r.categoryScores.math : Math.round(r.score * 0.32);
  const spatialScore = r.categoryScores ? r.categoryScores.spatial : Math.round(r.score * 0.32);
  
  const aspectAnalysis = getAspectAnalysis(logicScore, mathScore, spatialScore);
  
  document.getElementById('modal-details-title').textContent = `Analisis Hasil: ${r.nrp}`;
  document.getElementById('modal-details-body').innerHTML = `
    <div style="font-family: var(--font-title); font-size: 1.1rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
      Hasil Tes Online Calon GL
    </div>
    <p><strong>NRP Pegawai:</strong> ${r.nrp}</p>
    <p><strong>Waktu Selesai:</strong> ${formatDisplayDate(r.date)}</p>
    <p><strong>Skor Total:</strong> <span class="score-badge ${scaledScore >= 80 ? 'score-high' : scaledScore >= 60 ? 'score-mid' : 'score-low'}">${scaledScore} dari 100 poin</span></p>
    <p><strong>Durasi Pengisian:</strong> ${formatDisplayDuration(r.duration)}</p>
    <p><strong>Soal Tidak Dijawab:</strong> <span style="color: ${r.unanswered > 0 ? '#fbbf24' : 'var(--text-muted)'}; font-weight: bold;">${r.unanswered !== undefined ? r.unanswered : '0'} soal</span></p>
    <br>
    
    <div style="background: var(--bg-secondary); padding: 0.75rem; border-radius: 6px; border: 1px dashed var(--border-color); margin-bottom:1rem;">
      <strong>Rincian Kategori Soal:</strong><br>
      • Deret Angka & Deret Gambar: ${logicScore * 2}/36<br>
      • Aritmatika Logika (Soal Cerita): ${mathScore * 2}/32<br>
      • Spasial 2D & Bangun Ruang: ${spatialScore * 2}/32
    </div>

    <!-- Multi-Aspect Psychological Analysis -->
    <div style="background: rgba(251,191,36,0.02); padding: 0.75rem; border-radius: 6px; border: 1px solid var(--border-color); margin-bottom:1rem;">
      <h4 style="font-size:0.85rem; margin-bottom:0.75rem; color:var(--accent); text-transform:uppercase; letter-spacing:0.05em;">Analisis Aspek Psikologi Pengawasan:</h4>
      
      <!-- Aspek 1 -->
      <div style="margin-bottom:0.75rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:2px;">
          <span>🧠 <strong>Penalaran Taktis & Logika Lapangan</strong></span>
          <span style="color:${aspectAnalysis.logic.color}; font-weight:bold;">${aspectAnalysis.logic.level} (${aspectAnalysis.logic.pct}%)</span>
        </div>
        <div style="height:6px; background:#334155; border-radius:3px; overflow:hidden; margin-bottom:4px;">
          <div style="width:${aspectAnalysis.logic.pct}%; height:100%; background:${aspectAnalysis.logic.color}; border-radius:3px;"></div>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); line-height:1.4; margin-bottom:0.5rem;">${aspectAnalysis.logic.desc}</p>
      </div>

      <!-- Aspek 2 -->
      <div style="margin-bottom:0.75rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:2px;">
          <span>📊 <strong>Akurasi & Pengambilan Keputusan Numerik</strong></span>
          <span style="color:${aspectAnalysis.math.color}; font-weight:bold;">${aspectAnalysis.math.level} (${aspectAnalysis.math.pct}%)</span>
        </div>
        <div style="height:6px; background:#334155; border-radius:3px; overflow:hidden; margin-bottom:4px;">
          <div style="width:${aspectAnalysis.math.pct}%; height:100%; background:${aspectAnalysis.math.color}; border-radius:3px;"></div>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); line-height:1.4; margin-bottom:0.5rem;">${aspectAnalysis.math.desc}</p>
      </div>

      <!-- Aspek 3 -->
      <div style="margin-bottom:0.25rem;">
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:2px;">
          <span>🗺️ <strong>Kesadaran Spasial & Orientasi K3</strong></span>
          <span style="color:${aspectAnalysis.spatial.color}; font-weight:bold;">${aspectAnalysis.spatial.level} (${aspectAnalysis.spatial.pct}%)</span>
        </div>
        <div style="height:6px; background:#334155; border-radius:3px; overflow:hidden; margin-bottom:4px;">
          <div style="width:${aspectAnalysis.spatial.pct}%; height:100%; background:${aspectAnalysis.spatial.color}; border-radius:3px;"></div>
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); line-height:1.4;">${aspectAnalysis.spatial.desc}</p>
      </div>
    </div>
    
    <div style="background: rgba(16,185,129,0.05); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(16,185,129,0.25); margin-bottom:1rem;">
      <strong>Kesimpulan Kompetensi & Profil:</strong><br>
      <span class="score-badge ${badgeColor}" style="margin: 0.5rem 0; display:inline-block;">${competenceClass}</span>
      <p style="color: var(--text-secondary); line-height: 1.5; font-size:0.85rem; margin-bottom:0.5rem;"><strong>Karakter Pengawasan Lapangan:</strong> ${traits}</p>
      <p style="color: var(--text-secondary); line-height: 1.5; font-size:0.85rem;"><strong>Rencana Pendampingan (Coaching Plan):</strong> ${coachingPlan}</p>
    </div>
    
    <div>
      <strong>Umpan Balik Logika Kerja (Saran Peserta):</strong><br>
      <p style="color: var(--text-secondary); line-height: 1.5; margin-top: 0.25rem; font-size:0.85rem;">${r.insight}</p>
    </div>
  `;
  
  showModal('details-modal');
};

// RESET PARTICIPANT RECORD (Perubahan by NRP)
window.resetParticipant = function(index) {
  const r = state.currentlyRenderedDb ? state.currentlyRenderedDb[index] : state.resultsDb[index];
  if (!r) return;
  
  const nrp = r.nrp;
  const date = r.date;
  
  if (confirm(`Apakah Anda yakin ingin menghapus data ujian NRP ${nrp} tanggal ${date}? Tindakan ini akan memungkinkan karyawan tersebut untuk login dan menguji ulang dari awal.`)) {
    // 1. Filter out the selected record from local memory
    state.resultsDb = state.resultsDb.filter(item => !(item.nrp === nrp && item.date === date));
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
  
  try {
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
  } catch (err) {
    console.error('Synchronous fetch failure from Google Sheets:', err);
    return Promise.resolve(state.resultsDb);
  }
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

// Format date to: DD MMM YYYY hh:mm:ss
function formatDisplayDate(dateStr) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return String(dateStr);
    
    const day = String(d.getDate()).padStart(2, '0');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    
    return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
  } catch (e) {
    return String(dateStr);
  }
}

// Format duration to: hh:mm:ss
function formatDisplayDuration(durStr) {
  if (!durStr) return '00:00:00';
  
  const str = String(durStr).trim();
  let hh = 0, mm = 0, ss = 0;
  
  if (str.includes('T')) {
    // Parse ISO date string like "1900-01-01T05:09:56.000Z"
    const timePart = str.split('T')[1] || '';
    const parts = timePart.split(':');
    if (parts.length >= 3) {
      hh = parseInt(parts[0], 10) || 0;
      mm = parseInt(parts[1], 10) || 0;
      ss = parseInt(parts[2].substring(0, 2), 10) || 0;
    }
  } else {
    // Parse duration string like "48:09:00", "48:09", or "00:48:09"
    const parts = str.split(':');
    if (parts.length === 2) {
      mm = parseInt(parts[0], 10) || 0;
      ss = parseInt(parts[1], 10) || 0;
    } else if (parts.length === 3) {
      hh = parseInt(parts[0], 10) || 0;
      mm = parseInt(parts[1], 10) || 0;
      ss = parseInt(parts[2], 10) || 0;
    }
  }
  
  // Shifting logic for Google Sheets HH:MM translation error.
  // Since the exam is strictly capped at 60 minutes, any duration with hh > 0 
  // represents a shifted value where hh is actually the minutes and mm is the seconds.
  if (hh > 0) {
    ss = mm;
    mm = hh;
    hh = 0;
  }
  
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}
