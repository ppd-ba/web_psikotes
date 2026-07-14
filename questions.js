// BANK SOAL PSIKOTES ONLINE - PPD BA
// Kategori: Calon Group Leader PT Putra Perkasa Abadi (PPA)
// 30 Soal Terdiri Dari:
// - Soal 1-8: Deret Angka (Logic Number)
// - Soal 9-20: Aritmatika & Logika Soal Cerita (Math & Logic)
// - Soal 21-30: Logika Spasial / Bangun Ruang (Spatial Reasoning - SVG Based)

const questionBank = [
  // ==========================================
  // BAGIAN A: DERET ANGKA (1 - 8)
  // ==========================================
  {
    id: 1,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 3, 5, 9, 17, 33, ...",
    options: ["45", "55", "65", "75", "85"],
    answer: "65", // Pola: dikali 2 dikurangi 1 (x2 - 1)
    explanation: "Pola deret: Selisih bertambah dua kali lipat (+2, +4, +8, +16, +32). Jadi, 33 + 32 = 65."
  },
  {
    id: 2,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 2, 3, 5, 8, 13, 21, ...",
    options: ["29", "31", "34", "38", "42"],
    answer: "34", // Pola Fibonacci
    explanation: "Pola Fibonacci: Angka selanjutnya adalah jumlah dari dua angka sebelumnya. Jadi, 13 + 21 = 34."
  },
  {
    id: 3,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 12, 15, 20, 27, 36, ...",
    options: ["43", "45", "47", "49", "51"],
    answer: "47", // Pola: +3, +5, +7, +9, +11
    explanation: "Pola deret: Penambahan angka ganjil secara berurutan (+3, +5, +7, +9). Selanjutnya adalah +11, yaitu 36 + 11 = 47."
  },
  {
    id: 4,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 1, 9, 25, 49, 81, ...",
    options: ["100", "111", "121", "135", "144"],
    answer: "121", // Pola: Kuadrat bilangan ganjil (1^2, 3^2, 5^2, 7^2, 9^2, 11^2)
    explanation: "Pola deret: Angka kuadrat dari bilangan ganjil (1², 3², 5², 7², 9²). Selanjutnya adalah 11² = 121."
  },
  {
    id: 5,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 4, 8, 6, 12, 10, 20, 18, ...",
    options: ["24", "28", "32", "36", "40"],
    answer: "36", // Pola: x2, -2, x2, -2, x2
    explanation: "Pola deret bergantian: dikali 2, lalu dikurangi 2 (4x2=8, 8-2=6, 6x2=12, 12-2=10, 10x2=20, 20-2=18). Selanjutnya dikali 2: 18x2 = 36."
  },
  {
    id: 6,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 2, 5, 4, 10, 8, 20, 16, ...",
    options: ["24", "30", "32", "36", "40"],
    answer: "40", // Pola lompat satu: deret 1 (2, 4, 8, 16 -> x2); deret 2 (5, 10, 20, 40 -> x2)
    explanation: "Pola lompat 1 deret. Deret ganjil: 2, 4, 8, 16 (selalu dikali 2). Deret genap: 5, 10, 20 (selalu dikali 2). Selanjutnya adalah giliran deret genap: 20x2 = 40."
  },
  {
    id: 7,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 100, 95, 85, 70, 50, ...",
    options: ["15", "20", "25", "30", "35"],
    answer: "25", // Pola: -5, -10, -15, -20, -25
    explanation: "Pola deret: Pengurangan dengan kelipatan 5 yang bertambah (-5, -10, -15, -20). Selanjutnya adalah -25, yaitu 50 - 25 = 25."
  },
  {
    id: 8,
    category: "logic",
    question: "Tentukan angka selanjutnya dari deret berikut: 1, 2, 6, 24, 120, ...",
    options: ["240", "360", "480", "600", "720"],
    answer: "720", // Pola faktorial: x2, x3, x4, x5, x6
    explanation: "Pola deret: Perkalian dengan urutan bilangan asli (1x2=2, 2x3=6, 6x4=24, 24x5=120). Selanjutnya dikali 6: 120x6 = 720."
  },

  // ==========================================
  // BAGIAN B: ARITMATIKA & LOGIKA SOAL CERITA (9 - 20)
  // ==========================================
  {
    id: 9,
    category: "math",
    question: "Sebuah dump truck mengangkut overburden dari front tambang ke disposal area dengan jarak 6 km. Kecepatan rata-rata truck saat bermuatan adalah 30 km/jam, dan saat kembali kosong adalah 45 km/jam. Berapa total waktu perjalanan pulang-pergi (dalam menit)? (Abaikan waktu tunggu loading/dumping)",
    options: ["15 menit", "18 menit", "20 menit", "22 menit", "25 menit"],
    answer: "20 menit",
    explanation: "Waktu pergi = 6 km / 30 km/jam = 0.2 jam = 12 menit. Waktu kembali = 6 km / 45 km/jam = 0.133 jam = 8 menit. Total waktu = 12 + 8 = 20 menit."
  },
  {
    id: 10,
    category: "math",
    question: "Mekanik A dapat melakukan bongkar pasang (rebuild) alternator alat berat dalam waktu 6 jam. Mekanik B dapat melakukan pekerjaan yang sama dalam waktu 3 jam. Jika Mekanik A dan B ditugaskan menyelesaikan pekerjaan tersebut bersama-sama, berapa lama waktu yang dibutuhkan?",
    options: ["1.5 jam", "2.0 jam", "2.5 jam", "3.0 jam", "4.0 jam"],
    answer: "2.0 jam",
    explanation: "Rumus waktu gabungan: t = (ta * tb) / (ta + tb) = (6 * 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    id: 11,
    category: "math",
    question: "Tangki bahan bakar sebuah Excavator PC3000 berisi penuh 400 liter. Setelah digunakan bekerja selama 8 jam, solar yang tersisa adalah 120 liter. Berapa persentase rata-rata konsumsi solar per jam dari kapasitas total tangki?",
    options: ["7.50%", "8.25%", "8.75%", "9.00%", "9.50%"],
    answer: "8.75%",
    explanation: "Konsumsi total solar = 400 - 120 = 280 liter. Konsumsi per jam = 280 / 8 = 35 liter/jam. Persentase per jam = (35 / 400) * 100% = 8.75% per jam."
  },
  {
    id: 12,
    category: "math",
    question: "Di site PPA, kru Shift A bekerja dengan pola: 4 hari masuk kerja, lalu 2 hari libur secara berputar. Jika hari pertama siklus dimulai pada hari Senin (hari ke-1), maka pada hari ke-15 (terhitung sejak hari pertama), status kerja Shift A adalah...",
    options: ["Masuk Shift Pagi", "Masuk Shift Malam", "Libur Hari Pertama", "Libur Hari Kedua", "Masuk Shift Siang"],
    answer: "Masuk Shift Pagi",
    explanation: "Satu siklus penuh = 4 hari kerja + 2 hari libur = 6 hari. Hari ke-15: 15 dibagi 6 sisa 3. Urutan hari ke-3 di dalam siklus adalah 'Hari Kerja'. Jadi, kru tersebut masuk kerja."
  },
  {
    id: 13,
    category: "math",
    question: "Kapasitas muatan bucket Excavator PC1250 adalah 7 ton sekali swing. Kapasitas vessel Dump Truck Komatsu HD785 adalah 35 ton. Berapa kali swing bucket excavator yang dibutuhkan untuk memuat penuh 4 unit Dump Truck HD785?",
    options: ["15 kali", "18 kali", "20 kali", "22 kali", "25 kali"],
    answer: "20 kali",
    explanation: "Total kapasitas 4 truck = 4 * 35 ton = 140 ton. Jumlah swing bucket = 140 ton / 7 ton = 20 kali."
  },
  {
    id: 14,
    category: "math",
    question: "Logika Urutan Performa: Operator A memindahkan material lebih banyak daripada Operator B. Operator C memindahkan material lebih sedikit daripada Operator D, tetapi lebih banyak daripada Operator A. Siapakah operator dengan performa pemindahan material paling rendah?",
    options: ["Operator A", "Operator B", "Operator C", "Operator D", "Tidak dapat disimpulkan"],
    answer: "Operator B",
    explanation: "Dari syarat 1: A > B. Dari syarat 2: D > C > A. Jika digabungkan: D > C > A > B. Operator dengan performa paling rendah adalah B."
  },
  {
    id: 15,
    category: "math",
    question: "Rata-rata jam training bulanan dari 4 orang mekanik di tim Plant People Development (PPD) adalah 38 jam. Ketika ditambah satu orang mekanik baru, nilai rata-rata jam training tim tersebut naik menjadi 40 jam. Berapa jam training yang telah ditempuh oleh mekanik baru tersebut?",
    options: ["42 jam", "44 jam", "46 jam", "48 jam", "50 jam"],
    answer: "48 jam",
    explanation: "Total jam awal = 4 * 38 = 152 jam. Total jam setelah ditambah mekanik baru = 5 * 40 = 200 jam. Jam training mekanik baru = 200 - 152 = 48 jam."
  },
  {
    id: 16,
    category: "math",
    question: "Helper A mengendarai mobil sarana dari Mess menuju Office Tambang dengan kecepatan 40 km/jam pukul 07.00. Helper B menyusul dari tempat yang sama pukul 07.15 dengan kecepatan 60 km/jam. Pada pukul berapa Helper B dapat menyusul Helper A?",
    options: ["Pukul 07.30", "Pukul 07.45", "Pukul 08.00", "Pukul 08.15", "Pukul 08.30"],
    answer: "Pukul 07.45",
    explanation: "Selisih waktu berangkat = 15 menit = 0.25 jam. Selisih jarak awal = 40 * 0.25 = 10 km. Waktu menyusul = Selisih Jarak / (V2 - V1) = 10 / (60 - 40) = 10 / 20 = 0.5 jam = 30 menit. Helper B menyusul pukul 07.15 + 30 menit = 07.45."
  },
  {
    id: 17,
    category: "math",
    question: "Dari 60 unit alat berat yang dijadwalkan masuk perawatan rutin (Preventive Maintenance - PM) bulan ini, 15% unit terhambat rilis akibat menunggu kedatangan suku cadang (delay part). Berapa unit alat berat yang berhasil diselesaikan perawatannya tepat waktu?",
    options: ["45 unit", "48 unit", "50 unit", "51 unit", "54 unit"],
    answer: "51 unit",
    explanation: "Unit yang delay = 15% * 60 = 9 unit. Unit yang tepat waktu = 60 - 9 = 51 unit."
  },
  {
    id: 18,
    category: "math",
    question: "Logika Deduktif: Semua Group Leader Plant wajib memiliki sertifikat POP (Pengawas Operasional Pertama). Sebagian besar mekanik senior di site PPA menjabat sebagai Group Leader Plant. Manakah kesimpulan yang mutlak benar?",
    options: [
      "Semua mekanik senior wajib memiliki sertifikat POP.",
      "Sebagian mekanik senior wajib memiliki sertifikat POP.",
      "Semua pemilik sertifikat POP adalah mekanik senior.",
      "Mekanik senior yang bukan Group Leader wajib memiliki sertifikat POP.",
      "Tidak ada mekanik senior yang memiliki sertifikat POP."
    ],
    answer: "Sebagian mekanik senior wajib memiliki sertifikat POP.",
    explanation: "Karena sebagian mekanik senior menjabat sebagai Group Leader, dan semua Group Leader wajib memiliki sertifikat POP, maka sebagian mekanik senior tersebut otomatis wajib memiliki sertifikat POP."
  },
  {
    id: 19,
    category: "math",
    question: "Persediaan oli silinder hidrolik di gudang Plant cukup untuk kebutuhan perawatan 12 unit excavator selama 20 hari. Jika excavator yang harus dirawat bertambah menjadi 15 unit, dalam berapa hari persediaan oli tersebut akan habis?",
    options: ["14 hari", "15 hari", "16 hari", "17 hari", "18 hari"],
    answer: "16 hari",
    explanation: "Perbandingan berbalik nilai: (12 unit * 20 hari) = (15 unit * x hari) => 240 = 15x => x = 240 / 15 = 16 hari."
  },
  {
    id: 20,
    category: "math",
    question: "Group Leader A melakukan inspeksi unit breakdown setiap 4 hari sekali. Group Leader B melakukan inspeksi unit breakdown setiap 6 hari sekali. Jika mereka melakukan inspeksi bersamaan pada hari Selasa, pada hari apakah mereka akan melakukan inspeksi bersamaan berikutnya?",
    options: ["Hari Minggu", "Hari Senin", "Hari Selasa", "Hari Rabu", "Hari Kamis"],
    answer: "Hari Minggu",
    explanation: "KPK dari 4 dan 6 adalah 12. Mereka bertemu 12 hari lagi. Selasa + 12 hari: (12 mod 7 = 5 hari setelah Selasa) = hari Minggu."
  },

  // ==========================================
  // BAGIAN C: LOGIKA SPASIAL / BANGUN RUANG (21 - 30)
  // ==========================================
  {
    id: 21,
    category: "spatial",
    question: "Hitunglah jumlah kubus penyusun bangun 3D di bawah ini:",
    // Stack of cubes: Level 1 (bottom) = 3x2 = 6, Level 2 = L-shape of 3, Level 3 = 1. Total = 10
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <!-- Grid isometric background helper -->
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Cubes Level 1 (Bottom) -->
          <!-- x=0, y=0 -->
          <polygon points="120,130 140,120 160,130 140,140" fill="#e6a100" stroke="#111" />
          <polygon points="120,130 140,140 140,160 120,150" fill="#cc8f00" stroke="#111" />
          <polygon points="140,140 160,130 160,150 140,160" fill="#996b00" stroke="#111" />
          
          <!-- x=1, y=0 -->
          <polygon points="140,120 160,110 180,120 160,130" fill="#e6a100" stroke="#111" />
          <polygon points="160,130 180,120 180,140 160,150" fill="#996b00" stroke="#111" />
          
          <!-- x=2, y=0 -->
          <polygon points="160,110 180,100 200,110 180,120" fill="#e6a100" stroke="#111" />
          <polygon points="180,120 200,110 200,130 180,140" fill="#996b00" stroke="#111" />

          <!-- x=0, y=1 -->
          <polygon points="100,120 120,110 140,120 120,130" fill="#e6a100" stroke="#111" />
          <polygon points="100,120 120,130 120,150 100,140" fill="#cc8f00" stroke="#111" />
          
          <!-- x=1, y=1 -->
          <polygon points="120,110 140,100 160,110 140,120" fill="#e6a100" stroke="#111" />
          
          <!-- x=2, y=1 -->
          <polygon points="140,100 160,090 180,100 160,110" fill="#e6a100" stroke="#111" />
          <polygon points="160,110 180,100 180,120 160,130" fill="#996b00" stroke="#111" />

          <!-- Cubes Level 2 (Middle) -->
          <!-- x=0, y=0 -->
          <polygon points="120,100 140,090 160,100 140,110" fill="#ffb700" stroke="#111" />
          <polygon points="120,100 140,110 140,130 120,120" fill="#e6a100" stroke="#111" />
          <polygon points="140,110 160,100 160,120 140,130" fill="#b37d00" stroke="#111" />

          <!-- x=1, y=0 -->
          <polygon points="140,090 160,080 180,090 160,100" fill="#ffb700" stroke="#111" />
          <polygon points="160,100 180,090 180,110 160,120" fill="#b37d00" stroke="#111" />

          <!-- x=0, y=1 -->
          <polygon points="100,090 120,080 140,090 120,100" fill="#ffb700" stroke="#111" />
          <polygon points="100,090 120,100 120,120 100,110" fill="#e6a100" stroke="#111" />

          <!-- Cubes Level 3 (Top) -->
          <!-- x=0, y=0 -->
          <polygon points="120,070 140,060 160,070 140,080" fill="#ffe299" stroke="#111" />
          <polygon points="120,070 140,080 140,100 120,090" fill="#ffb700" stroke="#111" />
          <polygon points="140,080 160,070 160,090 140,100" fill="#cc8f00" stroke="#111" />
        </g>
        <text x="10" y="20" fill="#ffb700" font-size="10" font-family="sans-serif">Tinggi Maksimal: 3 Tingkat</text>
      </svg>
    `,
    options: ["8 kubus", "9 kubus", "10 kubus", "11 kubus", "12 kubus"],
    answer: "10 kubus",
    explanation: "Tingkat bawah (Level 1) = 6 kubus (3x2 baris). Tingkat tengah (Level 2) = 3 kubus (membentuk huruf L). Tingkat atas (Level 3) = 1 kubus di sudut belakang. Total: 6 + 3 + 1 = 10 kubus."
  },
  {
    id: 22,
    category: "spatial",
    question: "Hitunglah jumlah kubus penyusun bangun 3D di bawah ini:",
    // Stack of cubes: Level 1 (bottom) = 9 (3x3), Level 2 = 5 (cross shape), Level 3 = 1 (center). Total = 15
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Level 1 (Bottom 3x3) - Only draw visible parts to keep isometric neat -->
          <!-- We draw from back-left to front-right -->
          
          <!-- Row y=0 (x=2, x=1, x=0) -->
          <polygon points="160,110 180,100 200,110 180,120" fill="#cc960e" stroke="#111" />
          <polygon points="180,120 200,110 200,130 180,140" fill="#805d04" stroke="#111" />
          
          <polygon points="140,120 160,110 180,120 160,130" fill="#cc960e" stroke="#111" />
          
          <!-- Row y=1 -->
          <polygon points="140,130 160,120 180,130 160,140" fill="#cc960e" stroke="#111" />
          <polygon points="160,140 180,130 180,150 160,160" fill="#805d04" stroke="#111" />
          
          <polygon points="120,130 140,120 160,130 140,140" fill="#cc960e" stroke="#111" />
          
          <!-- Row y=2 -->
          <polygon points="120,140 140,130 160,140 140,150" fill="#cc960e" stroke="#111" />
          <polygon points="140,150 160,140 160,160 140,170" fill="#805d04" stroke="#111" />
          
          <polygon points="100,140 120,130 140,140 120,150" fill="#cc960e" stroke="#111" />
          <polygon points="100,140 120,150 120,170 100,160" fill="#ab7d0b" stroke="#111" />

          <!-- Level 2 (Middle Cross) -->
          <!-- y=0, x=1 -->
          <polygon points="140,090 160,080 180,090 160,100" fill="#f0b218" stroke="#111" />
          <polygon points="160,100 180,090 180,110 160,120" fill="#ab7d0b" stroke="#111" />

          <!-- y=1, x=0 -->
          <polygon points="100,100 120,090 140,100 120,110" fill="#f0b218" stroke="#111" />
          <polygon points="100,100 120,110 120,130 100,120" fill="#ab7d0b" stroke="#111" />

          <!-- y=1, x=1 (Center - covered but top is visible if we want) -->
          <!-- y=1, x=2 -->
          <polygon points="140,100 160,090 180,100 160,110" fill="#f0b218" stroke="#111" />
          <polygon points="160,110 180,100 180,120 160,130" fill="#805d04" stroke="#111" />

          <!-- y=2, x=1 -->
          <polygon points="120,110 140,100 160,110 140,120" fill="#f0b218" stroke="#111" />
          <polygon points="120,110 140,120 140,140 120,130" fill="#ab7d0b" stroke="#111" />
          <polygon points="140,120 160,110 160,130 140,140" fill="#805d04" stroke="#111" />

          <!-- Level 3 (Top 1) -->
          <!-- y=1, x=1 -->
          <polygon points="120,070 140,060 160,070 140,080" fill="#ffca47" stroke="#111" />
          <polygon points="120,070 140,080 140,100 120,090" fill="#f0b218" stroke="#111" />
          <polygon points="140,080 160,070 160,090 140,100" fill="#805d04" stroke="#111" />
        </g>
      </svg>
    `,
    options: ["13 kubus", "14 kubus", "15 kubus", "16 kubus", "17 kubus"],
    answer: "15 kubus",
    explanation: "Tingkat bawah = 9 kubus (3x3). Tingkat tengah = 5 kubus (bentuk silang). Tingkat atas = 1 kubus di tengah. Total: 9 + 5 + 1 = 15 kubus."
  },
  {
    id: 23,
    category: "spatial",
    question: "Jika jaring-jaring kubus di bawah ini dilipat, bentuk kubus 3D manakah yang terbentuk dengan benar?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <!-- 2D Net Outline -->
        <g stroke="#ffffff" stroke-width="1.5" fill="none">
          <!-- Row 1: face 1 (Circle) -->
          <rect x="90" y="20" width="30" height="30" />
          <circle cx="105" cy="35" r="8" fill="#ffb700" />
          
          <!-- Row 2: face 2 (Cross), face 3 (Square), face 4 (Blank) -->
          <rect x="60" y="50" width="30" height="30" />
          <line x1="68" y1="58" x2="82" y2="72" stroke="#ffb700" stroke-width="2" />
          <line x1="82" y1="58" x2="68" y2="72" stroke="#ffb700" stroke-width="2" />

          <rect x="90" y="50" width="30" height="30" fill="#3a3a3a" />
          
          <rect x="120" y="50" width="30" height="30" />
          <polygon points="135,55 145,75 125,75" fill="#ffb700" /> <!-- Triangle -->

          <!-- Row 3: face 5 (Dot) -->
          <rect x="90" y="80" width="30" height="30" />
          <circle cx="105" cy="95" r="3" fill="#ffb700" />

          <!-- Row 4: face 6 (Plus) -->
          <rect x="90" y="110" width="30" height="30" />
          <line x1="105" y1="115" x2="105" y2="135" stroke="#ffb700" stroke-width="2" />
          <line x1="95" y1="125" x2="115" y2="125" stroke="#ffb700" stroke-width="2" />
        </g>
      </svg>
    `,
    options: [
      "Kubus dengan sisi Lingkaran bertetangga langsung dengan sisi Titik dan sisi Plus",
      "Kubus dengan sisi Segitiga berseberangan (tidak mungkin bertemu) dengan sisi Cross",
      "Kubus dengan sisi Lingkaran berseberangan langsung dengan sisi Titik", // Benar (karena terpisah 1 kotak vertikal: lingkaran di y=20, titik di y=80, berjarak 1 kotak)
      "Kubus dengan sisi Plus berseberangan langsung dengan sisi Cross",
      "Kubus dengan sisi Segitiga bertetangga dengan sisi Plus"
    ],
    answer: "Kubus dengan sisi Lingkaran berseberangan langsung dengan sisi Titik",
    explanation: "Dalam jaring-jaring kubus, sisi yang terpisah oleh satu kotak dalam satu baris/kolom lurus akan selalu menjadi sisi yang saling berseberangan (sejajar/tidak akan pernah bertemu di satu sudut). Di sini, sisi Lingkaran (y=20) terpisah 1 kotak oleh sisi Square (y=50) dengan sisi Titik (y=80). Maka Lingkaran dan Titik pasti berseberangan."
  },
  {
    id: 24,
    category: "spatial",
    question: "Perhatikan jaring-jaring kubus di bawah ini. Sisi manakah yang akan saling BERSEBERANGAN (tidak bersentuhan) dengan sisi bersimbol bintang (★)?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#ffffff" stroke-width="1.5" fill="none">
          <!-- T-net shape -->
          <rect x="40" y="50" width="30" height="30" />
          <text x="50" y="72" fill="#ffb700" font-size="20" font-family="sans-serif">A</text>

          <rect x="70" y="50" width="30" height="30" />
          <text x="80" y="72" fill="#ffb700" font-size="20" font-family="sans-serif">B</text>

          <rect x="100" y="50" width="30" height="30" />
          <text x="110" y="72" fill="#ffb700" font-size="20" font-family="sans-serif">★</text>

          <rect x="130" y="50" width="30" height="30" />
          <text x="140" y="72" fill="#ffb700" font-size="20" font-family="sans-serif">C</text>

          <!-- Vertical elements -->
          <rect x="100" y="20" width="30" height="30" />
          <text x="110" y="42" fill="#ffb700" font-size="20" font-family="sans-serif">D</text>

          <rect x="100" y="80" width="30" height="30" />
          <text x="110" y="102" fill="#ffb700" font-size="20" font-family="sans-serif">E</text>
        </g>
      </svg>
    `,
    options: ["Sisi A", "Sisi B", "Sisi C", "Sisi D", "Sisi E"],
    answer: "Sisi A", // Berseberangan dengan A karena dipisah B (A - B - Star)
    explanation: "Pada baris horizontal A - B - ★ - C, sisi A terpisah satu kotak (yaitu B) dari sisi Bintang (★). Maka ketika dilipat, A dan Bintang akan saling berhadapan/berseberangan."
  },
  {
    id: 25,
    category: "spatial",
    question: "Manakah dari pilihan berikut yang merupakan hasil rotasi bangun 3D L-Shape di bawah ini?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <!-- Original L-shape structure (3 blocks high, 2 blocks wide base) -->
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Base cube front-left (0,1,0) -->
          <polygon points="100,120 120,110 140,120 120,130" fill="#d49200" stroke="#111" />
          <polygon points="100,120 120,130 120,150 100,140" fill="#b87e00" stroke="#111" />
          <polygon points="120,130 140,120 140,140 120,150" fill="#805800" stroke="#111" />

          <!-- Stack of 3 cubes at back-right (0,0,0) -->
          <!-- Level 1 (Bottom) -->
          <polygon points="120,130 140,120 160,130 140,140" fill="#d49200" stroke="#111" />
          <polygon points="140,140 160,130 160,150 140,160" fill="#805800" stroke="#111" />
          
          <!-- Level 2 (Middle) -->
          <polygon points="120,100 140,090 160,100 140,110" fill="#ffb700" stroke="#111" />
          <polygon points="120,100 140,110 140,130 120,120" fill="#d49200" stroke="#111" />
          <polygon points="140,110 160,100 160,120 140,130" fill="#805800" stroke="#111" />

          <!-- Level 3 (Top) -->
          <polygon points="120,070 140,060 160,070 140,080" fill="#ffe299" stroke="#111" />
          <polygon points="120,070 140,080 140,100 120,090" fill="#ffb700" stroke="#111" />
          <polygon points="140,080 160,070 160,090 140,100" fill="#805800" stroke="#111" />
        </g>
        <text x="10" y="20" fill="#ffffff" font-size="10" font-family="sans-serif">Bangun Acuan</text>
      </svg>
    `,
    options: [
      "Bangun tidur mendatar dengan tiang vertikal berada di ujung kanan menghadap ke atas",
      "Bangun dengan tiang vertikal setinggi 3 unit dengan kaki di depan mengarah ke kanan",
      "Bangun dengan tiang tidur horizontal sepanjang 3 unit dengan ujung naik 1 unit di sebelah kiri",
      "Bangun L terbalik dengan tiang vertikal setinggi 3 unit di kiri dan base di kanan bawah",
      "Tidak ada jawaban yang benar"
    ],
    answer: "Bangun L terbalik dengan tiang vertikal setinggi 3 unit di kiri dan base di kanan bawah",
    explanation: "Jika bangun L-shape di atas diputar 90 derajat secara horizontal atau dibalik, bayangan rotasi yang valid akan menempatkan bagian vertikal tinggi di sebelah kiri dengan base memanjang ke arah kanan bawah."
  },
  {
    id: 26,
    category: "spatial",
    question: "Berapa banyak kubus yang bersentuhan langsung (sisi bertemu sisi) dengan kubus bertanda silang (X) di bawah?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <!-- 3x3 single layer layout with central X marked cube -->
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Back Row -->
          <!-- (0,0) -->
          <polygon points="120,80 140,70 160,80 140,90" fill="#a8a8a8" stroke="#111" />
          <polygon points="120,80 140,90 140,100 120,95" fill="#8c8c8c" stroke="#111" />
          <!-- (1,0) -->
          <polygon points="140,70 160,60 180,70 160,80" fill="#a8a8a8" stroke="#111" />
          <!-- (2,0) -->
          <polygon points="160,60 180,50 200,60 180,70" fill="#a8a8a8" stroke="#111" />
          <polygon points="180,70 200,60 200,75 180,85" fill="#707070" stroke="#111" />

          <!-- Middle Row -->
          <!-- (0,1) -->
          <polygon points="100,95 120,85 140,95 120,105" fill="#a8a8a8" stroke="#111" />
          <polygon points="100,95 120,105 120,115 100,110" fill="#8c8c8c" stroke="#111" />
          <!-- (1,1) - The 'X' Cube -->
          <polygon points="120,85 140,75 160,85 140,95" fill="#ffb700" stroke="#111" />
          <text x="135" y="90" fill="#111" font-weight="bold" font-size="12">X</text>
          <!-- (2,1) -->
          <polygon points="140,75 160,65 180,75 160,85" fill="#a8a8a8" stroke="#111" />
          <polygon points="160,85 180,75 180,90 160,100" fill="#707070" stroke="#111" />

          <!-- Front Row -->
          <!-- (0,2) -->
          <polygon points="80,110 100,100 120,110 100,120" fill="#a8a8a8" stroke="#111" />
          <polygon points="80,110 100,120 100,135 80,125" fill="#8c8c8c" stroke="#111" />
          <!-- (1,2) -->
          <polygon points="100,100 120,90 140,110 120,120" fill="#a8a8a8" stroke="#111" />
          <polygon points="120,120 140,110 140,125 120,135" fill="#707070" stroke="#111" />
          <!-- (2,2) -->
          <polygon points="120,90 140,80 160,90 140,100" fill="#a8a8a8" stroke="#111" />
          <polygon points="140,100 160,90 160,105 140,115" fill="#707070" stroke="#111" />
        </g>
      </svg>
    `,
    options: ["2 kubus", "3 kubus", "4 kubus", "5 kubus", "6 kubus"],
    answer: "4 kubus", // North, South, East, West are touching by faces
    explanation: "Kubus 'X' berada tepat di tengah-tengah grid 3x3. Di tingkat yang sama, kubus yang bersentuhan sisi langsung dengannya adalah kubus di depan, belakang, kanan, dan kiri. Jadi ada 4 kubus."
  },
  {
    id: 27,
    category: "spatial",
    question: "Berapa jumlah kubus yang tersembunyi (tidak terlihat sama sekali dari sudut pandang gambar) pada tumpukan berikut?",
    // Stack structure: 3x3 base (Level 1), 2x2 middle (Level 2), 1x1 top (Level 3). Total = 9 + 4 + 1 = 14 cubes.
    // Visible cubes are: top (1), middle (3 visible), bottom (5 visible). Total visible = 9. Total hidden = 5.
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <!-- Isometric Pyramidal Stack -->
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Level 1 (Bottom 3x3) -->
          <polygon points="160,120 180,110 200,120 180,130" fill="#cc960e" stroke="#111" />
          <polygon points="180,130 200,120 200,135 180,145" fill="#805d04" stroke="#111" />
          <polygon points="140,130 160,120 180,130 160,140" fill="#cc960e" stroke="#111" />
          <polygon points="120,140 140,130 160,140 140,150" fill="#cc960e" stroke="#111" />
          <polygon points="140,150 160,140 160,155 140,165" fill="#805d04" stroke="#111" />
          <polygon points="100,150 120,140 140,150 120,160" fill="#cc960e" stroke="#111" />
          <polygon points="100,150 120,160 120,175 100,165" fill="#ab7d0b" stroke="#111" />

          <!-- Level 2 (Middle 2x2) -->
          <polygon points="140,095 160,085 180,095 160,105" fill="#f0b218" stroke="#111" />
          <polygon points="160,105 180,095 180,110 160,120" fill="#805d04" stroke="#111" />
          <polygon points="120,105 140,095 160,105 140,115" fill="#f0b218" stroke="#111" />
          <polygon points="100,115 120,105 140,115 120,125" fill="#f0b218" stroke="#111" />
          <polygon points="100,115 120,125 120,140 100,130" fill="#ab7d0b" stroke="#111" />

          <!-- Level 3 (Top 1) -->
          <polygon points="120,070 140,060 160,070 140,080" fill="#ffca47" stroke="#111" />
          <polygon points="120,070 140,080 140,095 120,085" fill="#f0b218" stroke="#111" />
          <polygon points="140,080 160,070 160,095 140,105" fill="#805d04" stroke="#111" />
        </g>
      </svg>
    `,
    options: ["3 kubus", "4 kubus", "5 kubus", "6 kubus", "7 kubus"],
    answer: "5 kubus",
    explanation: "Total kubus = 9 (Level 1) + 4 (Level 2) + 1 (Level 3) = 14 kubus. Kubus yang terlihat dari gambar adalah: 1 (Level 3) + 3 (Level 2) + 5 (Level 1) = 9 kubus. Maka kubus yang tersembunyi (tidak terlihat) = 14 - 9 = 5 kubus."
  },
  {
    id: 28,
    category: "spatial",
    question: "Manakah jaring-jaring yang BENAR untuk membentuk kubus bermotif di bawah ini?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <!-- Isometric view showing Top=Circle, Front-Left=Triangle, Front-Right=Cross -->
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Top face (Circle) -->
          <polygon points="120,70 150,55 180,70 150,85" fill="#ffb700" stroke="#111" />
          <ellipse cx="150" cy="70" rx="12" ry="6" fill="#111" />
          
          <!-- Front-Left face (Triangle) -->
          <polygon points="120,70 150,85 150,125 120,110" fill="#d49200" stroke="#111" />
          <polygon points="135,82 145,105 128,105" fill="#111" />
          
          <!-- Front-Right face (Cross) -->
          <polygon points="150,85 180,70 180,110 150,125" fill="#805800" stroke="#111" />
          <line x1="160" y1="90" x2="172" y2="102" stroke="#111" stroke-width="3" />
          <line x1="172" y1="90" x2="160" y2="102" stroke="#111" stroke-width="3" />
        </g>
      </svg>
    `,
    options: [
      "Jaring-jaring di mana sisi Lingkaran, Segitiga, dan Cross bertemu di satu titik sudut", // Benar
      "Jaring-jaring di mana sisi Lingkaran berseberangan dengan sisi Segitiga",
      "Jaring-jaring di mana sisi Cross berseberangan dengan sisi Segitiga",
      "Jaring-jaring di mana sisi Lingkaran berseberangan dengan sisi Cross",
      "Tidak ada jaring-jaring yang memenuhi syarat"
    ],
    answer: "Jaring-jaring di mana sisi Lingkaran, Segitiga, dan Cross bertemu di satu titik sudut",
    explanation: "Pada kubus 3D di atas, ketiga sisi bermotif (Lingkaran, Segitiga, dan Cross) saling bersentuhan di satu titik sudut bersama (titik sudut tengah atas). Maka pada jaring-jaring yang benar, ketiga sisi tersebut harus bertetangga langsung dan dapat ditekuk untuk bertemu pada sudut yang sama."
  },
  {
    id: 29,
    category: "spatial",
    question: "Hitunglah jumlah kubus penyusun bangun tangga 3D di bawah ini:",
    // Stairs structure: Level 1 (bottom) = 3x3 = 9 cubes. Level 2 = 3x2 = 6 cubes. Level 3 = 3x1 = 3 cubes. Total = 18 cubes.
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Level 1 (Bottom 3x3) - only drawing visible edges -->
          <!-- y=0 -->
          <polygon points="160,120 180,110 200,120 180,130" fill="#cc960e" stroke="#111" />
          <polygon points="180,130 200,120 200,135 180,145" fill="#805d04" stroke="#111" />
          <!-- y=1 -->
          <polygon points="140,130 160,120 180,130 160,140" fill="#cc960e" stroke="#111" />
          <!-- y=2 -->
          <polygon points="120,140 140,130 160,140 140,150" fill="#cc960e" stroke="#111" />
          <polygon points="140,150 160,140 160,155 140,165" fill="#805d04" stroke="#111" />
          <polygon points="100,150 120,140 140,150 120,160" fill="#cc960e" stroke="#111" />
          <polygon points="100,150 120,160 120,175 100,165" fill="#ab7d0b" stroke="#111" />

          <!-- Level 2 (Middle 3x2) -->
          <!-- y=0 -->
          <polygon points="140,095 160,085 180,095 160,105" fill="#f0b218" stroke="#111" />
          <polygon points="160,105 180,095 180,110 160,120" fill="#805d04" stroke="#111" />
          <!-- y=1 -->
          <polygon points="120,105 140,095 160,105 140,115" fill="#f0b218" stroke="#111" />
          <!-- y=2 -->
          <polygon points="100,115 120,105 140,115 120,125" fill="#f0b218" stroke="#111" />
          <polygon points="100,115 120,125 120,140 100,130" fill="#ab7d0b" stroke="#111" />

          <!-- Level 3 (Top 3x1) -->
          <!-- y=0 -->
          <polygon points="120,070 140,060 160,070 140,080" fill="#ffca47" stroke="#111" />
          <polygon points="140,080 160,070 160,095 140,105" fill="#805d04" stroke="#111" />
          <!-- y=1 -->
          <polygon points="100,080 120,070 140,080 120,090" fill="#ffca47" stroke="#111" />
          <!-- y=2 -->
          <polygon points="80,090 100,080 120,090 100,100" fill="#ffca47" stroke="#111" />
          <polygon points="80,090 100,100 100,115 80,105" fill="#ab7d0b" stroke="#111" />
        </g>
      </svg>
    `,
    options: ["12 kubus", "15 kubus", "18 kubus", "21 kubus", "24 kubus"],
    answer: "18 kubus",
    explanation: "Struktur ini adalah tangga 3 tingkat: Tingkat bawah = 3x3 = 9 kubus. Tingkat tengah = 3x2 = 6 kubus. Tingkat atas = 3x1 = 3 kubus. Total: 9 + 6 + 3 = 18 kubus."
  },
  {
    id: 30,
    category: "spatial",
    question: "Manakah dari pernyataan berikut yang BENAR mengenai proyeksi ortogonal (tampak atas) dari tumpukan kubus berbentuk huruf L setinggi 2 tingkat di bawah ini?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <!-- L-shape 2-level structure -->
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Level 1 (L-shape of 3 cubes) -->
          <polygon points="120,130 140,120 160,130 140,140" fill="#cc960e" stroke="#111" />
          <polygon points="140,140 160,130 160,150 140,160" fill="#805d04" stroke="#111" />
          
          <polygon points="140,120 160,110 180,120 160,130" fill="#cc960e" stroke="#111" />
          <polygon points="160,130 180,120 180,140 160,150" fill="#805d04" stroke="#111" />
          
          <polygon points="100,120 120,110 140,120 120,130" fill="#cc960e" stroke="#111" />
          <polygon points="100,120 120,130 120,150 100,140" fill="#ab7d0b" stroke="#111" />

          <!-- Level 2 (1 cube on top of the corner cube) -->
          <polygon points="120,100 140,090 160,100 140,110" fill="#f0b218" stroke="#111" />
          <polygon points="120,100 140,110 140,130 120,120" fill="#ab7d0b" stroke="#111" />
          <polygon points="140,110 160,100 160,120 140,130" fill="#805d04" stroke="#111" />
        </g>
      </svg>
    `,
    options: [
      "Tampak atas berupa bentuk kotak persegi sempurna 2x2",
      "Tampak atas berupa 3 kotak persegi berbentuk huruf L", // Benar (ortogonal atas memproyeksikan tumpukan 2D horizontal)
      "Tampak atas berupa garis lurus memanjang 3 kotak",
      "Tampak atas berupa 4 kotak berbentuk tanda tambah",
      "Tampak atas tidak dapat digambarkan secara 2D"
    ],
    answer: "Tampak atas berupa 3 kotak persegi berbentuk huruf L",
    explanation: "Proyeksi ortogonal tampak atas hanya melihat dimensi panjang dan lebar (tanpa tinggi/kedalaman). Tumpukan di atas memiliki layout dasar berbentuk huruf L yang terdiri dari 3 posisi kolom kubus. Oleh karena itu, tampak atasnya akan memproyeksikan 3 buah kotak persegi yang disusun berbentuk huruf L."
  }
];

// Exporting module for client-side loading or modular inclusion
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionBank };
}
