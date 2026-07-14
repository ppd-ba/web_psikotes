// BANK SOAL PSIKOTES ONLINE - PPD BA
// Kategori: Calon Group Leader PT Putra Perkasa Abadi (PPA)
// 50 Soal Terdiri Dari:
// - Soal 1-8: Deret Angka (Logic Number)
// - Soal 9-24: Aritmatika & Logika Soal Cerita (Math & Logic)
// - Soal 25-40: Logika Spasial & Pola Gambar (Spatial Diagram Logic - SVG Choices)
// - Soal 41-50: Tes Deret Gambar & Matriks (Abstract Reasoning - SVG Choices)

const questionBank = [
  // ==========================================
  // BAGIAN A: DERET ANGKA (1 - 8)
  // ==========================================
  {
    id: 1,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 3, 5, 9, 17, 33, ...",
    options: ["45", "55", "65", "75", "85"],
    answer: "65",
    explanation: "Pola deret: Selisih bertambah dua kali lipat (+2, +4, +8, +16, +32). Jadi, 33 + 32 = 65."
  },
  {
    id: 2,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 2, 3, 5, 8, 13, 21, ...",
    options: ["29", "31", "34", "38", "42"],
    answer: "34",
    explanation: "Pola Fibonacci: Angka selanjutnya adalah jumlah dari dua angka sebelumnya. Jadi, 13 + 21 = 34."
  },
  {
    id: 3,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 12, 15, 20, 27, 36, ...",
    options: ["43", "45", "47", "49", "51"],
    answer: "47",
    explanation: "Pola deret: Penambahan angka ganjil secara berurutan (+3, +5, +7, +9). Selanjutnya adalah +11, yaitu 36 + 11 = 47."
  },
  {
    id: 4,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 1, 9, 25, 49, 81, ...",
    options: ["100", "111", "121", "135", "144"],
    answer: "121",
    explanation: "Pola deret: Angka kuadrat dari bilangan ganjil (1², 3², 5², 7², 9²). Selanjutnya adalah 11² = 121."
  },
  {
    id: 5,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 4, 8, 6, 12, 10, 20, 18, ...",
    options: ["24", "28", "32", "36", "40"],
    answer: "36",
    explanation: "Pola deret bergantian: dikali 2, lalu dikurangi 2 (4x2=8, 8-2=6, 6x2=12, 12-2=10, 10x2=20, 20-2=18). Selanjutnya dikali 2: 18x2 = 36."
  },
  {
    id: 6,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 2, 5, 4, 10, 8, 20, 16, ...",
    options: ["24", "30", "32", "36", "40"],
    answer: "40",
    explanation: "Pola lompat 1 deret. Deret ganjil: 2, 4, 8, 16 (selalu dikali 2). Deret genap: 5, 10, 20 (selalu dikali 2). Selanjutnya adalah giliran deret genap: 20x2 = 40."
  },
  {
    id: 7,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 100, 95, 85, 70, 50, ...",
    options: ["15", "20", "25", "30", "35"],
    answer: "25",
    explanation: "Pola deret: Pengurangan dengan kelipatan 5 yang bertambah (-5, -10, -15, -20). Selanjutnya adalah -25, yaitu 50 - 25 = 25."
  },
  {
    id: 8,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 1, 2, 6, 24, 120, ...",
    options: ["240", "360", "480", "600", "720"],
    answer: "720",
    explanation: "Pola deret: Perkalian dengan urutan bilangan asli (1x2=2, 2x3=6, 6x4=24, 24x5=120). Selanjutnya dikali 6: 120x6 = 720."
  },

  // ==========================================
  // BAGIAN B: ARITMATIKA & LOGIKA CERITA (9 - 24)
  // ==========================================
  {
    id: 9,
    category: "math",
    question: "Sebuah mobil kurir mengantar barang ke gudang cabang dengan jarak 6 km. Kecepatan rata-rata mobil saat bermuatan adalah 30 km/jam, dan saat kembali kosong adalah 45 km/jam. Berapa total waktu perjalanan pulang-pergi (dalam menit)?",
    options: ["15 menit", "18 menit", "20 menit", "22 menit", "25 menit"],
    answer: "20 menit",
    explanation: "Waktu pergi = 6 km / 30 km/jam = 0.2 jam = 12 menit. Waktu kembali = 6 km / 45 km/jam = 0.133 jam = 8 menit. Total waktu = 12 + 8 = 20 menit."
  },
  {
    id: 10,
    category: "math",
    question: "Pekerja A dapat mengemas sejumlah paket ke dalam kardus dalam waktu 6 jam. Pekerja B dapat menyelesaikan tugas yang sama dalam waktu 3 jam. Jika Pekerja A dan B ditugaskan menyelesaikan pekerjaan tersebut bersama-sama, berapa lama waktu yang dibutuhkan?",
    options: ["1.5 jam", "2.0 jam", "2.5 jam", "3.0 jam", "4.0 jam"],
    answer: "2.0 jam",
    explanation: "Rumus waktu gabungan: t = (ta * tb) / (ta + tb) = (6 * 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    id: 11,
    category: "math",
    question: "Tangki bahan bakar mesin generator darurat berisi penuh 400 liter. Setelah digunakan menyala selama 8 jam, bahan bakar yang tersisa adalah 120 liter. Berapa persentase rata-rata konsumsi bahan bakar per jam dari kapasitas total tangki?",
    options: ["7.50%", "8.25%", "8.75%", "9.00%", "9.50%"],
    answer: "8.75%",
    explanation: "Konsumsi total = 400 - 120 = 280 liter. Konsumsi per jam = 280 / 8 = 35 liter/jam. Persentase per jam = (35 / 400) * 100% = 8.75% per jam."
  },
  {
    id: 12,
    category: "math",
    question: "Petugas keamanan bekerja dengan pola jadwal: 4 hari masuk kerja berturut-turut, lalu 2 hari libur secara berputar. Jika hari pertama siklus dimulai pada hari Senin (hari ke-1), maka pada hari ke-15 (terhitung sejak hari pertama), status tugasnya adalah...",
    options: ["Masuk Shift Pagi", "Masuk Shift Malam", "Libur Hari Pertama", "Libur Hari Kedua", "Masuk Shift Siang"],
    answer: "Masuk Shift Pagi",
    explanation: "Satu siklus penuh = 4 hari kerja + 2 hari libur = 6 hari. Hari ke-15: 15 dibagi 6 sisa 3. Urutan hari ke-3 di dalam siklus adalah 'Hari Kerja'. Jadi, petugas tersebut masuk tugas."
  },
  {
    id: 13,
    category: "math",
    question: "Kapasitas muatan ember sebuah derek konstruksi adalah 7 kg sekali angkut. Kapasitas sebuah gerobak dorong adalah 35 kg. Berapa kali angkutan ember derek yang dibutuhkan untuk memuat penuh 4 unit gerobak dorong?",
    options: ["15 kali", "18 kali", "20 kali", "22 kali", "25 kali"],
    answer: "20 kali",
    explanation: "Total kapasitas 4 gerobak = 4 * 35 kg = 140 kg. Jumlah angkutan = 140 kg / 7 kg = 20 kali."
  },
  {
    id: 14,
    category: "math",
    question: "Logika Urutan Kinerja: Karyawan A mengemas barang lebih banyak daripada Karyawan B. Karyawan C mengemas barang lebih sedikit daripada Karyawan D, tetapi lebih banyak daripada Karyawan A. Siapakah karyawan dengan kinerja pengemasan paling rendah?",
    options: ["Karyawan A", "Karyawan B", "Karyawan C", "Karyawan D", "Tidak dapat disimpulkan"],
    answer: "Karyawan B",
    explanation: "Dari syarat 1: A > B. Dari syarat 2: D > C > A. Jika digabungkan: D > C > A > B. Karyawan dengan kinerja paling rendah adalah B."
  },
  {
    id: 15,
    category: "math",
    question: "Rata-rata nilai ujian matematika dari 4 orang siswa adalah 38. Ketika ditambah satu orang siswa baru, nilai rata-rata kelas mereka naik menjadi 40. Berapa nilai ujian yang diperoleh siswa baru tersebut?",
    options: ["42", "44", "46", "48", "50"],
    answer: "48",
    explanation: "Total nilai awal = 4 * 38 = 152. Total nilai setelah ditambah siswa baru = 5 * 40 = 200. Nilai siswa baru = 200 - 152 = 48."
  },
  {
    id: 16,
    category: "math",
    question: "Kendaraan A melaju dari kota Mess menuju kota Office dengan kecepatan 40 km/jam mulai pukul 07.00. Kendaraan B menyusul dari tempat yang sama pukul 07.15 dengan kecepatan 60 km/jam. Pada pukul berapa Kendaraan B dapat menyusul Kendaraan A?",
    options: ["Pukul 07.30", "Pukul 07.45", "Pukul 08.00", "Pukul 08.15", "Pukul 08.30"],
    answer: "Pukul 07.45",
    explanation: "Selisih waktu berangkat = 15 menit = 0.25 jam. Selisih jarak awal = 40 * 0.25 = 10 km. Waktu menyusul = Selisih Jarak / (V2 - V1) = 10 / (60 - 40) = 10 / 20 = 0.5 jam = 30 menit. Kendaraan B menyusul pukul 07.15 + 30 menit = 07.45."
  },
  {
    id: 17,
    category: "math",
    question: "Dari 60 paket kiriman yang dijadwalkan diproses hari ini, 15% paket mengalami keterlambatan pengiriman akibat kendala kurir. Berapa paket yang berhasil dikirim tepat waktu?",
    options: ["45 paket", "48 paket", "50 paket", "51 paket", "54 paket"],
    answer: "51 paket",
    explanation: "Paket yang delay = 15% * 60 = 9 paket. Paket yang tepat waktu = 60 - 9 = 51 paket."
  },
  {
    id: 18,
    category: "math",
    question: "Logika Deduktif: Semua koordinator tim wajib memiliki sertifikasi manajemen dasar. Sebagian karyawan senior di kantor menjabat sebagai koordinator tim. Manakah kesimpulan yang mutlak benar?",
    options: [
      "Semua karyawan senior wajib memiliki sertifikasi manajemen dasar.",
      "Sebagian karyawan senior wajib memiliki sertifikasi manajemen dasar.",
      "Semua pemilik sertifikasi manajemen dasar adalah karyawan senior.",
      "Karyawan senior yang bukan koordinator tim wajib memiliki sertifikasi manajemen dasar.",
      "Tidak ada karyawan senior yang memiliki sertifikasi manajemen dasar."
    ],
    answer: "Sebagian karyawan senior wajib memiliki sertifikasi manajemen dasar.",
    explanation: "Karena sebagian karyawan senior menjabat sebagai koordinator tim, dan semua koordinator tim wajib memiliki sertifikasi manajemen dasar, maka sebagian karyawan senior tersebut otomatis wajib memiliki sertifikasi manajemen dasar."
  },
  {
    id: 19,
    category: "math",
    question: "Persediaan bahan makanan di sebuah asrama cukup untuk kebutuhan makan 12 orang selama 20 hari. Jika penghuni asrama bertambah menjadi 15 orang, dalam berapa hari persediaan bahan makanan tersebut akan habis?",
    options: ["14 hari", "15 hari", "16 hari", "17 hari", "18 hari"],
    answer: "16 hari",
    explanation: "Perbandingan berbalik nilai: (12 orang * 20 hari) = (15 orang * x hari) => 240 = 15x => x = 240 / 15 = 16 hari."
  },
  {
    id: 20,
    category: "math",
    question: "Orang A berolahraga di gym setiap 4 hari sekali. Orang B berolahraga di gym setiap 6 hari sekali. Jika mereka berolahraga bersamaan pada hari Selasa, pada hari apakah mereka akan bertemu di gym secara bersamaan berikutnya?",
    options: ["Hari Minggu", "Hari Senin", "Hari Selasa", "Hari Rabu", "Hari Kamis"],
    answer: "Hari Minggu",
    explanation: "KPK dari 4 and 6 adalah 12. Mereka bertemu 12 hari lagi. Selasa + 12 hari: (12 mod 7 = 5 hari setelah Selasa) = hari Minggu."
  },
  {
    id: 21,
    category: "math",
    question: "Sebuah server ditargetkan memiliki tingkat keaktifan (uptime) minimal 90%. Dari total 30 hari dalam sebulan (720 jam total), server tersebut sempat mengalami gangguan (downtime) selama 48 jam. Berapa persentase tingkat keaktifan (uptime) server tersebut?",
    options: ["90.50%", "91.33%", "92.00%", "93.33%", "94.67%"],
    answer: "93.33%",
    explanation: "Jam server aktif = 720 - 48 = 672 jam. Uptime = (Jam Aktif / Jam Total) * 100% = (672 / 720) * 100% = 93.33%."
  },
  {
    id: 22,
    category: "math",
    question: "Waktu tempuh sebuah bus untuk menyelesaikan satu rute perjalanan adalah 24 menit. Berapa kapasitas perjalanan maksimum (ritasi) yang bisa dicapai oleh bus tersebut jika beroperasi efektif selama 8 jam sehari?",
    options: ["15 kali", "18 kali", "20 kali", "24 kali", "30 kali"],
    answer: "20 kali",
    explanation: "Waktu operasi efektif = 8 jam * 60 menit = 480 menit. Jumlah perjalanan maksimum = 480 menit / 24 menit = 20 kali."
  },
  {
    id: 23,
    category: "math",
    question: "Sebuah mesin pemanas ruangan beroperasi selama 10 jam dan menghabiskan 350 liter minyak pemanas. Berapa rata-rata konsumsi minyak per jam?",
    options: ["25 liter/jam", "30 liter/jam", "32 liter/jam", "35 liter/jam", "40 liter/jam"],
    answer: "35 liter/jam",
    explanation: "Rasio Konsumsi = Konsumsi total / Jam Operasi = 350 liter / 10 jam = 35 liter/jam."
  },
  {
    id: 24,
    category: "math",
    question: "Sebuah mesin pembuat roti bekerja secara efektif selama 85% dari total 24 jam sehari. Berapa jam mesin tersebut beroperasi dalam sehari?",
    options: ["19.2 jam", "20.0 jam", "20.4 jam", "21.6 jam", "22.0 jam"],
    answer: "20.4 jam",
    explanation: "Jam operasi mesin = 24 jam * 85% = 24 * 0.85 = 20.4 jam."
  },

  // ==========================================
  // BAGIAN C: LOGIKA POLA GAMBAR & NETS (25 - 40)
  // ==========================================
  {
    id: 25,
    category: "spatial",
    question: "Jika jaring-jaring kubus di bawah ini ditekuk membentuk kubus 3D, manakah orientasi kubus yang paling tepat?",
    svg: `
      <svg viewBox="0 0 200 130" width="100%" height="100%">
        <!-- 2D Net showing Circle (top), Cross (mid-left), Blank (center), Triangle (mid-right), Dot (bottom) -->
        <g stroke="#ffffff" stroke-width="1.5" fill="none" transform="translate(40,10)">
          <!-- Top (Circle) -->
          <rect x="30" y="0" width="30" height="30" />
          <circle cx="45" cy="15" r="7" fill="#fbbf24" stroke="none" />
          
          <!-- Mid Left (Cross) -->
          <rect x="0" y="30" width="30" height="30" />
          <line x1="8" y1="38" x2="22" y2="52" stroke="#fbbf24" stroke-width="2" />
          <line x1="22" y1="38" x2="8" y2="52" stroke="#fbbf24" stroke-width="2" />

          <!-- Center (Blank/Square) -->
          <rect x="30" y="30" width="30" height="30" fill="#222" />

          <!-- Mid Right (Triangle) -->
          <rect x="60" y="30" width="30" height="30" />
          <polygon points="75,35 85,55 65,55" fill="#fbbf24" stroke="none" />

          <!-- Bottom (Dot) -->
          <rect x="30" y="60" width="30" height="30" />
          <circle cx="45" cy="75" r="3" fill="#fbbf24" stroke="none" />
        </g>
      </svg>
    `,
    options: [
      // Option A: Cube with top=Circle, front-left=Cross, front-right=Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="20" cy="11" r="3" fill="#fbbf24"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><line x1="11" y1="17" x2="17" y2="23" stroke="#fbbf24" stroke-width="1"/><line x1="17" y1="17" x2="11" y2="23" stroke="#fbbf24" stroke-width="1"/><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><polygon points="26,16 29,24 23,24" fill="#fbbf24"/></svg>`,
      // Option B: Cube with top=Circle, front-left=Dot, front-right=Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="20" cy="11" r="3" fill="#fbbf24"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="14" cy="20" r="1.5" fill="#fbbf24"/><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><polygon points="26,16 29,24 23,24" fill="#fbbf24"/></svg>`,
      // Option C: Cube with top=Dot, front-left=Cross, front-right=Circle
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="20" cy="11" r="1.5" fill="#fbbf24"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><line x1="11" y1="17" x2="17" y2="23" stroke="#fbbf24" stroke-width="1"/><line x1="17" y1="17" x2="11" y2="23" stroke="#fbbf24" stroke-width="1"/><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="26" cy="20" r="3" fill="#fbbf24"/></svg>`,
      // Option D: Cube showing Circle and Dot adjacent (impossible, they are opposite)
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="20" cy="11" r="3" fill="#fbbf24"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="14" cy="20" r="1.5" fill="#fbbf24"/><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><line x1="23" y1="20" x2="29" y2="20" stroke="#fbbf24" stroke-width="1"/></svg>`,
      // Option E: Cube showing Cross and Triangle opposite
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="20" cy="11" r="1.5" fill="#fbbf24"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><polygon points="26,16 29,24 23,24" fill="#fbbf24"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="20" cy="11" r="3" fill="#fbbf24"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><line x1="11" y1="17" x2="17" y2="23" stroke="#fbbf24" stroke-width="1"/><line x1="17" y1="17" x2="11" y2="23" stroke="#fbbf24" stroke-width="1"/><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><polygon points="26,16 29,24 23,24" fill="#fbbf24"/></svg>`,
    explanation: "Ketika dilipat, Lingkaran (atas) dan Titik (bawah) akan menjadi sisi yang berseberangan. Sisi Cross (kiri) dan sisi Segitiga (kanan) akan melipat mengapit sisi tengah (Blank). Konfigurasi di mana Lingkaran di atas, Cross di depan-kiri, dan Segitiga di depan-kanan adalah susunan sudut temu yang valid (Pilihan A)."
  },
  {
    id: 26,
    category: "spatial",
    question: "Manakah dari kubus 3D berikut yang terbentuk dari lipatan jaring-jaring di bawah ini?",
    svg: `
      <svg viewBox="0 0 200 130" width="100%" height="100%">
        <!-- T-Net: A (x=20), B(x=50), C(x=80), D(x=110) horizontal; E(x=50, y=10) top, F(x=50, y=70) bottom -->
        <g stroke="#ffffff" stroke-width="1.5" fill="none" transform="translate(30,10)">
          <rect x="20" y="30" width="30" height="30" />
          <text x="30" y="52" fill="#fbbf24" font-size="18" font-family="sans-serif">A</text>
          
          <rect x="50" y="30" width="30" height="30" fill="#222" />
          <text x="60" y="52" fill="#fbbf24" font-size="18" font-family="sans-serif">B</text>

          <rect x="80" y="30" width="30" height="30" />
          <circle cx="95" cy="45" r="5" fill="#fbbf24" stroke="none" />

          <rect x="110" y="30" width="30" height="30" />
          <polygon points="125,35 135,55 115,55" fill="#fbbf24" stroke="none" />

          <!-- Top/Bottom vertical -->
          <rect x="50" y="0" width="30" height="30" />
          <line x1="58" y1="8" x2="72" y2="22" stroke="#fbbf24" stroke-width="2" />
          <line x1="72" y1="8" x2="58" y2="22" stroke="#fbbf24" stroke-width="2" />

          <rect x="50" y="60" width="30" height="30" />
          <circle cx="65" cy="75" r="2" fill="#fbbf24" stroke="none" />
        </g>
      </svg>
    `,
    options: [
      // Option A: top=Cross, front-left=B, front-right=Circle
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><line x1="16" y1="8" x2="24" y2="14" stroke="#fbbf24" stroke-width="1"/><line x1="24" y1="8" x2="16" y2="14" stroke="#fbbf24" stroke-width="1"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><text x="11" y="23" fill="#fbbf24" font-size="8">B</text><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="26" cy="20" r="2.5" fill="#fbbf24"/></svg>`,
      // Option B: top=Circle, front-left=B, front-right=Triangle (incorrect)
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="20" cy="11" r="2.5" fill="#fbbf24"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><text x="11" y="23" fill="#fbbf24" font-size="8">B</text><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><polygon points="26,18 29,24 23,24" fill="#fbbf24"/></svg>`,
      // Option C: top=Cross, front-left=A, front-right=Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><line x1="16" y1="8" x2="24" y2="14" stroke="#fbbf24" stroke-width="1"/><line x1="24" y1="8" x2="16" y2="14" stroke="#fbbf24" stroke-width="1"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><text x="11" y="23" fill="#fbbf24" font-size="8">A</text><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><polygon points="26,18 29,24 23,24" fill="#fbbf24"/></svg>`,
      // Option D: top=B, front-left=Circle, front-right=Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><text x="17" y="13" fill="#fbbf24" font-size="8">B</text><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="14" cy="20" r="2.5" fill="#fbbf24"/><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><polygon points="26,18 29,24 23,24" fill="#fbbf24"/></svg>`,
      // Option E: top=Cross, front-left=B, front-right=Dot
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><line x1="16" y1="8" x2="24" y2="14" stroke="#fbbf24" stroke-width="1"/><line x1="24" y1="8" x2="16" y2="14" stroke="#fbbf24" stroke-width="1"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><text x="11" y="23" fill="#fbbf24" font-size="8">B</text><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="26" cy="20" r="1.5" fill="#fbbf24"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><polygon points="20,5 32,11 20,17 8,11" fill="#222" stroke="#fff" stroke-width="0.75"/><line x1="16" y1="8" x2="24" y2="14" stroke="#fbbf24" stroke-width="1"/><line x1="24" y1="8" x2="16" y2="14" stroke="#fbbf24" stroke-width="1"/><polygon points="8,11 20,17 20,29 8,23" fill="#222" stroke="#fff" stroke-width="0.75"/><text x="11" y="23" fill="#fbbf24" font-size="8">B</text><polygon points="20,17 32,11 32,23 20,29" fill="#222" stroke="#fff" stroke-width="0.75"/><circle cx="26" cy="20" r="2.5" fill="#fbbf24"/></svg>`,
    explanation: "Dalam jaring-jaring ini: Sisi B (B) bertetangga langsung di sebelah atas dengan sisi Cross (E), dan di sebelah kanan dengan sisi Circle. Maka ketika dilipat, sisi Cross dapat berada di atas, sisi B di kiri depan, dan sisi Circle di kanan depan. Ini membentuk susunan sudut yang valid (Pilihan A)."
  },
  {
    id: 27,
    category: "spatial",
    question: "Perhatikan jaring-jaring kubus berikut. Sisi manakah yang akan saling BERSEBERANGAN (sejajar) dengan sisi A?",
    svg: `
      <svg viewBox="0 0 200 130" width="100%" height="100%">
        <g stroke="#ffffff" stroke-width="1.5" fill="none" transform="translate(40,10)">
          <rect x="0" y="30" width="30" height="30" />
          <text x="10" y="52" fill="#fbbf24" font-size="18" font-family="sans-serif">A</text>
          
          <rect x="30" y="30" width="30" height="30" />
          <text x="40" y="52" fill="#fbbf24" font-size="18" font-family="sans-serif">B</text>

          <rect x="60" y="30" width="30" height="30" />
          <text x="70" y="52" fill="#fbbf24" font-size="18" font-family="sans-serif">C</text>

          <rect x="90" y="30" width="30" height="30" />
          <text x="100" y="52" fill="#fbbf24" font-size="18" font-family="sans-serif">D</text>

          <!-- Top/Bottom vertical -->
          <rect x="60" y="0" width="30" height="30" />
          <text x="70" y="22" fill="#fbbf24" font-size="18" font-family="sans-serif">E</text>

          <rect x="60" y="60" width="30" height="30" />
          <text x="70" y="82" fill="#fbbf24" font-size="18" font-family="sans-serif">F</text>
        </g>
      </svg>
    `,
    options: [
      "A. Sisi B",
      "B. Sisi C", // Correct
      "C. Sisi D",
      "D. Sisi E",
      "E. Sisi F"
    ],
    answer: "B. Sisi C",
    explanation: "Pada baris horizontal A - B - C - D, sisi A terpisah satu kotak (sisi B) dari sisi C. Oleh karena itu, jika jaring-jaring dilipat menjadi kubus, sisi A dan sisi C akan saling berseberangan."
  },
  {
    id: 28,
    category: "spatial",
    question: "Perhatikan jaring-jaring kubus pada Soal No. 27. Sisi manakah yang akan saling BERSEBERANGAN (sejajar) dengan sisi E?",
    options: [
      "A. Sisi A",
      "B. Sisi B",
      "C. Sisi C",
      "D. Sisi D",
      "E. Sisi F" // Correct
    ],
    answer: "E. Sisi F",
    explanation: "Pada kolom vertikal E - C - F, sisi E terpisah satu kotak (sisi C) dari sisi F. Oleh karena itu, saat dilipat menjadi kubus, sisi E dan sisi F akan saling berhadapan (berseberangan)."
  },
  {
    id: 29,
    category: "spatial",
    question: "Lengkapi matriks pola gambar 3x3 di bawah ini dengan memilih bentuk geometri yang sesuai untuk sel bertanda tanya (?):",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Circle -->
        <g transform="translate(10,10)">
          <circle cx="30" cy="30" r="12" fill="none" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Cell 1,2: Cross -->
        <g transform="translate(70,10)">
          <line x1="18" y1="18" x2="42" y2="42" stroke="#fbbf24" stroke-width="2"/>
          <line x1="42" y1="18" x2="18" y2="42" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Cell 1,3: Triangle -->
        <g transform="translate(130,10)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fbbf24" stroke-width="2"/>
        </g>

        <!-- Cell 2,1: Cross -->
        <g transform="translate(10,70)">
          <line x1="18" y1="18" x2="42" y2="42" stroke="#fbbf24" stroke-width="2"/>
          <line x1="42" y1="18" x2="18" y2="42" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Cell 2,2: Triangle -->
        <g transform="translate(70,70)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Cell 2,3: Circle -->
        <g transform="translate(130,70)">
          <circle cx="30" cy="30" r="12" fill="none" stroke="#fbbf24" stroke-width="2"/>
        </g>

        <!-- Cell 3,1: Triangle -->
        <g transform="translate(10,130)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Cell 3,2: Circle -->
        <g transform="translate(70,130)">
          <circle cx="30" cy="30" r="12" fill="none" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Circle
      `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="10" fill="none" stroke="#fbbf24" stroke-width="2"/></svg>`,
      // Option B: Cross (Correct)
      `<svg viewBox="0 0 40 40"><line x1="10" y1="10" x2="30" y2="30" stroke="#fbbf24" stroke-width="2"/><line x1="30" y1="10" x2="10" y2="30" stroke="#fbbf24" stroke-width="2"/></svg>`,
      // Option C: Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,10 30,30 10,30" fill="none" stroke="#fbbf24" stroke-width="2"/></svg>`,
      // Option D: Square
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fbbf24" stroke-width="2"/></svg>`,
      // Option E: Star
      `<svg viewBox="0 0 40 40"><polygon points="20,5 24,15 34,15 26,22 29,32 20,26 11,32 14,22 6,15 16,15" fill="none" stroke="#fbbf24" stroke-width="1.5"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><line x1="10" y1="10" x2="30" y2="30" stroke="#fbbf24" stroke-width="2"/><line x1="30" y1="10" x2="10" y2="30" stroke="#fbbf24" stroke-width="2"/></svg>`,
    explanation: "Pola penyebaran bentuk pada baris & kolom: Setiap baris dan kolom harus memiliki tepat satu Lingkaran, satu Segitiga, dan satu Tanda Silang (Cross). Baris 3 berisi Segitiga dan Lingkaran, sehingga sel kosong harus berupa Tanda Silang."
  },
  {
    id: 30,
    category: "spatial",
    question: "Tentukan bagian arsiran mana yang sesuai untuk melengkapi sel kosong pada matriks 3x3 berikut:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Top-Left Shaded -->
        <g transform="translate(10,10)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="15" y="15" width="15" height="15" fill="#fbbf24"/>
        </g>
        <!-- Cell 1,2: Top-Right Shaded -->
        <g transform="translate(70,10)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="30" y="15" width="15" height="15" fill="#fbbf24"/>
        </g>
        <!-- Cell 1,3: Bottom-Left Shaded -->
        <g transform="translate(130,10)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="15" y="30" width="15" height="15" fill="#fbbf24"/>
        </g>

        <!-- Cell 2,1: Top-Right Shaded -->
        <g transform="translate(10,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="30" y="15" width="15" height="15" fill="#fbbf24"/>
        </g>
        <!-- Cell 2,2: Bottom-Left Shaded -->
        <g transform="translate(70,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="15" y="30" width="15" height="15" fill="#fbbf24"/>
        </g>
        <!-- Cell 2,3: Bottom-Right Shaded -->
        <g transform="translate(130,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="30" y="30" width="15" height="15" fill="#fbbf24"/>
        </g>

        <!-- Cell 3,1: Bottom-Left Shaded -->
        <g transform="translate(10,130)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="15" y="30" width="15" height="15" fill="#fbbf24"/>
        </g>
        <!-- Cell 3,2: Bottom-Right Shaded -->
        <g transform="translate(70,130)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="30" y="30" width="15" height="15" fill="#fbbf24"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Top-Left Shaded (Correct)
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/><rect x="10" y="10" width="10" height="10" fill="#fbbf24"/></svg>`,
      // Option B: Top-Right Shaded
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/><rect x="20" y="10" width="10" height="10" fill="#fbbf24"/></svg>`,
      // Option C: Bottom-Left Shaded
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/><rect x="10" y="20" width="10" height="10" fill="#fbbf24"/></svg>`,
      // Option D: Bottom-Right Shaded
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/><rect x="20" y="20" width="10" height="10" fill="#fbbf24"/></svg>`,
      // Option E: Full Shaded
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="#fbbf24" stroke="#fff"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/><rect x="10" y="10" width="10" height="10" fill="#fbbf24"/></svg>`,
    explanation: "Aturan rotasi posisi arsiran: Setiap baris/kolom berisi satu arsiran pojok kiri atas, satu kanan atas, satu kiri bawah, dan satu kanan bawah. Baris 3 berisi kiri bawah dan kanan bawah, sehingga sel kosong harus diisi pojok kiri atas (Pilihan A)."
  },
  {
    id: 31,
    category: "spatial",
    question: "Tentukan bentuk poligon yang logis untuk melengkapi pola pertambahan sisi matriks di bawah ini:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Single Triangle (3 sides) -->
        <g transform="translate(10,10)">
          <polygon points="30,20 42,42 18,42" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 1,2: Double Triangles -->
        <g transform="translate(70,10)">
          <polygon points="30,17 42,39 18,39" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
          <polygon points="30,23 42,45 18,45" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 1,3: Triple Triangles -->
        <g transform="translate(130,10)">
          <polygon points="30,14 42,36 18,36" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
          <polygon points="30,20 42,42 18,42" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
          <polygon points="30,26 42,48 18,48" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </g>

        <!-- Cell 2,1: Single Square (4 sides) -->
        <g transform="translate(10,70)">
          <rect x="18" y="18" width="24" height="24" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 2,2: Double Squares -->
        <g transform="translate(70,70)">
          <rect x="18" y="15" width="24" height="24" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
          <rect x="18" y="21" width="24" height="24" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 2,3: Triple Squares -->
        <g transform="translate(130,70)">
          <rect x="18" y="12" width="24" height="24" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
          <rect x="18" y="18" width="24" height="24" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
          <rect x="18" y="24" width="24" height="24" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </g>

        <!-- Cell 3,1: Single Pentagon (5 sides) -->
        <g transform="translate(10,130)">
          <polygon points="30,16 42,25 38,42 22,42 18,25" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 3,2: Double Pentagons -->
        <g transform="translate(70,130)">
          <polygon points="30,13 42,22 38,39 22,39 18,22" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
          <polygon points="30,19 42,28 38,45 22,45 18,28" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Single Pentagon
      `<svg viewBox="0 0 40 40"><polygon points="20,10 32,19 28,34 12,34 8,19" fill="none" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option B: Double Pentagons
      `<svg viewBox="0 0 40 40"><polygon points="20,7 32,16 28,31 12,31 8,16" fill="none" stroke="#fbbf24" stroke-width="1.5"/><polygon points="20,13 32,22 28,37 12,37 8,22" fill="none" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option C: Triple Pentagons (Correct)
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,14 28,29 12,29 8,14" fill="none" stroke="#fbbf24" stroke-width="1.5"/><polygon points="20,11 32,20 28,35 12,35 8,20" fill="none" stroke="#fbbf24" stroke-width="1.5"/><polygon points="20,17 32,26 28,41 12,41 8,26" fill="none" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option D: Triple Squares
      `<svg viewBox="0 0 40 40"><rect x="10" y="5" width="20" height="20" fill="none" stroke="#fbbf24" stroke-width="1.5"/><rect x="10" y="11" width="20" height="20" fill="none" stroke="#fbbf24" stroke-width="1.5"/><rect x="10" y="17" width="20" height="20" fill="none" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option E: Quadruple Pentagons
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,14 28,29 12,29 8,14" fill="none" stroke="#fbbf24" stroke-width="1.5"/><polygon points="20,9 32,18 28,33 12,33 8,18" fill="none" stroke="#fbbf24" stroke-width="1.5"/><polygon points="20,13 32,22 28,37 12,37 8,22" fill="none" stroke="#fbbf24" stroke-width="1.5"/><polygon points="20,17 32,26 28,41 12,41 8,26" fill="none" stroke="#fbbf24" stroke-width="1.5"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><polygon points="20,5 32,14 28,29 12,29 8,14" fill="none" stroke="#fbbf24" stroke-width="1.5"/><polygon points="20,11 32,20 28,35 12,35 8,20" fill="none" stroke="#fbbf24" stroke-width="1.5"/><polygon points="20,17 32,26 28,41 12,41 8,26" fill="none" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
    explanation: "Aturan matriks horizontal: Baris menunjukkan bentuk bangun datar (segitiga, segi empat, segi lima). Kolom menunjukkan jumlah bangun yang ditumpuk (+1 tumpukan per kolom). Baris ketiga adalah Segi Lima (Pentagon) dengan kolom ketiga harus berisi 3 buah Pentagon bertumpuk."
  },
  {
    id: 32,
    category: "spatial",
    question: "Tentukan jarum yang sesuai untuk melanjutkan pola perputaran arah pada matriks 3x3 berikut:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Up -->
        <g transform="translate(10,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="45" x2="30" y2="15"/>
          <polygon points="30,12 34,22 26,22" fill="#fbbf24"/>
        </g>
        <!-- Cell 1,2: Up-Right -->
        <g transform="translate(70,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="45" x2="30" y2="15" transform="rotate(45, 30, 30)"/>
          <polygon points="30,12 34,22 26,22" fill="#fbbf24" transform="rotate(45, 30, 30)"/>
        </g>
        <!-- Cell 1,3: Right -->
        <g transform="translate(130,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="45" x2="30" y2="15" transform="rotate(90, 30, 30)"/>
          <polygon points="30,12 34,22 26,22" fill="#fbbf24" transform="rotate(90, 30, 30)"/>
        </g>

        <!-- Cell 2,1: Right -->
        <g transform="translate(10,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="45" x2="30" y2="15" transform="rotate(90, 30, 30)"/>
          <polygon points="30,12 34,22 26,22" fill="#fbbf24" transform="rotate(90, 30, 30)"/>
        </g>
        <!-- Cell 2,2: Down-Right -->
        <g transform="translate(70,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="45" x2="30" y2="15" transform="rotate(135, 30, 30)"/>
          <polygon points="30,12 34,22 26,22" fill="#fbbf24" transform="rotate(135, 30, 30)"/>
        </g>
        <!-- Cell 2,3: Down -->
        <g transform="translate(130,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="45" x2="30" y2="15" transform="rotate(180, 30, 30)"/>
          <polygon points="30,12 34,22 26,22" fill="#fbbf24" transform="rotate(180, 30, 30)"/>
        </g>

        <!-- Cell 3,1: Down -->
        <g transform="translate(10,130)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="45" x2="30" y2="15" transform="rotate(180, 30, 30)"/>
          <polygon points="30,12 34,22 26,22" fill="#fbbf24" transform="rotate(180, 30, 30)"/>
        </g>
        <!-- Cell 3,2: Down-Left -->
        <g transform="translate(70,130)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="45" x2="30" y2="15" transform="rotate(225, 30, 30)"/>
          <polygon points="30,12 34,22 26,22" fill="#fbbf24" transform="rotate(225, 30, 30)"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Left (Correct)
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="20" y1="30" x2="20" y2="10" transform="rotate(270, 20, 20)"/><polygon points="20,7 23,15 17,15" fill="#fbbf24" transform="rotate(270, 20, 20)"/></svg>`,
      // Option B: Up
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="20" y1="30" x2="20" y2="10"/><polygon points="20,7 23,15 17,15" fill="#fbbf24"/></svg>`,
      // Option C: Down-Left
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="20" y1="30" x2="20" y2="10" transform="rotate(225, 20, 20)"/><polygon points="20,7 23,15 17,15" fill="#fbbf24" transform="rotate(225, 20, 20)"/></svg>`,
      // Option D: Right
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="20" y1="30" x2="20" y2="10" transform="rotate(90, 20, 20)"/><polygon points="20,7 23,15 17,15" fill="#fbbf24" transform="rotate(90, 20, 20)"/></svg>`,
      // Option E: Up-Left
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="20" y1="30" x2="20" y2="10" transform="rotate(315, 20, 20)"/><polygon points="20,7 23,15 17,15" fill="#fbbf24" transform="rotate(315, 20, 20)"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="20" y1="30" x2="20" y2="10" transform="rotate(270, 20, 20)"/><polygon points="20,7 23,15 17,15" fill="#fbbf24" transform="rotate(270, 20, 20)"/></svg>`,
    explanation: "Aturan perputaran jarum: Di setiap baris, jarum berputar 45 derajat searah jarum jam (CW) di setiap kolom. Baris ketiga dimulai dari Bawah (180°) -> Bawah-Kiri (225°) -> Selanjutnya harus berputar 45 derajat lagi menjadi arah Kiri (270°)."
  },
  {
    id: 33,
    category: "spatial",
    question: "Tentukan bentuk arsiran visual yang logis untuk melengkapi matriks 3x3 berikut:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Solid Circle -->
        <g transform="translate(10,10)">
          <circle cx="30" cy="30" r="15" fill="#fbbf24" stroke="#111" stroke-width="1"/>
        </g>
        <!-- Cell 1,2: Outline Circle -->
        <g transform="translate(70,10)">
          <circle cx="30" cy="30" r="15" fill="none" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Cell 1,3: Striped Circle -->
        <g transform="translate(130,10)">
          <circle cx="30" cy="30" r="15" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <line x1="18" y1="20" x2="42" y2="40" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="15" y1="30" x2="45" y2="30" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="18" y1="40" x2="42" y2="20" stroke="#fbbf24" stroke-width="1.5"/>
        </g>

        <!-- Cell 2,1: Outline Square -->
        <g transform="translate(10,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Cell 2,2: Striped Square -->
        <g transform="translate(70,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <line x1="15" y1="20" x2="45" y2="40" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="15" y1="30" x2="45" y2="30" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="15" y1="40" x2="45" y2="20" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 2,3: Solid Square -->
        <g transform="translate(130,70)">
          <rect x="15" y="15" width="30" height="30" fill="#fbbf24" stroke="#111" stroke-width="1"/>
        </g>

        <!-- Cell 3,1: Striped Triangle -->
        <g transform="translate(10,130)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <line x1="20" y1="40" x2="40" y2="40" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="25" y1="30" x2="35" y2="30" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 3,2: Solid Triangle -->
        <g transform="translate(70,130)">
          <polygon points="30,15 45,45 15,45" fill="#fbbf24" stroke="#111" stroke-width="1"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Solid Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,10 32,30 8,30" fill="#fbbf24" stroke="#111"/></svg>`,
      // Option B: Outline Triangle (Correct)
      `<svg viewBox="0 0 40 40"><polygon points="20,10 32,30 8,30" fill="none" stroke="#fbbf24" stroke-width="2"/></svg>`,
      // Option C: Striped Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,10 32,30 8,30" fill="none" stroke="#fbbf24" stroke-width="2"/><line x1="12" y1="26" x2="28" y2="26" stroke="#fbbf24" stroke-width="1"/><line x1="16" y1="20" x2="24" y2="20" stroke="#fbbf24" stroke-width="1"/></svg>`,
      // Option D: Outline Square
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fbbf24" stroke-width="2"/></svg>`,
      // Option E: Double Outline Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,8 34,31 6,31" fill="none" stroke="#fbbf24" stroke-width="1"/><polygon points="20,12 30,29 10,29" fill="none" stroke="#fbbf24" stroke-width="1"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><polygon points="20,10 32,30 8,30" fill="none" stroke="#fbbf24" stroke-width="2"/></svg>`,
    explanation: "Aturan tipe isi: Setiap baris/kolom mengandung satu bentuk Penuh Warna (Solid), satu Kerangka (Outline), dan satu Bergaris (Striped). Baris 3 sudah memiliki Bergaris dan Penuh, sehingga sel kosong harus diisi Kerangka Segitiga (Outline Triangle)."
  },
  {
    id: 34,
    category: "spatial",
    question: "Tentukan kelompok tanda panah yang tepat untuk melengkapi sel kosong pada matriks berikut:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Left Arrow -->
        <g transform="translate(10,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="45" y1="30" x2="15" y2="30"/>
          <polygon points="12,30 22,25 22,35" fill="#fbbf24"/>
        </g>
        <!-- Cell 1,2: Right Arrow -->
        <g transform="translate(70,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="30" x2="45" y2="30"/>
          <polygon points="48,30 38,25 38,35" fill="#fbbf24"/>
        </g>
        <!-- Cell 1,3: Two horizontal opposite arrows -->
        <g transform="translate(130,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="25" x2="45" y2="25"/>
          <polygon points="12,25 22,21 22,29" fill="#fbbf24"/>
          <line x1="15" y1="35" x2="45" y2="35"/>
          <polygon points="48,35 38,31 38,39" fill="#fbbf24"/>
        </g>

        <!-- Cell 2,1: Up Arrow -->
        <g transform="translate(10,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="45" x2="30" y2="15"/>
          <polygon points="30,12 25,22 35,22" fill="#fbbf24"/>
        </g>
        <!-- Cell 2,2: Down Arrow -->
        <g transform="translate(70,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="15" x2="30" y2="45"/>
          <polygon points="30,48 25,38 35,38" fill="#fbbf24"/>
        </g>
        <!-- Cell 2,3: Two vertical opposite arrows -->
        <g transform="translate(130,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="25" y1="15" x2="25" y2="45"/>
          <polygon points="25,12 21,22 29,22" fill="#fbbf24"/>
          <line x1="35" y1="15" x2="35" y2="45"/>
          <polygon points="35,48 31,38 39,38" fill="#fbbf24"/>
        </g>

        <!-- Cell 3,1: Diagonal Up-Left Arrow -->
        <g transform="translate(10,130)" stroke="#fbbf24" stroke-width="2">
          <line x1="42" y1="42" x2="18" y2="18"/>
          <polygon points="15,15 25,15 15,25" fill="#fbbf24"/>
        </g>
        <!-- Cell 3,2: Diagonal Down-Right Arrow -->
        <g transform="translate(70,130)" stroke="#fbbf24" stroke-width="2">
          <line x1="18" y1="18" x2="42" y2="42"/>
          <polygon points="45,45 35,45 45,35" fill="#fbbf24"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Two opposite diagonal arrows (Correct)
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="32" y1="32" x2="18" y2="18"/><polygon points="15,15 23,15 15,23" fill="#fbbf24"/><line x1="18" y1="18" x2="32" y2="32"/><polygon points="35,35 27,35 35,27" fill="#fbbf24"/></svg>`,
      // Option B: Up Arrow
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="20" y1="30" x2="20" y2="10"/><polygon points="20,7 23,15 17,15" fill="#fbbf24"/></svg>`,
      // Option C: Down Arrow
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="20" y1="10" x2="20" y2="30"/><polygon points="20,33 23,25 17,25" fill="#fbbf24"/></svg>`,
      // Option D: Horizontal opposite arrows
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="10" y1="15" x2="30" y2="15"/><polygon points="7,15 15,12 15,18" fill="#fbbf24"/><line x1="10" y1="25" x2="30" y2="25"/><polygon points="33,25 25,22 25,28" fill="#fbbf24"/></svg>`,
      // Option E: Diagonal Up-Right arrow
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="10" y1="30" x2="30" y2="10"/><polygon points="33,7 25,7 33,15" fill="#fbbf24"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="32" y1="32" x2="18" y2="18"/><polygon points="15,15 23,15 15,23" fill="#fbbf24"/><line x1="18" y1="18" x2="32" y2="32"/><polygon points="35,35 27,35 35,27" fill="#fbbf24"/></svg>`,
    explanation: "Aturan perpaduan panah: Kolom ketiga adalah gabungan berlawanan arah dari kolom 1 dan kolom 2. Baris 3 memiliki panah Serong Kiri Atas (1) dan Serong Kanan Bawah (2), sehingga kolom 3 harus menggabungkan keduanya menjadi sepasang panah serong yang saling bertolak belakang."
  },
  {
    id: 35,
    category: "spatial",
    question: "Berdasarkan relasi bentuk pada gambar di bawah ini, tentukan bentuk geometri pilihan yang paling tepat untuk mengisi tanda tanya (?):",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <!-- Grid Outline -->
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell (1,1) Hexagon -->
        <g transform="translate(10,10)">
          <polygon points="30,15 45,25 45,45 30,55 15,45 15,25" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (1,2) Square -->
        <g transform="translate(70,10)">
          <rect x="15" y="15" width="30" height="30" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (1,3) Triangle -->
        <g transform="translate(130,10)">
          <polygon points="30,15 45,45 15,45" fill="#fbbf24" stroke="#111"/>
        </g>

        <!-- Cell (2,1) Square -->
        <g transform="translate(10,70)">
          <rect x="15" y="15" width="30" height="30" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (2,2) Triangle -->
        <g transform="translate(70,70)">
          <polygon points="30,15 45,45 15,45" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (2,3) Hexagon -->
        <g transform="translate(130,70)">
          <polygon points="30,15 45,25 45,45 30,55 15,45 15,25" fill="#fbbf24" stroke="#111"/>
        </g>

        <!-- Cell (3,1) Triangle -->
        <g transform="translate(10,130)">
          <polygon points="30,15 45,45 15,45" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (3,2) Hexagon -->
        <g transform="translate(70,130)">
          <polygon points="30,15 45,25 45,45 30,55 15,45 15,25" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (3,3) ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Hexagon
      `<svg viewBox="0 0 40 40"><polygon points="20,8 32,15 32,30 20,37 8,30 8,15" fill="#fbbf24" stroke="#111"/></svg>`,
      // Option B: Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,10 32,30 8,30" fill="#fbbf24" stroke="#111"/></svg>`,
      // Option C: Square (Correct)
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="#fbbf24" stroke="#111"/></svg>`,
      // Option D: Circle
      `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="10" fill="#fbbf24" stroke="#111"/></svg>`,
      // Option E: Star
      `<svg viewBox="0 0 40 40"><polygon points="20,5 24,15 34,15 26,22 29,32 20,26 11,32 14,22 6,15 16,15" fill="#fbbf24" stroke="#111"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="#fbbf24" stroke="#111"/></svg>`,
    explanation: "Aturan baris/kolom matriks: Setiap baris dan kolom harus memiliki tepat satu dari tiga bentuk dasar (Segi enam, Persegi, dan Segitiga). Baris 3 berisi Segitiga dan Segi enam, sehingga sel kosong harus diisi oleh Persegi (Square)."
  },
  {
    id: 36,
    category: "spatial",
    question: "Tentukan kelompok garis mana yang sesuai untuk melengkapi sel kosong pada matriks 3x3 berikut:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <!-- Grid Outline -->
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: 3 Diagonal Lines -->
        <g transform="translate(10,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="45" x2="45" y2="15"/>
          <line x1="20" y1="50" x2="50" y2="20"/>
          <line x1="25" y1="55" x2="55" y2="25"/>
        </g>
        <!-- Cell 1,2: 3 Vertical Lines -->
        <g transform="translate(70,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="25" y1="15" x2="25" y2="55"/>
          <line x1="30" y1="15" x2="30" y2="55"/>
          <line x1="35" y1="15" x2="35" y2="55"/>
        </g>
        <!-- Cell 1,3: 3 Horizontal Lines -->
        <g transform="translate(130,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="25" x2="55" y2="25"/>
          <line x1="15" y1="30" x2="55" y2="30"/>
          <line x1="15" y1="35" x2="55" y2="35"/>
        </g>

        <!-- Cell 2,1: 3 Vertical Lines -->
        <g transform="translate(10,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="25" y1="15" x2="25" y2="55"/>
          <line x1="30" y1="15" x2="30" y2="55"/>
          <line x1="35" y1="15" x2="35" y2="55"/>
        </g>
        <!-- Cell 2,2: 3 Horizontal Lines -->
        <g transform="translate(70,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="25" x2="55" y2="25"/>
          <line x1="15" y1="30" x2="55" y2="30"/>
          <line x1="15" y1="35" x2="55" y2="35"/>
        </g>
        <!-- Cell 2,3: 3 Diagonal Lines -->
        <g transform="translate(130,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="45" x2="45" y2="15"/>
          <line x1="20" y1="50" x2="50" y2="20"/>
          <line x1="25" y1="55" x2="55" y2="25"/>
        </g>

        <!-- Cell 3,1: 3 Horizontal Lines -->
        <g transform="translate(10,130)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="25" x2="55" y2="25"/>
          <line x1="15" y1="30" x2="55" y2="30"/>
          <line x1="15" y1="35" x2="55" y2="35"/>
        </g>
        <!-- Cell 3,2: 3 Diagonal Lines -->
        <g transform="translate(70,130)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="45" x2="45" y2="15"/>
          <line x1="20" y1="50" x2="50" y2="20"/>
          <line x1="25" y1="55" x2="55" y2="25"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Diagonal
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="10" y1="30" x2="30" y2="10"/><line x1="15" y1="35" x2="35" y2="15"/><line x1="5" y1="25" x2="25" y2="5"/></svg>`,
      // Option B: Hashtag
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="15" y1="5" x2="15" y2="35"/><line x1="25" y1="5" x2="25" y2="35"/><line x1="5" y1="15" x2="35" y2="15"/><line x1="5" y1="25" x2="35" y2="25"/></svg>`,
      // Option C: 3 Vertical (Correct)
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="15" y1="5" x2="15" y2="35"/><line x1="20" y1="5" x2="20" y2="35"/><line x1="25" y1="5" x2="25" y2="35"/></svg>`,
      // Option D: 2 Vertical
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="15" y1="5" x2="15" y2="35"/><line x1="25" y1="5" x2="25" y2="35"/></svg>`,
      // Option E: 3 Horizontal
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="5" y1="15" x2="35" y2="15"/><line x1="5" y1="20" x2="35" y2="20"/><line x1="5" y1="25" x2="35" y2="25"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="15" y1="5" x2="15" y2="35"/><line x1="20" y1="5" x2="20" y2="35"/><line x1="25" y1="5" x2="25" y2="35"/></svg>`,
    explanation: "Aturan kombinasi baris: Setiap baris/kolom berisi satu set garis Horizontal, satu set Vertikal, dan satu set Diagonal. Baris ketiga mengandung Horizontal dan Diagonal, sehingga sel kosong harus diisi oleh garis Vertikal (Pilihan C)."
  },
  {
    id: 37,
    category: "spatial",
    question: "Tentukan bentuk geometri dan simbol yang paling tepat untuk melengkapi sel kosong pada matriks 3x3 di bawah ini:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <!-- Grid Outline -->
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Triangle (None) -->
        <g transform="translate(10,10)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fff" stroke-width="1.5"/>
        </g>
        <!-- Cell 1,2: Square (None) -->
        <g transform="translate(70,10)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff" stroke-width="1.5"/>
        </g>
        <!-- Cell 1,3: House + Dot -->
        <g transform="translate(130,10)">
          <polygon points="30,15 45,30 45,50 15,50 15,30" fill="none" stroke="#fff" stroke-width="1.5"/>
          <circle cx="30" cy="38" r="2" fill="#fbbf24"/>
        </g>

        <!-- Cell 2,1: Square + Dot -->
        <g transform="translate(10,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff" stroke-width="1.5"/>
          <circle cx="30" cy="30" r="2" fill="#fbbf24"/>
        </g>
        <!-- Cell 2,2: House (None) -->
        <g transform="translate(70,70)">
          <polygon points="30,15 45,30 45,50 15,50 15,30" fill="none" stroke="#fff" stroke-width="1.5"/>
        </g>
        <!-- Cell 2,3: Triangle + Cross -->
        <g transform="translate(130,70)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fff" stroke-width="1.5"/>
          <!-- Small cross at top -->
          <line x1="30" y1="8" x2="30" y2="15" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="27" y1="11" x2="33" y2="11" stroke="#fbbf24" stroke-width="1.5"/>
        </g>

        <!-- Cell 3,1: House + Cross -->
        <g transform="translate(10,130)">
          <polygon points="30,15 45,30 45,50 15,50 15,30" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="30" y1="8" x2="30" y2="15" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="27" y1="11" x2="33" y2="11" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 3,2: Triangle + Dot -->
        <g transform="translate(70,130)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fff" stroke-width="1.5"/>
          <circle cx="30" cy="35" r="2" fill="#fbbf24"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Triangle + Dot
      `<svg viewBox="0 0 40 40"><polygon points="20,12 32,32 8,32" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="20" cy="24" r="2" fill="#fbbf24"/></svg>`,
      // Option B: Square + Cross (Correct)
      `<svg viewBox="0 0 40 40"><rect x="10" y="12" width="20" height="20" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="20" y1="5" x2="20" y2="12" stroke="#fbbf24" stroke-width="1.5"/><line x1="17" y1="8" x2="23" y2="8" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option C: House + Cross + Dot
      `<svg viewBox="0 0 40 40"><polygon points="20,12 32,22 32,37 8,37 8,22" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="20" cy="28" r="2" fill="#fbbf24"/><line x1="20" y1="5" x2="20" y2="12" stroke="#fbbf24" stroke-width="1.5"/><line x1="17" y1="8" x2="23" y2="8" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option D: Triangle + Cross
      `<svg viewBox="0 0 40 40"><polygon points="20,12 32,32 8,32" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="20" y1="5" x2="20" y2="12" stroke="#fbbf24" stroke-width="1.5"/><line x1="17" y1="8" x2="23" y2="8" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option E: Square (None)
      `<svg viewBox="0 0 40 40"><rect x="10" y="12" width="20" height="20" fill="none" stroke="#fff" stroke-width="1.5"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="10" y="12" width="20" height="20" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="20" y1="5" x2="20" y2="12" stroke="#fbbf24" stroke-width="1.5"/><line x1="17" y1="8" x2="23" y2="8" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
    explanation: "Baris ketiga memerlukan bentuk dasar Persegi untuk melengkapi sebaran geometri (Segitiga dan Rumah sudah ada). Untuk lambang atas, baris ketiga sudah memiliki Palang (di Rumah) dan Titik (di Segitiga), sehingga Persegi wajib memiliki Palang (+) di atasnya (Pilihan B)."
  },
  {
    id: 38,
    category: "spatial",
    question: "Tentukan bentuk visual yang logis selanjutnya untuk melengkapi deret analogi di bawah ini:",
    svg: `
      <svg viewBox="0 0 320 100" width="100%" height="100%">
        <!-- Frame 1: Circle inside Square -->
        <g transform="translate(10, 10)">
          <rect x="5" y="5" width="30" height="30" fill="none" stroke="#fff" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="10" fill="#fbbf24" stroke="none"/>
        </g>
        <!-- Arrow -->
        <g transform="translate(50, 10)" stroke="#fff" stroke-width="1.5" fill="none">
          <line x1="5" y1="20" x2="25" y2="20"/>
          <polygon points="25,20 20,16 20,24" fill="#fff" stroke="none"/>
        </g>
        <!-- Frame 2: Square inside Circle -->
        <g transform="translate(85, 10)">
          <circle cx="20" cy="20" r="15" fill="none" stroke="#fff" stroke-width="1.5"/>
          <rect x="12" y="12" width="16" height="16" fill="#fbbf24" stroke="none"/>
        </g>

        <!-- Divider line -->
        <line x1="135" y1="10" x2="135" y2="50" stroke="#555" stroke-dasharray="3,3"/>

        <!-- Frame 3: Triangle inside Hexagon -->
        <g transform="translate(150, 10)">
          <polygon points="20,5 32,12 32,28 20,35 8,28 8,12" fill="none" stroke="#fff" stroke-width="1.5"/>
          <polygon points="20,14 28,27 12,27" fill="#fbbf24" stroke="none"/>
        </g>
        <!-- Arrow -->
        <g transform="translate(190, 10)" stroke="#fff" stroke-width="1.5" fill="none">
          <line x1="5" y1="20" x2="25" y2="20"/>
          <polygon points="25,20 20,16 20,24" fill="#fff" stroke="none"/>
        </g>
        <!-- Frame 4 (Question) -->
        <g transform="translate(225, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <text x="14" y="26" fill="#fbbf24" font-size="20" font-family="sans-serif" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Hexagon inside Triangle (Correct)
      `<svg viewBox="0 0 40 40"><polygon points="20,5 35,32 5,32" fill="none" stroke="#fff" stroke-width="1.5"/><polygon points="20,15 27,19 27,27 20,31 13,27 13,19" fill="#fbbf24" stroke="none"/></svg>`,
      // Option B: Triangle inside Hexagon
      `<svg viewBox="0 0 40 40"><polygon points="20,5 32,12 32,28 20,35 8,28 8,12" fill="none" stroke="#fff" stroke-width="1.5"/><polygon points="20,14 28,27 12,27" fill="#fbbf24" stroke="none"/></svg>`,
      // Option C: Circle inside Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,5 35,32 5,32" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="20" cy="22" r="7" fill="#fbbf24" stroke="none"/></svg>`,
      // Option D: Hexagon inside Square
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff" stroke-width="1.5"/><polygon points="20,13 25,16 25,24 20,27 15,24 15,16" fill="#fbbf24" stroke="none"/></svg>`,
      // Option E: Star inside Circle
      `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#fff" stroke-width="1.5"/><polygon points="20,10 23,17 30,17 25,22 27,29 20,25 13,29 15,22 10,17 17,17" fill="#fbbf24" stroke="none"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><polygon points="20,5 35,32 5,32" fill="none" stroke="#fff" stroke-width="1.5"/><polygon points="20,15 27,19 27,27 20,31 13,27 13,19" fill="#fbbf24" stroke="none"/></svg>`,
    explanation: "Analogi posisi wadah-konten: Hubungan pertama adalah Lingkaran di dalam Persegi berubah menjadi Persegi di dalam Lingkaran (posisi wadah dan konten bertukar tempat). Maka hubungan kedua, Segitiga di dalam Segi enam harus berubah menjadi Segi enam di dalam Segitiga (Pilihan A)."
  },
  {
    id: 39,
    category: "spatial",
    question: "Tentukan bentuk pola gambar yang sesuai untuk melengkapi hubungan analogi logis berikut:",
    svg: `
      <svg viewBox="0 0 320 100" width="100%" height="100%">
        <!-- Frame 1: Square with vertical line -->
        <g transform="translate(10, 10)">
          <rect x="5" y="5" width="30" height="30" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="20" y1="5" x2="20" y2="35" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Arrow -->
        <g transform="translate(50, 10)" stroke="#fff" stroke-width="1.5" fill="none">
          <line x1="5" y1="20" x2="25" y2="20"/>
          <polygon points="25,20 20,16 20,24" fill="#fff" stroke="none"/>
        </g>
        <!-- Frame 2: Square with horizontal line (rotated 90 deg) -->
        <g transform="translate(85, 10)">
          <rect x="5" y="5" width="30" height="30" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="5" y1="20" x2="35" y2="20" stroke="#fbbf24" stroke-width="2"/>
        </g>

        <!-- Divider line -->
        <line x1="135" y1="10" x2="135" y2="50" stroke="#555" stroke-dasharray="3,3"/>

        <!-- Frame 3: Triangle with diagonal line (pointing top-right) -->
        <g transform="translate(150, 10)">
          <polygon points="20,5 35,32 5,32" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="5" y1="32" x2="20" y2="5" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <!-- Arrow -->
        <g transform="translate(190, 10)" stroke="#fff" stroke-width="1.5" fill="none">
          <line x1="5" y1="20" x2="25" y2="20"/>
          <polygon points="25,20 20,16 20,24" fill="#fff" stroke="none"/>
        </g>
        <!-- Frame 4 (Question) -->
        <g transform="translate(225, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <text x="14" y="26" fill="#fbbf24" font-size="20" font-family="sans-serif" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Triangle with diagonal line (pointing top-left) - Correct (rotated 90 deg)
      `<svg viewBox="0 0 40 40"><polygon points="20,10 35,35 5,35" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="35" y1="35" x2="20" y2="10" stroke="#fbbf24" stroke-width="2"/></svg>`,
      // Option B: Triangle with vertical line
      `<svg viewBox="0 0 40 40"><polygon points="20,10 35,35 5,35" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="20" y1="10" x2="20" y2="35" stroke="#fbbf24" stroke-width="2"/></svg>`,
      // Option C: Triangle with horizontal line
      `<svg viewBox="0 0 40 40"><polygon points="20,10 35,35 5,35" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="10" y1="25" x2="30" y2="25" stroke="#fbbf24" stroke-width="2"/></svg>`,
      // Option D: Inverted triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,35 35,10 5,10" fill="none" stroke="#fff" stroke-width="1.5"/></svg>`,
      // Option E: Circle with cross line
      `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="8" y1="20" x2="32" y2="20" stroke="#fbbf24" stroke-width="2"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><polygon points="20,10 35,35 5,35" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="35" y1="35" x2="20" y2="10" stroke="#fbbf24" stroke-width="2"/></svg>`,
    explanation: "Hubungan pertama adalah rotasi bangun datar beserta garis dalamnya sebesar 90 derajat searah jarum jam (CW). Maka hubungan kedua, Segitiga dengan garis miring serong kanan atas jika diputar 90 derajat CW akan menempatkan garis miring serong kiri atas (Pilihan A)."
  },
  {
    id: 40,
    category: "spatial",
    question: "Tentukan bentuk potongan puzzle gambar yang sesuai untuk melengkapi bagian kosong di bawah ini:",
    svg: `
      <svg viewBox="0 0 200 130" width="100%" height="100%">
        <!-- Large Square with a cut-out at the bottom-right corner -->
        <g stroke="#ffffff" stroke-width="2" fill="none" transform="translate(50, 15)">
          <path d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z" fill="#222" stroke="#fff" />
          <!-- Dashed outline showing the missing piece -->
          <path d="M50,50 L90,50 L90,90 L50,90 Z" stroke="#fbbf24" stroke-dasharray="3,3" />
        </g>
      </svg>
    `,
    options: [
      // Option A: Square block matching the cut-out (Correct)
      `<svg viewBox="0 0 40 40"><rect x="12" y="12" width="16" height="16" fill="#fbbf24" stroke="#111" stroke-width="1"/></svg>`,
      // Option B: Triangle block
      `<svg viewBox="0 0 40 40"><polygon points="20,10 32,30 8,30" fill="#fbbf24" stroke="#111" stroke-width="1"/></svg>`,
      // Option C: Circle block
      `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="9" fill="#fbbf24" stroke="#111" stroke-width="1"/></svg>`,
      // Option D: L-shape block
      `<svg viewBox="0 0 40 40"><polygon points="10,10 25,10 25,25 10,25 10,18 18,18 18,10" fill="#fbbf24" stroke="#111" stroke-width="0.5"/></svg>`,
      // Option E: Pentagon block
      `<svg viewBox="0 0 40 40"><polygon points="20,10 30,18 26,30 14,30 10,18" fill="#fbbf24" stroke="#111" stroke-width="1"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="12" y="12" width="16" height="16" fill="#fbbf24" stroke="#111" stroke-width="1"/></svg>`,
    explanation: "Berdasarkan rongga potongan garis putus-putus pada bangun acuan, bentuk yang hilang adalah potongan kubus/segi empat persegi sempurna berukuran 40x40. Pilihan A adalah potongan penutup yang tepat."
  },

  // ==========================================
  // BAGIAN D: TES DERET GAMBAR & MATRIKS (41 - 50)
  // ==========================================
  {
    id: 41,
    category: "logic",
    question: "Pilihlah gambar pilihan (A, B, C, D, atau E) yang paling tepat untuk mengisi kotak kosong tanda tanya (?) dari deret gambar akumulasi kotak berikut:",
    svg: `
      <svg viewBox="0 0 320 100" width="100%" height="100%">
        <!-- Frame 1 -->
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/>
          <!-- 1 block filled -->
          <rect x="10" y="0" width="10" height="10" fill="#fbbf24"/>
        </g>
        <!-- Frame 2 -->
        <g transform="translate(60, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/>
          <!-- 2 blocks filled -->
          <rect x="10" y="0" width="10" height="10" fill="#fbbf24"/>
          <rect x="0" y="10" width="10" height="10" fill="#fbbf24"/>
        </g>
        <!-- Frame 3 -->
        <g transform="translate(110, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/>
          <!-- 3 blocks filled -->
          <rect x="10" y="0" width="10" height="10" fill="#fbbf24"/>
          <rect x="0" y="10" width="10" height="10" fill="#fbbf24"/>
          <rect x="20" y="0" width="10" height="10" fill="#fbbf24"/>
        </g>
        <!-- Frame 4 -->
        <g transform="translate(160, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/>
          <!-- 4 blocks filled -->
          <rect x="10" y="0" width="10" height="10" fill="#fbbf24"/>
          <rect x="0" y="10" width="10" height="10" fill="#fbbf24"/>
          <rect x="20" y="0" width="10" height="10" fill="#fbbf24"/>
          <rect x="10" y="10" width="10" height="10" fill="#fbbf24"/>
        </g>
        <!-- Frame 5 -->
        <g transform="translate(210, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/>
          <line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/>
          <!-- 5 blocks filled -->
          <rect x="10" y="0" width="10" height="10" fill="#fbbf24"/>
          <rect x="0" y="10" width="10" height="10" fill="#fbbf24"/>
          <rect x="20" y="0" width="10" height="10" fill="#fbbf24"/>
          <rect x="10" y="10" width="10" height="10" fill="#fbbf24"/>
          <rect x="30" y="0" width="10" height="10" fill="#fbbf24"/>
        </g>
        <!-- Frame Question (?) -->
        <g transform="translate(260, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <text x="14" y="26" fill="#fbbf24" font-size="20" font-family="sans-serif" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: 6 blocks (incorrect, bottom-left)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/><rect x="10" y="0" width="10" height="10" fill="#fbbf24"/><rect x="0" y="10" width="10" height="10" fill="#fbbf24"/><rect x="20" y="0" width="10" height="10" fill="#fbbf24"/><rect x="10" y="10" width="10" height="10" fill="#fbbf24"/><rect x="30" y="0" width="10" height="10" fill="#fbbf24"/><rect x="0" y="20" width="10" height="10" fill="#fbbf24"/></svg>`,
      // Option B: 6 blocks (Correct, stair pattern column 3, row 2)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/><rect x="10" y="0" width="10" height="10" fill="#fbbf24"/><rect x="0" y="10" width="10" height="10" fill="#fbbf24"/><rect x="20" y="0" width="10" height="10" fill="#fbbf24"/><rect x="10" y="10" width="10" height="10" fill="#fbbf24"/><rect x="30" y="0" width="10" height="10" fill="#fbbf24"/><rect x="20" y="10" width="10" height="10" fill="#fbbf24"/></svg>`,
      // Option C: 6 blocks (incorrect, column 4 row 2)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/><rect x="10" y="0" width="10" height="10" fill="#fbbf24"/><rect x="0" y="10" width="10" height="10" fill="#fbbf24"/><rect x="20" y="0" width="10" height="10" fill="#fbbf24"/><rect x="10" y="10" width="10" height="10" fill="#fbbf24"/><rect x="30" y="0" width="10" height="10" fill="#fbbf24"/><rect x="30" y="10" width="10" height="10" fill="#fbbf24"/></svg>`,
      // Option D: 6 blocks (incorrect, bottom right)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/><rect x="10" y="0" width="10" height="10" fill="#fbbf24"/><rect x="0" y="10" width="10" height="10" fill="#fbbf24"/><rect x="20" y="0" width="10" height="10" fill="#fbbf24"/><rect x="10" y="10" width="10" height="10" fill="#fbbf24"/><rect x="30" y="0" width="10" height="10" fill="#fbbf24"/><rect x="30" y="30" width="10" height="10" fill="#fbbf24"/></svg>`,
      // Option E: 5 blocks (no addition)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/><rect x="10" y="0" width="10" height="10" fill="#fbbf24"/><rect x="0" y="10" width="10" height="10" fill="#fbbf24"/><rect x="20" y="0" width="10" height="10" fill="#fbbf24"/><rect x="10" y="10" width="10" height="10" fill="#fbbf24"/><rect x="30" y="0" width="10" height="10" fill="#fbbf24"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><line x1="10" y1="0" x2="10" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="20" y1="0" x2="20" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="30" y1="0" x2="30" y2="40" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="10" x2="40" y2="10" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="20" x2="40" y2="20" stroke="#555" stroke-dasharray="2,2"/><line x1="0" y1="30" x2="40" y2="30" stroke="#555" stroke-dasharray="2,2"/><rect x="10" y="0" width="10" height="10" fill="#fbbf24"/><rect x="0" y="10" width="10" height="10" fill="#fbbf24"/><rect x="20" y="0" width="10" height="10" fill="#fbbf24"/><rect x="10" y="10" width="10" height="10" fill="#fbbf24"/><rect x="30" y="0" width="10" height="10" fill="#fbbf24"/><rect x="20" y="10" width="10" height="10" fill="#fbbf24"/></svg>`,
    explanation: "Pola akumulasi kotak kuning mengikuti pergerakan tangga horizontal-vertikal. Frame 1: (1,2) -> Frame 2: + (2,1) -> Frame 3: + (1,3) -> Frame 4: + (2,2) -> Frame 5: + (1,4). Maka Frame 6 selanjutnya akan menambah kotak kuning di (2,3) (yaitu kolom 3 baris 2 dari kiri atas)."
  },
  {
    id: 42,
    category: "logic",
    question: "Pilihlah pola diamond (belah ketupat) selanjutnya yang logis untuk mengisi tanda tanya (?):",
    svg: `
      <svg viewBox="0 0 320 100" width="100%" height="100%">
        <!-- Frame 1 -->
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" />
          <!-- 3x3 Diamonds -->
          <polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24" stroke="#111" />
          <polygon points="10,15 15,20 10,25 5,20" fill="none" stroke="#fff" />
          <polygon points="30,15 35,20 30,25 25,20" fill="none" stroke="#fff" />
        </g>
        <!-- Frame 2 -->
        <g transform="translate(60, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" />
          <polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24" stroke="#111" />
          <polygon points="10,15 15,20 10,25 5,20" fill="#fbbf24" stroke="#111" />
          <polygon points="30,15 35,20 30,25 25,20" fill="none" stroke="#fff" />
        </g>
        <!-- Frame 3 -->
        <g transform="translate(110, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" />
          <polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24" stroke="#111" />
          <polygon points="10,15 15,20 10,25 5,20" fill="#fbbf24" stroke="#111" />
          <polygon points="30,15 35,20 30,25 25,20" fill="#fbbf24" stroke="#111" />
        </g>
        <!-- Frame 4 -->
        <g transform="translate(160, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" />
          <polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24" stroke="#111" />
          <polygon points="10,15 15,20 10,25 5,20" fill="#fbbf24" stroke="#111" />
          <polygon points="30,15 35,20 30,25 25,20" fill="#fbbf24" stroke="#111" />
          <polygon points="20,25 25,30 20,35 15,30" fill="#fbbf24" stroke="#111" />
        </g>
        <!-- Frame Question (?) -->
        <g transform="translate(210, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <text x="14" y="26" fill="#fbbf24" font-size="20" font-family="sans-serif" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: 4 diamonds only
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24"/><polygon points="10,15 15,20 10,25 5,20" fill="#fbbf24"/><polygon points="30,15 35,20 30,25 25,20" fill="#fbbf24"/><polygon points="20,25 25,30 20,35 15,30" fill="#fbbf24"/></svg>`,
      // Option B: 5 diamonds (Correct - bottom-left added)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24"/><polygon points="10,15 15,20 10,25 5,20" fill="#fbbf24"/><polygon points="30,15 35,20 30,25 25,20" fill="#fbbf24"/><polygon points="20,25 25,30 20,35 15,30" fill="#fbbf24"/><polygon points="10,25 15,30 10,35 5,30" fill="#fbbf24"/></svg>`,
      // Option C: 5 diamonds (incorrect - top-center added)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24"/><polygon points="10,15 15,20 10,25 5,20" fill="#fbbf24"/><polygon points="30,15 35,20 30,25 25,20" fill="#fbbf24"/><polygon points="20,25 25,30 20,35 15,30" fill="#fbbf24"/><polygon points="20,0 25,5 20,10 15,5" fill="#fbbf24"/></svg>`,
      // Option D: 6 diamonds
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24"/><polygon points="10,15 15,20 10,25 5,20" fill="#fbbf24"/><polygon points="30,15 35,20 30,25 25,20" fill="#fbbf24"/><polygon points="20,25 25,30 20,35 15,30" fill="#fbbf24"/><polygon points="10,25 15,30 10,35 5,30" fill="#fbbf24"/><polygon points="30,25 35,30 30,35 25,30" fill="#fbbf24"/></svg>`,
      // Option E: 3 diamonds
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24"/><polygon points="10,15 15,20 10,25 5,20" fill="#fbbf24"/><polygon points="30,15 35,20 30,25 25,20" fill="#fbbf24"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="20,5 25,10 20,15 15,10" fill="#fbbf24"/><polygon points="10,15 15,20 10,25 5,20" fill="#fbbf24"/><polygon points="30,15 35,20 30,25 25,20" fill="#fbbf24"/><polygon points="20,25 25,30 20,35 15,30" fill="#fbbf24"/><polygon points="10,25 15,30 10,35 5,30" fill="#fbbf24"/></svg>`,
    explanation: "Titik kuning pada pola belah ketupat ini bertambah ke arah baris bawah secara bergantian. Setelah mengisi tengah-atas (Frame 1) -> kiri-tengah (Frame 2) -> kanan-tengah (Frame 3) -> tengah-bawah (Frame 4), maka selanjutnya adalah sisi pojok kiri bawah (Frame 5) untuk menjaga urutan simetris melingkar."
  },
  {
    id: 43,
    category: "logic",
    question: "Perhatikan jarum berputar berikut. Jika putaran dilanjutkan ke bingkai berikutnya, ke arah manakah jarum akan menunjuk?",
    svg: `
      <svg viewBox="0 0 320 100" width="100%" height="100%">
        <!-- Frame 1: 135 deg (up-left) -->
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/>
          <circle cx="20" cy="20" r="15" fill="none" stroke="#555"/>
          <polygon points="20,5 25,20 15,20" fill="#fff" transform="rotate(-45, 20, 20)"/>
          <polygon points="20,35 25,20 15,20" fill="#fbbf24" transform="rotate(-45, 20, 20)"/>
        </g>
        <!-- Frame 2: 180 deg (horizontal) -->
        <g transform="translate(60, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/>
          <circle cx="20" cy="20" r="15" fill="none" stroke="#555"/>
          <polygon points="20,5 25,20 15,20" fill="#fff" transform="rotate(-90, 20, 20)"/>
          <polygon points="20,35 25,20 15,20" fill="#fbbf24" transform="rotate(-90, 20, 20)"/>
        </g>
        <!-- Frame 3: 225 deg (down-left) -->
        <g transform="translate(110, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/>
          <circle cx="20" cy="20" r="15" fill="none" stroke="#555"/>
          <polygon points="20,5 25,20 15,20" fill="#fff" transform="rotate(-135, 20, 20)"/>
          <polygon points="20,35 25,20 15,20" fill="#fbbf24" transform="rotate(-135, 20, 20)"/>
        </g>
        <!-- Frame 4: 270 deg (vertical) -->
        <g transform="translate(160, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/>
          <circle cx="20" cy="20" r="15" fill="none" stroke="#555"/>
          <polygon points="20,5 25,20 15,20" fill="#fff" transform="rotate(-180, 20, 20)"/>
          <polygon points="20,35 25,20 15,20" fill="#fbbf24" transform="rotate(-180, 20, 20)"/>
        </g>
        <!-- Frame 5: 315 deg (up-right) -->
        <g transform="translate(210, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/>
          <circle cx="20" cy="20" r="15" fill="none" stroke="#555"/>
          <polygon points="20,5 25,20 15,20" fill="#fff" transform="rotate(-225, 20, 20)"/>
          <polygon points="20,35 25,20 15,20" fill="#fbbf24" transform="rotate(-225, 20, 20)"/>
        </g>
        <!-- Frame Question (?) -->
        <g transform="translate(260, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <text x="14" y="26" fill="#fbbf24" font-size="20" font-family="sans-serif" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Horizontal, side-white right
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><circle cx="20" cy="20" r="12" fill="none" stroke="#555"/><polygon points="20,8 24,20 16,20" fill="#fbbf24" transform="rotate(-270, 20, 20)"/><polygon points="20,32 24,20 16,20" fill="#fff" transform="rotate(-270, 20, 20)"/></svg>`,
      // Option B: Horizontal, side-white left (Correct)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><circle cx="20" cy="20" r="12" fill="none" stroke="#555"/><polygon points="20,8 24,20 16,20" fill="#fff" transform="rotate(-270, 20, 20)"/><polygon points="20,32 24,20 16,20" fill="#fbbf24" transform="rotate(-270, 20, 20)"/></svg>`,
      // Option C: Vertical, side-white top
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><circle cx="20" cy="20" r="12" fill="none" stroke="#555"/><polygon points="20,8 24,20 16,20" fill="#fff"/><polygon points="20,32 24,20 16,20" fill="#fbbf24"/></svg>`,
      // Option D: Diagonal up-right
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><circle cx="20" cy="20" r="12" fill="none" stroke="#555"/><polygon points="20,8 24,20 16,20" fill="#fff" transform="rotate(-225, 20, 20)"/><polygon points="20,32 24,20 16,20" fill="#fbbf24" transform="rotate(-225, 20, 20)"/></svg>`,
      // Option E: Diagonal down-right
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><circle cx="20" cy="20" r="12" fill="none" stroke="#555"/><polygon points="20,8 24,20 16,20" fill="#fff" transform="rotate(-315, 20, 20)"/><polygon points="20,32 24,20 16,20" fill="#fbbf24" transform="rotate(-315, 20, 20)"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><circle cx="20" cy="20" r="12" fill="none" stroke="#555"/><polygon points="20,8 24,20 16,20" fill="#fff" transform="rotate(-270, 20, 20)"/><polygon points="20,32 24,20 16,20" fill="#fbbf24" transform="rotate(-270, 20, 20)"/></svg>`,
    explanation: "Jarum kompas berputar 45 derajat berlawanan arah jarum jam (CCW) di setiap langkahnya. Posisi terakhir pada bingkai 5 adalah diagonal kanan atas (315°). Putaran berikutnya (315° + 45° = 360°/0°) akan menempatkan jarum secara mendatar (horizontal) dengan ujung putih menghadap ke kiri (arah barat)."
  },
  {
    id: 44,
    category: "logic",
    question: "Tentukan bentuk geometri pilihan yang paling tepat untuk mengisi sel kosong tanda tanya (?) pada matriks 3x3 berikut:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <!-- Grid Outline -->
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell (1,1) Hexagon -->
        <g transform="translate(10,10)">
          <polygon points="30,15 45,25 45,45 30,55 15,45 15,25" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (1,2) Square -->
        <g transform="translate(70,10)">
          <rect x="15" y="15" width="30" height="30" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (1,3) Triangle -->
        <g transform="translate(130,10)">
          <polygon points="30,15 45,45 15,45" fill="#fbbf24" stroke="#111"/>
        </g>

        <!-- Cell (2,1) Square -->
        <g transform="translate(10,70)">
          <rect x="15" y="15" width="30" height="30" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (2,2) Triangle -->
        <g transform="translate(70,70)">
          <polygon points="30,15 45,45 15,45" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (2,3) Hexagon -->
        <g transform="translate(130,70)">
          <polygon points="30,15 45,25 45,45 30,55 15,45 15,25" fill="#fbbf24" stroke="#111"/>
        </g>

        <!-- Cell (3,1) Triangle -->
        <g transform="translate(10,130)">
          <polygon points="30,15 45,45 15,45" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (3,2) Hexagon -->
        <g transform="translate(70,130)">
          <polygon points="30,15 45,25 45,45 30,55 15,45 15,25" fill="#fbbf24" stroke="#111"/>
        </g>
        <!-- Cell (3,3) ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Hexagon
      `<svg viewBox="0 0 40 40"><polygon points="20,8 32,15 32,30 20,37 8,30 8,15" fill="#fbbf24" stroke="#111"/></svg>`,
      // Option B: Triangle
      `<svg viewBox="0 0 40 40"><polygon points="20,10 32,30 8,30" fill="#fbbf24" stroke="#111"/></svg>`,
      // Option C: Square (Correct)
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="#fbbf24" stroke="#111"/></svg>`,
      // Option D: Circle
      `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="10" fill="#fbbf24" stroke="#111"/></svg>`,
      // Option E: Star
      `<svg viewBox="0 0 40 40"><polygon points="20,5 24,15 34,15 26,22 29,32 20,26 11,32 14,22 6,15 16,15" fill="#fbbf24" stroke="#111"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="#fbbf24" stroke="#111"/></svg>`,
    explanation: "Aturan baris/kolom matriks: Setiap baris dan kolom harus memiliki tepat satu dari tiga bentuk dasar (Segi enam, Persegi, dan Segitiga). Baris 3 berisi Segitiga dan Segi enam, sehingga sel kosong harus diisi oleh Persegi (Square)."
  },
  {
    id: 45,
    category: "logic",
    question: "Tentukan kelompok garis mana yang sesuai untuk melengkapi sel kosong pada matriks 3x3 berikut:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <!-- Grid Outline -->
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: 3 Diagonal Lines -->
        <g transform="translate(10,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="45" x2="45" y2="15"/>
          <line x1="20" y1="50" x2="50" y2="20"/>
          <line x1="25" y1="55" x2="55" y2="25"/>
        </g>
        <!-- Cell 1,2: 3 Vertical Lines -->
        <g transform="translate(70,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="25" y1="15" x2="25" y2="55"/>
          <line x1="30" y1="15" x2="30" y2="55"/>
          <line x1="35" y1="15" x2="35" y2="55"/>
        </g>
        <!-- Cell 1,3: 3 Horizontal Lines -->
        <g transform="translate(130,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="25" x2="55" y2="25"/>
          <line x1="15" y1="30" x2="55" y2="30"/>
          <line x1="15" y1="35" x2="55" y2="35"/>
        </g>

        <!-- Cell 2,1: 3 Vertical Lines -->
        <g transform="translate(10,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="25" y1="15" x2="25" y2="55"/>
          <line x1="30" y1="15" x2="30" y2="55"/>
          <line x1="35" y1="15" x2="35" y2="55"/>
        </g>
        <!-- Cell 2,2: 3 Horizontal Lines -->
        <g transform="translate(70,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="25" x2="55" y2="25"/>
          <line x1="15" y1="30" x2="55" y2="30"/>
          <line x1="15" y1="35" x2="55" y2="35"/>
        </g>
        <!-- Cell 2,3: 3 Diagonal Lines -->
        <g transform="translate(130,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="45" x2="45" y2="15"/>
          <line x1="20" y1="50" x2="50" y2="20"/>
          <line x1="25" y1="55" x2="55" y2="25"/>
        </g>

        <!-- Cell 3,1: 3 Horizontal Lines -->
        <g transform="translate(10,130)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="25" x2="55" y2="25"/>
          <line x1="15" y1="30" x2="55" y2="30"/>
          <line x1="15" y1="35" x2="55" y2="35"/>
        </g>
        <!-- Cell 3,2: 3 Diagonal Lines -->
        <g transform="translate(70,130)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="45" x2="45" y2="15"/>
          <line x1="20" y1="50" x2="50" y2="20"/>
          <line x1="25" y1="55" x2="55" y2="25"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Diagonal
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="10" y1="30" x2="30" y2="10"/><line x1="15" y1="35" x2="35" y2="15"/><line x1="5" y1="25" x2="25" y2="5"/></svg>`,
      // Option B: Hashtag
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="15" y1="5" x2="15" y2="35"/><line x1="25" y1="5" x2="25" y2="35"/><line x1="5" y1="15" x2="35" y2="15"/><line x1="5" y1="25" x2="35" y2="25"/></svg>`,
      // Option C: 3 Vertical (Correct)
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="15" y1="5" x2="15" y2="35"/><line x1="20" y1="5" x2="20" y2="35"/><line x1="25" y1="5" x2="25" y2="35"/></svg>`,
      // Option D: 2 Vertical
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="15" y1="5" x2="15" y2="35"/><line x1="25" y1="5" x2="25" y2="35"/></svg>`,
      // Option E: 3 Horizontal
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="5" y1="15" x2="35" y2="15"/><line x1="5" y1="20" x2="35" y2="20"/><line x1="5" y1="25" x2="35" y2="25"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="15" y1="5" x2="15" y2="35"/><line x1="20" y1="5" x2="20" y2="35"/><line x1="25" y1="5" x2="25" y2="35"/></svg>`,
    explanation: "Aturan kombinasi baris: Setiap baris/kolom berisi satu set garis Horizontal, satu set Vertikal, dan satu set Diagonal. Baris ketiga mengandung Horizontal dan Diagonal, sehingga sel kosong harus diisi oleh garis Vertikal (Pilihan C)."
  },
  {
    id: 46,
    category: "logic",
    question: "Tentukan bentuk geometri dan simbol yang paling tepat untuk melengkapi sel kosong pada matriks 3x3 di bawah ini:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <!-- Grid Outline -->
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Triangle (None) -->
        <g transform="translate(10,10)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fff" stroke-width="1.5"/>
        </g>
        <!-- Cell 1,2: Square (None) -->
        <g transform="translate(70,10)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff" stroke-width="1.5"/>
        </g>
        <!-- Cell 1,3: House + Dot -->
        <g transform="translate(130,10)">
          <polygon points="30,15 45,30 45,50 15,50 15,30" fill="none" stroke="#fff" stroke-width="1.5"/>
          <circle cx="30" cy="38" r="2" fill="#fbbf24"/>
        </g>

        <!-- Cell 2,1: Square + Dot -->
        <g transform="translate(10,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff" stroke-width="1.5"/>
          <circle cx="30" cy="30" r="2" fill="#fbbf24"/>
        </g>
        <!-- Cell 2,2: House (None) -->
        <g transform="translate(70,70)">
          <polygon points="30,15 45,30 45,50 15,50 15,30" fill="none" stroke="#fff" stroke-width="1.5"/>
        </g>
        <!-- Cell 2,3: Triangle + Cross -->
        <g transform="translate(130,70)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fff" stroke-width="1.5"/>
          <!-- Small cross at top -->
          <line x1="30" y1="8" x2="30" y2="15" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="27" y1="11" x2="33" y2="11" stroke="#fbbf24" stroke-width="1.5"/>
        </g>

        <!-- Cell 3,1: House + Cross -->
        <g transform="translate(10,130)">
          <polygon points="30,15 45,30 45,50 15,50 15,30" fill="none" stroke="#fff" stroke-width="1.5"/>
          <line x1="30" y1="8" x2="30" y2="15" stroke="#fbbf24" stroke-width="1.5"/>
          <line x1="27" y1="11" x2="33" y2="11" stroke="#fbbf24" stroke-width="1.5"/>
        </g>
        <!-- Cell 3,2: Triangle + Dot -->
        <g transform="translate(70,130)">
          <polygon points="30,15 45,45 15,45" fill="none" stroke="#fff" stroke-width="1.5"/>
          <circle cx="30" cy="35" r="2" fill="#fbbf24"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Triangle + Dot
      `<svg viewBox="0 0 40 40"><polygon points="20,12 32,32 8,32" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="20" cy="24" r="2" fill="#fbbf24"/></svg>`,
      // Option B: Square + Cross (Correct)
      `<svg viewBox="0 0 40 40"><rect x="10" y="12" width="20" height="20" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="20" y1="5" x2="20" y2="12" stroke="#fbbf24" stroke-width="1.5"/><line x1="17" y1="8" x2="23" y2="8" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option C: House + Cross + Dot
      `<svg viewBox="0 0 40 40"><polygon points="20,12 32,22 32,37 8,37 8,22" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="20" cy="28" r="2" fill="#fbbf24"/><line x1="20" y1="5" x2="20" y2="12" stroke="#fbbf24" stroke-width="1.5"/><line x1="17" y1="8" x2="23" y2="8" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option D: Triangle + Cross
      `<svg viewBox="0 0 40 40"><polygon points="20,12 32,32 8,32" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="20" y1="5" x2="20" y2="12" stroke="#fbbf24" stroke-width="1.5"/><line x1="17" y1="8" x2="23" y2="8" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
      // Option E: Square (None)
      `<svg viewBox="0 0 40 40"><rect x="10" y="12" width="20" height="20" fill="none" stroke="#fff" stroke-width="1.5"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="10" y="12" width="20" height="20" fill="none" stroke="#fff" stroke-width="1.5"/><line x1="20" y1="5" x2="20" y2="12" stroke="#fbbf24" stroke-width="1.5"/><line x1="17" y1="8" x2="23" y2="8" stroke="#fbbf24" stroke-width="1.5"/></svg>`,
    explanation: "Baris ketiga memerlukan bentuk dasar Persegi untuk melengkapi sebaran geometri (Segitiga dan Rumah sudah ada). Untuk lambang atas, baris ketiga sudah memiliki Palang (di Rumah) dan Titik (di Segitiga), sehingga Persegi wajib memiliki Palang (+) di atasnya (Pilihan B)."
  },
  {
    id: 47,
    category: "logic",
    question: "Perhatikan matriks arsiran 3x3 di bawah ini. Bagian arsiran manakah yang paling tepat untuk mengisi sel bertanda tanya (?):",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <!-- Grid Outline -->
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Top-Right half shaded -->
        <g transform="translate(10,10)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <polygon points="15,15 45,15 45,45" fill="#fbbf24" opacity="0.8"/>
        </g>
        <!-- Cell 1,2: Diagonal Full Shaded -->
        <g transform="translate(70,10)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <polygon points="15,15 45,15 45,45 15,45" fill="#fbbf24" opacity="0.3"/>
          <polygon points="30,15 45,15 45,30 15,45 15,30" fill="#fbbf24" opacity="0.8"/>
        </g>
        <!-- Cell 1,3: Bottom-Left half shaded -->
        <g transform="translate(130,10)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <polygon points="15,15 15,45 45,45" fill="#fbbf24" opacity="0.8"/>
        </g>

        <!-- Cell 2,1: Bottom Half shaded -->
        <g transform="translate(10,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="15" y="30" width="30" height="15" fill="#fbbf24" opacity="0.8"/>
        </g>
        <!-- Cell 2,2: Left-Right halves shaded -->
        <g transform="translate(70,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="15" y="15" width="15" height="30" fill="#fbbf24" opacity="0.8"/>
        </g>
        <!-- Cell 2,3: Top Half shaded -->
        <g transform="translate(130,70)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="15" y="15" width="30" height="15" fill="#fbbf24" opacity="0.8"/>
        </g>

        <!-- Cell 3,1: Full Shaded -->
        <g transform="translate(10,130)">
          <rect x="15" y="15" width="30" height="30" fill="#fbbf24" opacity="0.8"/>
        </g>
        <!-- Cell 3,2: Vertical Half Shaded -->
        <g transform="translate(70,130)">
          <rect x="15" y="15" width="30" height="30" fill="none" stroke="#fff"/>
          <rect x="30" y="15" width="15" height="30" fill="#fbbf24" opacity="0.8"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Bottom-Right Shaded
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/><polygon points="20,20 30,20 30,30" fill="#fbbf24"/></svg>`,
      // Option B: Blank/Empty (Correct)
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/></svg>`,
      // Option C: Full Shaded
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="#fbbf24" stroke="#fff"/></svg>`,
      // Option D: Top Shaded
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/><rect x="10" y="10" width="20" height="10" fill="#fbbf24"/></svg>`,
      // Option E: Diagonal bottom-left
      `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/><polygon points="10,10 10,30 30,30" fill="#fbbf24"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" fill="none" stroke="#fff"/></svg>`,
    explanation: "Aturan baris logika: Bentuk arsiran pada sel ketiga adalah hasil peniadaan arsiran yang tumpang tindih (XOR). Pada baris ketiga: Sel pertama diarsir penuh, dan sel kedua diarsir setengah kanan. Jika sel pertama dikurangi arsiran sel kedua yang tersisa di bagian kiri, maka sel ketiga menghasilkan kotak kosong (Pilihan B)."
  },
  {
    id: 48,
    category: "logic",
    question: "Perhatikan pergeseran titik blok hitam di sepanjang garis kisi mendatar berikut. Di manakah posisi titik hitam yang tepat pada bingkai ketiga (?):",
    svg: `
      <svg viewBox="0 0 320 100" width="100%" height="100%">
        <!-- Frame 1 -->
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="60" height="40" fill="none" stroke="#fff"/>
          <line x1="0" y1="20" x2="60" y2="20" stroke="#555"/>
          <!-- Point at left (x=10) -->
          <rect x="8" y="16" width="8" height="8" fill="#fbbf24"/>
        </g>
        <!-- Frame 2 -->
        <g transform="translate(90, 10)">
          <rect x="0" y="0" width="60" height="40" fill="none" stroke="#fff"/>
          <line x1="0" y1="20" x2="60" y2="20" stroke="#555"/>
          <!-- Point at center (x=30) -->
          <rect x="26" y="16" width="8" height="8" fill="#fbbf24"/>
        </g>
        <!-- Frame 3 (Question) -->
        <g transform="translate(170, 10)">
          <rect x="0" y="0" width="60" height="40" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <text x="24" y="26" fill="#fbbf24" font-size="20" font-family="sans-serif" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Point at left
      `<svg viewBox="0 0 40 40" stroke="#fff" fill="none"><rect x="5" y="10" width="30" height="20"/><line x1="5" y1="20" x2="35" y2="20" stroke="#555"/><rect x="10" y="18" width="4" height="4" fill="#fbbf24"/></svg>`,
      // Option B: Point at center
      `<svg viewBox="0 0 40 40" stroke="#fff" fill="none"><rect x="5" y="10" width="30" height="20"/><line x1="5" y1="20" x2="35" y2="20" stroke="#555"/><rect x="18" y="18" width="4" height="4" fill="#fbbf24"/></svg>`,
      // Option C: Point at right (Correct)
      `<svg viewBox="0 0 40 40" stroke="#fff" fill="none"><rect x="5" y="10" width="30" height="20"/><line x1="5" y1="20" x2="35" y2="20" stroke="#555"/><rect x="26" y="18" width="4" height="4" fill="#fbbf24"/></svg>`,
      // Option D: Empty line
      `<svg viewBox="0 0 40 40" stroke="#fff" fill="none"><rect x="5" y="10" width="30" height="20"/><line x1="5" y1="20" x2="35" y2="20" stroke="#555"/></svg>`,
      // Option E: Two points
      `<svg viewBox="0 0 40 40" stroke="#fff" fill="none"><rect x="5" y="10" width="30" height="20"/><line x1="5" y1="20" x2="35" y2="20" stroke="#555"/><rect x="10" y="18" width="4" height="4" fill="#fbbf24"/><rect x="26" y="18" width="4" height="4" fill="#fbbf24"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40" stroke="#fff" fill="none"><rect x="5" y="10" width="30" height="20"/><line x1="5" y1="20" x2="35" y2="20" stroke="#555"/><rect x="26" y="18" width="4" height="4" fill="#fbbf24"/></svg>`,
    explanation: "Titik kuning bergerak secara konstan dari kiri ke kanan (Frame 1 di kiri -> Frame 2 di tengah -> Frame 3 di kanan). Maka jawaban yang tepat adalah titik berada di ujung kanan garis (Pilihan C)."
  },
  {
    id: 49,
    category: "logic",
    question: "Perhatikan rotasi bentuk L di bawah. Jika diputar 90 derajat searah jarum jam (CW) di setiap langkahnya, bagaimanakah posisi L pada bingkai selanjutnya?",
    svg: `
      <svg viewBox="0 0 320 100" width="100%" height="100%">
        <!-- Frame 1: L upright -->
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/>
          <polygon points="10,10 10,30 25,30 25,25 15,25 15,10" fill="#fbbf24" />
        </g>
        <!-- Frame 2: L rotated 90 CW -->
        <g transform="translate(60, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/>
          <polygon points="10,10 10,30 25,30 25,25 15,25 15,10" fill="#fbbf24" transform="rotate(90, 20, 20)"/>
        </g>
        <!-- Frame 3: L rotated 180 CW -->
        <g transform="translate(110, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/>
          <polygon points="10,10 10,30 25,30 25,25 15,25 15,10" fill="#fbbf24" transform="rotate(180, 20, 20)"/>
        </g>
        <!-- Frame Question (?) -->
        <g transform="translate(160, 10)">
          <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fbbf24" stroke-width="2"/>
          <text x="14" y="26" fill="#fbbf24" font-size="20" font-family="sans-serif" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: L upright
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="10,10 10,30 25,30 25,25 15,25 15,10" fill="#fbbf24"/></svg>`,
      // Option B: L rotated 90 CW
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="10,10 10,30 25,30 25,25 15,25 15,10" fill="#fbbf24" transform="rotate(90, 20, 20)"/></svg>`,
      // Option C: L rotated 270 CW (Correct)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="10,10 10,30 25,30 25,25 15,25 15,10" fill="#fbbf24" transform="rotate(270, 20, 20)"/></svg>`,
      // Option D: L inverted (180 CW)
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="10,10 10,30 25,30 25,25 15,25 15,10" fill="#fbbf24" transform="rotate(180, 20, 20)"/></svg>`,
      // Option E: L pointing down-left
      `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="10,15 10,30 20,30 20,25 15,25 15,15" fill="#fbbf24" transform="rotate(45, 20, 20)"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40"><rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff"/><polygon points="10,10 10,30 25,30 25,25 15,25 15,10" fill="#fbbf24" transform="rotate(270, 20, 20)"/></svg>`,
    explanation: "Bentuk L berotasi 90 derajat searah jarum jam (CW) di setiap bingkai. Frame 1 (0° CW) -> Frame 2 (90° CW) -> Frame 3 (180° CW) -> Frame 4 berikutnya haruslah berotasi 270 derajat CW (Pilihan C)."
  },
  {
    id: 50,
    category: "logic",
    question: "Tentukan gambar yang sesuai untuk melengkapi sel kosong pada logika matriks penjumlahan berikut:",
    svg: `
      <svg viewBox="0 0 220 220" width="100%" height="100%">
        <!-- Grid Outline -->
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#fff" stroke-width="2"/>
        <line x1="70" y1="10" x2="70" y2="190" stroke="#555"/>
        <line x1="130" y1="10" x2="130" y2="190" stroke="#555"/>
        <line x1="10" y1="70" x2="190" y2="70" stroke="#555"/>
        <line x1="10" y1="130" x2="190" y2="130" stroke="#555"/>

        <!-- Cell 1,1: Vertical Line -->
        <g transform="translate(10,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="15" x2="30" y2="45"/>
        </g>
        <!-- Cell 1,2: Horizontal Line -->
        <g transform="translate(70,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="30" x2="45" y2="30"/>
        </g>
        <!-- Cell 1,3: Cross (+) -->
        <g transform="translate(130,10)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="15" x2="30" y2="45"/>
          <line x1="15" y1="30" x2="45" y2="30"/>
        </g>

        <!-- Cell 2,1: Diagonal Left-Down -->
        <g transform="translate(10,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="15" x2="45" y2="45"/>
        </g>
        <!-- Cell 2,2: Diagonal Right-Down -->
        <g transform="translate(70,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="45" y1="15" x2="15" y2="45"/>
        </g>
        <!-- Cell 2,3: Diagonal Cross (X) -->
        <g transform="translate(130,70)" stroke="#fbbf24" stroke-width="2">
          <line x1="15" y1="15" x2="45" y2="45"/>
          <line x1="45" y1="15" x2="15" y2="45"/>
        </g>

        <!-- Cell 3,1: Circle -->
        <g transform="translate(10,130)" stroke="#fbbf24" stroke-width="2" fill="none">
          <circle cx="30" cy="30" r="15"/>
        </g>
        <!-- Cell 3,2: Cross (+) -->
        <g transform="translate(70,130)" stroke="#fbbf24" stroke-width="2">
          <line x1="30" y1="15" x2="30" y2="45"/>
          <line x1="15" y1="30" x2="45" y2="30"/>
        </g>
        <!-- Cell 3,3: ? -->
        <g transform="translate(130,130)">
          <text x="22" y="40" fill="#fbbf24" font-size="24" font-weight="bold">?</text>
        </g>
      </svg>
    `,
    options: [
      // Option A: Circle only
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2" fill="none"><circle cx="20" cy="20" r="12"/></svg>`,
      // Option B: Cross only
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2"><line x1="20" y1="8" x2="20" y2="32"/><line x1="8" y1="20" x2="32" y2="20"/></svg>`,
      // Option C: Circle with Cross (Correct)
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2" fill="none"><circle cx="20" cy="20" r="12"/><line x1="20" y1="8" x2="20" y2="32"/><line x1="8" y1="20" x2="32" y2="20"/></svg>`,
      // Option D: Square
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2" fill="none"><rect x="8" y="8" width="24" height="24"/></svg>`,
      // Option E: Double circles
      `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2" fill="none"><circle cx="20" cy="20" r="12"/><circle cx="20" cy="20" r="8"/></svg>`
    ],
    answer: `<svg viewBox="0 0 40 40" stroke="#fbbf24" stroke-width="2" fill="none"><circle cx="20" cy="20" r="12"/><line x1="20" y1="8" x2="20" y2="32"/><line x1="8" y1="20" x2="32" y2="20"/></svg>`,
    explanation: "Aturan penggabungan gambar: Sel ketiga adalah hasil gabungan superimpose antara sel pertama dan sel kedua. Pada baris ketiga: Sel pertama adalah Lingkaran, sel kedua adalah Tanda Tambah (+), sehingga sel ketiga adalah Lingkaran dengan Tanda Tambah di tengahnya (Pilihan C)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionBank };
}
