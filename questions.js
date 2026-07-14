// BANK SOAL PSIKOTES ONLINE - PPD BA
// Kategori: Calon Group Leader PT Putra Perkasa Abadi (PPA)
// 50 Soal Terdiri Dari:
// - Soal 1-8: Deret Angka (Logic Number)
// - Soal 9-24: Aritmatika & Logika Soal Cerita (Math & Logic)
// - Soal 25-40: Logika Spasial & Bangun Ruang (Spatial Reasoning)
// - Soal 41-50: Tes Deret Gambar & Matriks Abstrak (Abstract Diagram Matrix)

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
    question: "Sebuah dump truck mengangkut overburden dari front tambang ke disposal area dengan jarak 6 km. Kecepatan rata-rata truck saat bermuatan adalah 30 km/jam, dan saat kembali kosong adalah 45 km/jam. Berapa total waktu perjalanan pulang-pergi (dalam menit)?",
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
  {
    id: 21,
    category: "math",
    question: "Sebuah target ketersediaan mekanis unit (Mechanical Availability - MA) dump truck ditargetkan minimal 90%. Dari 30 hari dalam satu bulan (720 jam total), sebuah unit mengalami breakdown/downtime selama 48 jam. Berapa Mechanical Availability (MA) dari unit tersebut?",
    options: ["90.50%", "91.33%", "92.00%", "93.33%", "94.67%"],
    answer: "93.33%",
    explanation: "Jam operasi tersedia = 720 - 48 = 672 jam. MA = (Jam Tersedia / Jam Total) * 100% = (672 / 720) * 100% = 93.33%."
  },
  {
    id: 22,
    category: "math",
    question: "Cycle time (waktu edar) sebuah dump truck untuk satu putaran hauling adalah 24 menit. Berapa kapasitas produksi pemindahan material maksimum (ritasi) yang bisa dicapai oleh dump truck tersebut jika ia bekerja efektif selama 8 jam sehari?",
    options: ["15 rit", "18 rit", "20 rit", "24 rit", "30 rit"],
    answer: "20 rit",
    explanation: "Waktu kerja efektif = 8 jam * 60 menit = 480 menit. Ritasi maksimum = 480 menit / 24 menit/rit = 20 rit."
  },
  {
    id: 23,
    category: "math",
    question: "Di site PPA, penggunaan solar excavator dihitung dengan rasio jam operasi (Fuel Ratio). Jika sebuah excavator beroperasi selama 10 jam dan menghabiskan 350 liter solar, berapa fuel ratio rata-rata excavator tersebut (liter/jam)?",
    options: ["25 liter/jam", "30 liter/jam", "32 liter/jam", "35 liter/jam", "40 liter/jam"],
    answer: "35 liter/jam",
    explanation: "Fuel Ratio = Konsumsi Solar / Jam Operasi = 350 liter / 10 jam = 35 liter/jam."
  },
  {
    id: 24,
    category: "math",
    question: "Sebuah unit Dozer D375 memiliki efisiensi waktu kerja (Physical Availability - PA) sebesar 85% dari total 24 jam sehari. Berapa jam unit tersebut siap dioperasikan dalam sehari?",
    options: ["19.2 jam", "20.0 jam", "20.4 jam", "21.6 jam", "22.0 jam"],
    answer: "20.4 jam",
    explanation: "Jam siap pakai = 24 jam * 85% = 24 * 0.85 = 20.4 jam."
  },

  // ==========================================
  // BAGIAN C: LOGIKA SPASIAL / BANGUN RUANG (25 - 40)
  // ==========================================
  {
    id: 25,
    category: "spatial",
    question: "Hitunglah jumlah kubus penyusun bangun 3D di bawah ini:",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Cubes Level 1 (Bottom) -->
          <polygon points="120,130 140,120 160,130 140,140" fill="#e6a100" stroke="#111" />
          <polygon points="120,130 140,140 140,160 120,150" fill="#cc8f00" stroke="#111" />
          <polygon points="140,140 160,130 160,150 140,160" fill="#996b00" stroke="#111" />
          
          <polygon points="140,120 160,110 180,120 160,130" fill="#e6a100" stroke="#111" />
          <polygon points="160,130 180,120 180,140 160,150" fill="#996b00" stroke="#111" />
          
          <polygon points="160,110 180,100 200,110 180,120" fill="#e6a100" stroke="#111" />
          <polygon points="180,120 200,110 200,130 180,140" fill="#996b00" stroke="#111" />

          <polygon points="100,120 120,110 140,120 120,130" fill="#e6a100" stroke="#111" />
          <polygon points="100,120 120,130 120,150 100,140" fill="#cc8f00" stroke="#111" />
          
          <polygon points="120,110 140,100 160,110 140,120" fill="#e6a100" stroke="#111" />
          
          <polygon points="140,100 160,090 180,100 160,110" fill="#e6a100" stroke="#111" />
          <polygon points="160,110 180,100 180,120 160,130" fill="#996b00" stroke="#111" />

          <!-- Cubes Level 2 (Middle) -->
          <polygon points="120,100 140,090 160,100 140,110" fill="#ffb700" stroke="#111" />
          <polygon points="120,100 140,110 140,130 120,120" fill="#e6a100" stroke="#111" />
          <polygon points="140,110 160,100 160,120 140,130" fill="#b37d00" stroke="#111" />

          <polygon points="140,090 160,080 180,090 160,100" fill="#ffb700" stroke="#111" />
          <polygon points="160,100 180,090 180,110 160,120" fill="#b37d00" stroke="#111" />

          <polygon points="100,090 120,080 140,090 120,100" fill="#ffb700" stroke="#111" />
          <polygon points="100,090 120,100 120,120 100,110" fill="#e6a100" stroke="#111" />

          <!-- Cubes Level 3 (Top) -->
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
    id: 26,
    category: "spatial",
    question: "Hitunglah jumlah kubus penyusun bangun 3D di bawah ini:",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Level 1 (Bottom 3x3) -->
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

          <!-- y=1, x=2 -->
          <polygon points="140,100 160,090 180,100 160,110" fill="#f0b218" stroke="#111" />
          <polygon points="160,110 180,100 180,120 160,130" fill="#805d04" stroke="#111" />

          <!-- y=2, x=1 -->
          <polygon points="120,110 140,100 160,110 140,120" fill="#f0b218" stroke="#111" />
          <polygon points="120,110 140,120 140,140 120,130" fill="#ab7d0b" stroke="#111" />
          <polygon points="140,120 160,110 160,130 140,140" fill="#805d04" stroke="#111" />

          <!-- Level 3 (Top 1) -->
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
    id: 27,
    category: "spatial",
    question: "Jika jaring-jaring kubus di bawah ini dilipat, bentuk kubus 3D manakah yang terbentuk dengan benar?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#ffffff" stroke-width="1.5" fill="none">
          <!-- Row 1: face 1 (Circle) -->
          <rect x="90" y="20" width="30" height="30" />
          <circle cx="105" cy="35" r="8" fill="#ffb700" />
          
          <!-- Row 2: face 2 (Cross), face 3 (Square), face 4 (Triangle) -->
          <rect x="60" y="50" width="30" height="30" />
          <line x1="68" y1="58" x2="82" y2="72" stroke="#ffb700" stroke-width="2" />
          <line x1="82" y1="58" x2="68" y2="72" stroke="#ffb700" stroke-width="2" />

          <rect x="90" y="50" width="30" height="30" fill="#3a3a3a" />
          
          <rect x="120" y="50" width="30" height="30" />
          <polygon points="135,55 145,75 125,75" fill="#ffb700" />

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
      "Kubus dengan sisi Segitiga berseberangan dengan sisi Cross",
      "Kubus dengan sisi Lingkaran berseberangan langsung dengan sisi Titik",
      "Kubus dengan sisi Plus berseberangan langsung dengan sisi Cross",
      "Kubus dengan sisi Segitiga bertetangga dengan sisi Plus"
    ],
    answer: "Kubus dengan sisi Lingkaran berseberangan langsung dengan sisi Titik",
    explanation: "Dalam jaring-jaring kubus, sisi yang terpisah oleh satu kotak dalam satu baris/kolom lurus akan selalu menjadi sisi yang saling berseberangan. Di sini, sisi Lingkaran (y=20) terpisah 1 kotak oleh sisi Square (y=50) dengan sisi Titik (y=80). Maka Lingkaran dan Titik pasti berseberangan."
  },
  {
    id: 28,
    category: "spatial",
    question: "Perhatikan jaring-jaring kubus di bawah ini. Sisi manakah yang akan saling BERSEBERANGAN (tidak bersentuhan) dengan sisi bersimbol bintang (★)?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#ffffff" stroke-width="1.5" fill="none">
          <rect x="40" y="50" width="30" height="30" />
          <text x="50" y="72" fill="#ffb700" font-size="20" font-family="sans-serif">A</text>

          <rect x="70" y="50" width="30" height="30" />
          <text x="80" y="72" fill="#ffb700" font-size="20" font-family="sans-serif">B</text>

          <rect x="100" y="50" width="30" height="30" />
          <text x="110" y="72" fill="#ffb700" font-size="20" font-family="sans-serif">★</text>

          <rect x="130" y="50" width="30" height="30" />
          <text x="140" y="72" fill="#ffb700" font-size="20" font-family="sans-serif">C</text>

          <rect x="100" y="20" width="30" height="30" />
          <text x="110" y="42" fill="#ffb700" font-size="20" font-family="sans-serif">D</text>

          <rect x="100" y="80" width="30" height="30" />
          <text x="110" y="102" fill="#ffb700" font-size="20" font-family="sans-serif">E</text>
        </g>
      </svg>
    `,
    options: ["Sisi A", "Sisi B", "Sisi C", "Sisi D", "Sisi E"],
    answer: "Sisi A",
    explanation: "Pada baris horizontal A - B - ★ - C, sisi A terpisah satu kotak (B) dari Bintang (★). Maka ketika dilipat menjadi kubus, sisi A dan Bintang akan saling berhadapan (berseberangan)."
  },
  {
    id: 29,
    category: "spatial",
    question: "Manakah dari pilihan berikut yang merupakan hasil rotasi bangun 3D L-Shape di bawah ini?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Base cube front-left (0,1,0) -->
          <polygon points="100,120 120,110 140,120 120,130" fill="#d49200" stroke="#111" />
          <polygon points="100,120 120,130 120,150 100,140" fill="#b87e00" stroke="#111" />
          <polygon points="120,130 140,120 140,140 120,150" fill="#805800" stroke="#111" />

          <!-- Stack of 3 cubes at back-right (0,0,0) -->
          <polygon points="120,130 140,120 160,130 140,140" fill="#d49200" stroke="#111" />
          <polygon points="140,140 160,130 160,150 140,160" fill="#805800" stroke="#111" />
          
          <polygon points="120,100 140,090 160,100 140,110" fill="#ffb700" stroke="#111" />
          <polygon points="120,100 140,110 140,130 120,120" fill="#d49200" stroke="#111" />
          <polygon points="140,110 160,100 160,120 140,130" fill="#805800" stroke="#111" />

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
    id: 30,
    category: "spatial",
    question: "Berapa banyak kubus yang bersentuhan langsung (sisi bertemu sisi) dengan kubus bertanda silang (X) di bawah?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Back Row -->
          <polygon points="120,80 140,70 160,80 140,90" fill="#a8a8a8" stroke="#111" />
          <polygon points="120,80 140,90 140,100 120,95" fill="#8c8c8c" stroke="#111" />
          <polygon points="140,70 160,60 180,70 160,80" fill="#a8a8a8" stroke="#111" />
          <polygon points="160,60 180,50 200,60 180,70" fill="#a8a8a8" stroke="#111" />
          <polygon points="180,70 200,60 200,75 180,85" fill="#707070" stroke="#111" />

          <!-- Middle Row -->
          <polygon points="100,95 120,85 140,95 120,105" fill="#a8a8a8" stroke="#111" />
          <polygon points="100,95 120,105 120,115 100,110" fill="#8c8c8c" stroke="#111" />
          <!-- (1,1) - The 'X' Cube -->
          <polygon points="120,85 140,75 160,85 140,95" fill="#ffb700" stroke="#111" />
          <text x="135" y="90" fill="#111" font-weight="bold" font-size="12">X</text>
          <polygon points="140,75 160,65 180,75 160,85" fill="#a8a8a8" stroke="#111" />
          <polygon points="160,85 180,75 180,90 160,100" fill="#707070" stroke="#111" />

          <!-- Front Row -->
          <polygon points="80,110 100,100 120,110 100,120" fill="#a8a8a8" stroke="#111" />
          <polygon points="80,110 100,120 100,135 80,125" fill="#8c8c8c" stroke="#111" />
          <polygon points="100,100 120,90 140,110 120,120" fill="#a8a8a8" stroke="#111" />
          <polygon points="120,120 140,110 140,125 120,135" fill="#707070" stroke="#111" />
          <polygon points="120,90 140,80 160,90 140,100" fill="#a8a8a8" stroke="#111" />
          <polygon points="140,100 160,90 160,105 140,115" fill="#707070" stroke="#111" />
        </g>
      </svg>
    `,
    options: ["2 kubus", "3 kubus", "4 kubus", "5 kubus", "6 kubus"],
    answer: "4 kubus",
    explanation: "Kubus 'X' berada tepat di tengah-tengah grid 3x3 tunggal. Sisi yang bersentuhan langsung secara vertikal/horizontal dengannya adalah sisi depan, belakang, kanan, dan kiri. Jadi berjumlah 4 kubus."
  },
  {
    id: 31,
    category: "spatial",
    question: "Berapa jumlah kubus yang tersembunyi (tidak terlihat sama sekali dari sudut pandang gambar) pada tumpukan piramida berikut?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
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
    explanation: "Total kubus penyusun = 9 (Level 1) + 4 (Level 2) + 1 (Level 3) = 14 kubus. Kubus yang terlihat dari atas/samping = 9 kubus. Kubus tersembunyi = 14 - 9 = 5 kubus."
  },
  {
    id: 32,
    category: "spatial",
    question: "Manakah jaring-jaring yang BENAR untuk membentuk kubus bermotif di bawah ini?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
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
      "Jaring-jaring di mana sisi Lingkaran, Segitiga, dan Cross bertemu di satu titik sudut",
      "Jaring-jaring di mana sisi Lingkaran berseberangan dengan sisi Segitiga",
      "Jaring-jaring di mana sisi Cross berseberangan dengan sisi Segitiga",
      "Jaring-jaring di mana sisi Lingkaran berseberangan dengan sisi Cross",
      "Tidak ada jaring-jaring yang memenuhi syarat"
    ],
    answer: "Jaring-jaring di mana sisi Lingkaran, Segitiga, dan Cross bertemu di satu titik sudut",
    explanation: "Pada gambar kubus 3D, ketiga motif (Lingkaran, Segitiga, Cross) saling bersentuhan di satu titik sudut yang sama. Maka di jaring-jaring yang benar, ketiga kotak tersebut harus terhubung langsung pada satu sudut temu."
  },
  {
    id: 33,
    category: "spatial",
    question: "Hitunglah jumlah kubus penyusun bangun tangga 3D di bawah ini:",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Level 1 (Bottom 3x3) -->
          <polygon points="160,120 180,110 200,120 180,130" fill="#cc960e" stroke="#111" />
          <polygon points="180,130 200,120 200,135 180,145" fill="#805d04" stroke="#111" />
          <polygon points="140,130 160,120 180,130 160,140" fill="#cc960e" stroke="#111" />
          <polygon points="120,140 140,130 160,140 140,150" fill="#cc960e" stroke="#111" />
          <polygon points="140,150 160,140 160,155 140,165" fill="#805d04" stroke="#111" />
          <polygon points="100,150 120,140 140,150 120,160" fill="#cc960e" stroke="#111" />
          <polygon points="100,150 120,160 120,175 100,165" fill="#ab7d0b" stroke="#111" />

          <!-- Level 2 (Middle 3x2) -->
          <polygon points="140,095 160,085 180,095 160,105" fill="#f0b218" stroke="#111" />
          <polygon points="160,105 180,095 180,110 160,120" fill="#805d04" stroke="#111" />
          <polygon points="120,105 140,095 160,105 140,115" fill="#f0b218" stroke="#111" />
          <polygon points="100,115 120,105 140,115 120,125" fill="#f0b218" stroke="#111" />
          <polygon points="100,115 120,125 120,140 100,130" fill="#ab7d0b" stroke="#111" />

          <!-- Level 3 (Top 3x1) -->
          <polygon points="120,070 140,060 160,070 140,080" fill="#ffca47" stroke="#111" />
          <polygon points="140,080 160,070 160,095 140,105" fill="#805d04" stroke="#111" />
          <polygon points="100,080 120,070 140,080 120,090" fill="#ffca47" stroke="#111" />
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
    id: 34,
    category: "spatial",
    question: "Manakah pernyataan yang BENAR mengenai tampak atas dari tumpukan kubus berbentuk huruf L setinggi 2 tingkat berikut?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
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
      "Tampak atas berupa 3 kotak persegi berbentuk huruf L",
      "Tampak atas berupa garis lurus memanjang 3 kotak",
      "Tampak atas berupa 4 kotak berbentuk tanda tambah",
      "Tampak atas tidak dapat digambarkan secara 2D"
    ],
    answer: "Tampak atas berupa 3 kotak persegi berbentuk huruf L",
    explanation: "Proyeksi ortogonal tampak atas hanya merekam panjang dan lebar layout dasarnya. Karena susunan dasar berwujud L-shape dengan 3 kolom kubus, tampak atasnya akan memproyeksikan 3 buah persegi berbentuk L."
  },
  {
    id: 35,
    category: "spatial",
    question: "Hitunglah jumlah total kubus yang menyusun konstruksi L-Shape setinggi 3 tingkat berikut:",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- Level 1 (Bottom 3 cubes) -->
          <polygon points="100,130 120,120 140,130 120,140" fill="#cc960e" stroke="#111" />
          <polygon points="100,130 120,140 120,155 100,145" fill="#ab7d0b" stroke="#111" />
          <polygon points="120,140 140,130 140,145 120,155" fill="#805d04" stroke="#111" />

          <polygon points="120,120 140,110 160,120 140,130" fill="#cc960e" stroke="#111" />
          <polygon points="140,130 160,120 160,135 140,145" fill="#805d04" stroke="#111" />

          <polygon points="80,120 100,110 120,120 100,130" fill="#cc960e" stroke="#111" />
          <polygon points="80,120 100,130 100,145 80,135" fill="#ab7d0b" stroke="#111" />

          <!-- Level 2 (2 cubes stacked on corner and left) -->
          <polygon points="100,105 120,095 140,105 120,115" fill="#f0b218" stroke="#111" />
          <polygon points="100,105 120,115 120,130 100,120" fill="#ab7d0b" stroke="#111" />
          <polygon points="120,115 140,105 140,120 120,130" fill="#805d04" stroke="#111" />

          <polygon points="80,095 100,085 120,095 100,105" fill="#f0b218" stroke="#111" />
          <polygon points="80,095 100,105 100,120 80,110" fill="#ab7d0b" stroke="#111" />

          <!-- Level 3 (1 cube stacked on corner only) -->
          <polygon points="100,080 120,070 140,080 120,090" fill="#ffca47" stroke="#111" />
          <polygon points="100,080 120,090 120,105 100,095" fill="#f0b218" stroke="#111" />
          <polygon points="120,090 140,080 140,095 120,105" fill="#805d04" stroke="#111" />
        </g>
      </svg>
    `,
    options: ["5 kubus", "6 kubus", "7 kubus", "8 kubus", "9 kubus"],
    answer: "6 kubus",
    explanation: "Konstruksi L-Shape ini terdiri dari: Level 1 (bawah) = 3 kubus, Level 2 (tengah) = 2 kubus, Level 3 (atas) = 1 kubus di bagian pojok. Total kubus = 3 + 2 + 1 = 6 kubus."
  },
  {
    id: 36,
    category: "spatial",
    question: "Perhatikan jaring-jaring kubus berikut. Jika dilipat menjadi kubus, sisi manakah yang berseberangan dengan sisi 'F'?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#ffffff" stroke-width="1.5" fill="none">
          <!-- Z net shape -->
          <rect x="60" y="20" width="30" height="30" />
          <text x="70" y="42" fill="#ffb700" font-size="20" font-family="sans-serif">A</text>
          
          <rect x="90" y="20" width="30" height="30" />
          <text x="100" y="42" fill="#ffb700" font-size="20" font-family="sans-serif">B</text>

          <rect x="90" y="50" width="30" height="30" />
          <text x="100" y="72" fill="#ffb700" font-size="20" font-family="sans-serif">C</text>

          <rect x="90" y="80" width="30" height="30" />
          <text x="100" y="102" fill="#ffb700" font-size="20" font-family="sans-serif">D</text>

          <rect x="120" y="80" width="30" height="30" />
          <text x="130" y="102" fill="#ffb700" font-size="20" font-family="sans-serif">E</text>

          <rect x="120" y="110" width="30" height="30" />
          <text x="130" y="132" fill="#ffb700" font-size="20" font-family="sans-serif">F</text>
        </g>
      </svg>
    `,
    options: ["Sisi A", "Sisi B", "Sisi C", "Sisi D", "Sisi E"],
    answer: "Sisi D",
    explanation: "Sisi D (y=80, x=90) dan sisi F (y=110, x=120) akan melipat dan saling berhadapan (berseberangan) karena dipisahkan oleh sudut pergeseran diagonal struktur jaring-jaring."
  },
  {
    id: 37,
    category: "spatial",
    question: "Berapa banyak kubus yang bersentuhan langsung secara mendatar (sisi samping kiri, kanan, depan, belakang) dengan kubus bertanda 'Y'?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- L-shape layout of 3 blocks on level 1 -->
          <!-- corner block is Y -->
          <polygon points="120,100 140,090 160,100 140,110" fill="#fbbf24" stroke="#111" />
          <text x="137" y="105" fill="#111" font-weight="bold" font-size="12">Y</text>
          
          <polygon points="100,110 120,100 140,110 120,120" fill="#a8a8a8" stroke="#111" />
          <polygon points="100,110 120,120 120,135 100,125" fill="#8c8c8c" stroke="#111" />
          <polygon points="120,120 140,110 140,125 120,135" fill="#707070" stroke="#111" />

          <polygon points="140,110 160,100 180,110 160,120" fill="#a8a8a8" stroke="#111" />
          <polygon points="160,120 180,110 180,125 160,135" fill="#707070" stroke="#111" />
        </g>
      </svg>
    `,
    options: ["1 kubus", "2 kubus", "3 kubus", "4 kubus", "5 kubus"],
    answer: "2 kubus",
    explanation: "Kubus Y terletak di pojok pembentuk sudut L. Kubus yang bersentuhan langsung dengannya hanya ada 2 unit (satu di sebelah kiri-depan, dan satu di sebelah kanan-depan)."
  },
  {
    id: 38,
    category: "spatial",
    question: "Hitunglah jumlah kubus penyusun susunan balok berongga berikut:",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#3a3a3a" stroke-width="0.5">
          <!-- 3x3 base with middle missing (8 cubes on Level 1) -->
          <polygon points="160,110 180,100 200,110 180,120" fill="#cc960e" stroke="#111" />
          <polygon points="180,120 200,110 200,130 180,140" fill="#805d04" stroke="#111" />
          <polygon points="140,120 160,110 180,120 160,130" fill="#cc960e" stroke="#111" />
          <polygon points="120,130 140,120 160,130 140,140" fill="#cc960e" stroke="#111" />
          <polygon points="100,140 120,130 140,140 120,150" fill="#cc960e" stroke="#111" />
          <polygon points="100,140 120,150 120,170 100,160" fill="#ab7d0b" stroke="#111" />
          
          <polygon points="120,145 140,135 160,145 140,155" fill="#cc960e" stroke="#111" />
          <polygon points="140,155 160,145 160,165 140,175" fill="#805d04" stroke="#111" />
          
          <polygon points="140,135 160,125 180,135 160,145" fill="#cc960e" stroke="#111" />
          <polygon points="160,145 180,135 180,155 160,165" fill="#805d04" stroke="#111" />
        </g>
      </svg>
    `,
    options: ["6 kubus", "7 kubus", "8 kubus", "9 kubus", "10 kubus"],
    answer: "8 kubus",
    explanation: "Susunan ini memiliki layout 3x3 di mana bagian tengahnya kosong/berlubang. Maka jumlah kubus adalah (3x3) - 1 = 8 kubus."
  },
  {
    id: 39,
    category: "spatial",
    question: "Jika jaring-jaring kubus berikut ditutup, sisi nomor berapakah yang akan saling BERSEBERANGAN dengan sisi nomor 3?",
    svg: `
      <svg viewBox="0 0 240 180" width="100%" height="100%">
        <g stroke="#ffffff" stroke-width="1.5" fill="none">
          <!-- Cross net layout -->
          <rect x="90" y="20" width="30" height="30" />
          <text x="100" y="42" fill="#ffb700" font-size="18" font-weight="bold">1</text>
          
          <rect x="90" y="50" width="30" height="30" />
          <text x="100" y="72" fill="#ffb700" font-size="18" font-weight="bold">2</text>

          <rect x="60" y="50" width="30" height="30" />
          <text x="70" y="72" fill="#ffb700" font-size="18" font-weight="bold">3</text>

          <rect x="120" y="50" width="30" height="30" />
          <text x="130" y="72" fill="#ffb700" font-size="18" font-weight="bold">4</text>

          <rect x="90" y="80" width="30" height="30" />
          <text x="100" y="102" fill="#ffb700" font-size="18" font-weight="bold">5</text>

          <rect x="90" y="110" width="30" height="30" />
          <text x="100" y="132" fill="#ffb700" font-size="18" font-weight="bold">6</text>
        </g>
      </svg>
    `,
    options: ["Sisi 1", "Sisi 2", "Sisi 4", "Sisi 5", "Sisi 6"],
    answer: "Sisi 4",
    explanation: "Pada baris mendatar 3 - 2 - 4, sisi 3 dipisahkan 1 kotak (sisi 2) dari sisi 4. Maka ketika dilipat, sisi 3 akan berseberangan langsung dengan sisi 4."
  },
  {
    id: 40,
    category: "spatial",
    question: "Tampak depan (proyeksi ortogonal) dari susunan kubus berbentuk tangga 3 tingkat (Soal No. 33) adalah berupa...",
    options: [
      "Kotak persegi panjang vertikal ukuran 3x1",
      "Kotak persegi besar ukuran 3x3",
      "Kotak persegi panjang horizontal ukuran 1x3",
      "Susunan L-Shape terbalik",
      "Tidak ada jawaban yang benar"
    ],
    answer: "Kotak persegi besar ukuran 3x3",
    explanation: "Konstruksi tangga memiliki panjang 3 unit dan tinggi 3 unit. Jika diproyeksikan ortogonal lurus dari arah depan, semua celah undakan akan merapat sehingga terlihat seperti kotak persegi utuh berukuran 3x3."
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
      "A. Kotak dengan 6 persegi hitam (tambahan di kolom 1 baris 3)",
      "B. Kotak dengan 6 persegi hitam (tambahan di kolom 3 baris 2)", // Correct
      "C. Kotak dengan 6 persegi hitam (tambahan di kolom 4 baris 2)",
      "D. Kotak dengan 6 persegi hitam (tambahan di kolom 4 baris 4)",
      "E. Kotak dengan 5 persegi hitam (tidak ada tambahan)"
    ],
    answer: "B. Kotak dengan 6 persegi hitam (tambahan di kolom 3 baris 2)",
    explanation: "Pola akumulasi kotak hitam mengikuti pergerakan tangga horizontal-vertikal. Frame 1: (1,2) -> Frame 2: + (2,1) -> Frame 3: + (1,3) -> Frame 4: + (2,2) -> Frame 5: + (1,4). Maka Frame 6 selanjutnya akan menambah kotak hitam di (2,3) (yaitu kolom 3 baris 2 dari kiri atas)."
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
      "A. Pola dengan 4 diamond hitam saja",
      "B. Pola dengan 5 diamond hitam (tambahan di sebelah pojok kiri bawah)", // Correct
      "C. Pola dengan 5 diamond hitam (tambahan di tengah atas)",
      "D. Pola dengan 6 diamond hitam",
      "E. Pola kosong"
    ],
    answer: "B. Pola dengan 5 diamond hitam (tambahan di sebelah pojok kiri bawah)",
    explanation: "Kotak hitam pada pola belah ketupat ini menyebar ke baris bawah secara bergantian. Setelah mengisi tengah-atas, kiri-tengah, kanan-tengah, dan tengah-bawah, langkah selanjutnya adalah mengisi sisi pojok kiri bawah untuk menjaga simetri rotasi."
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
      "A. Jarum menunjuk horizontal (Kiri-Kanan) dengan sisi putih di sebelah kanan",
      "B. Jarum menunjuk horizontal (Kiri-Kanan) dengan sisi putih di sebelah kiri", // Correct
      "C. Jarum menunjuk vertikal (Atas-Bawah) dengan sisi putih di atas",
      "D. Jarum menunjuk diagonal atas-kanan",
      "E. Jarum menunjuk diagonal bawah-kanan"
    ],
    answer: "B. Jarum menunjuk horizontal (Kiri-Kanan) dengan sisi putih di sebelah kiri",
    explanation: "Jarum kompas berputar 45 derajat berlawanan arah jarum jam (CCW) di setiap langkahnya. Posisi terakhir pada bingkai 5 adalah diagonal kanan atas (315°). Putaran berikutnya (315° + 45° = 360°/0°) akan menempatkan jarum secara mendatar (horizontal) dengan ujung putih menghadap ke kiri (arah barat)."
  },
  {
    id: 44,
    category: "logic",
    question: "Berdasarkan matriks gambar 3x3 di bawah ini, tentukan gambar yang paling tepat untuk mengisi sel kosong di pojok kanan bawah:",
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
      "A. Hexagon (Segi enam)",
      "B. Segitiga",
      "C. Square (Bentuk Kotak)", // Correct
      "D. Lingkaran",
      "E. Bentuk Bintang"
    ],
    answer: "C. Square (Bentuk Kotak)",
    explanation: "Aturan baris/kolom matriks: Setiap baris dan kolom harus memiliki tepat satu dari tiga bentuk dasar (Segi enam, Persegi, dan Segitiga). Baris 3 berisi Segitiga dan Segi enam, sehingga sel kosong harus diisi oleh Persegi (Square)."
  },
  {
    id: 45,
    category: "logic",
    question: "Perhatikan matriks garis 3x3 di bawah ini. Tentukan kelompok garis yang sesuai untuk melengkapi sel kosong (?):",
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
      "A. Tiga buah garis diagonal miring kanan",
      "B. Tembok garis silang kotak-kotak (hashtag)",
      "C. Tiga buah garis lurus vertikal (tegak)", // Correct
      "D. Tiga buah garis lurus horizontal",
      "E. Dua buah garis vertikal saja"
    ],
    answer: "C. Tiga buah garis lurus vertikal (tegak)",
    explanation: "Sama seperti deret bentuk, di setiap baris dan kolom harus berisi satu set garis Horizontal, satu set Vertikal, dan satu set Diagonal. Baris ketiga mengandung Horizontal dan Diagonal, sehingga sel kosong harus diisi oleh garis Vertikal."
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
      "A. Bentuk Segitiga dengan titik hitam di tengah",
      "B. Bentuk Persegi (Square) dengan tanda palang tambah (+) di atasnya", // Correct
      "C. Bentuk Rumah dengan tanda palang tambah (+) dan titik",
      "D. Bentuk Segitiga dengan tanda palang tambah (+)",
      "E. Bentuk Persegi polos tanpa atribut"
    ],
    answer: "B. Bentuk Persegi (Square) dengan tanda palang tambah (+) di atasnya",
    explanation: "Aturan kombinasi bentuk dasar: Setiap baris/kolom harus memiliki 1 Segitiga, 1 Persegi, dan 1 Rumah. Jadi bentuk dasarnya haruslah Persegi. Aturan atribut simbol: Distribusi atribut (Polos, Titik, Palang) menyebar merata (masing-masing 3 kali di seluruh matriks). Baris 3 sudah memiliki Palang (di Rumah) dan Titik (di Segitiga), sehingga Persegi harus dipasangkan dengan Palang (+)."
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
      "A. Kotak dengan arsiran di sisi kanan bawah",
      "B. Kotak kosong tanpa arsiran", // Correct
      "C. Kotak dengan arsiran penuh di seluruh bagian",
      "D. Kotak dengan arsiran setengah bagian atas",
      "E. Kotak dengan arsiran diagonal kiri bawah"
    ],
    answer: "B. Kotak kosong tanpa arsiran",
    explanation: "Aturan baris logika: Bentuk arsiran pada sel ketiga adalah hasil 'pengurangan' (operasi XOR/peniadaan arsiran yang tumpang tindih) antara sel pertama dan sel kedua. Pada baris ketiga: Sel pertama penuh diarsir, dan sel kedua diarsir setengah kanan. Jika sel pertama dikurangi arsiran sel kedua yang tersisa di bagian kiri, maka sel ketiga seharusnya kosong (atau sebaliknya jika polanya adalah peniadaan arsiran ganda, maka menghasilkan kotak kosong)."
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
      "A. Titik hitam kembali ke posisi sebelah kiri",
      "B. Titik hitam tetap berada di tengah",
      "C. Titik hitam bergeser ke ujung sebelah kanan", // Correct
      "D. Titik hitam menghilang",
      "E. Titik hitam berlipat ganda menjadi dua"
    ],
    answer: "C. Titik hitam bergeser ke ujung sebelah kanan",
    explanation: "Titik hitam bergeser secara konstan ke arah kanan sejauh 20 unit di setiap bingkai (Frame 1 di kiri -> Frame 2 di tengah -> Frame 3 di kanan). Oleh karena itu, posisi berikutnya adalah di ujung kanan garis kisi."
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
      "A. Posisi tegak kembali seperti semula",
      "B. Posisi terbalik menghadap ke bawah",
      "C. Posisi memanjang ke kiri dengan kaki L mengarah ke atas", // Correct (rotated 270 deg CW)
      "D. Posisi memanjang ke kanan bawah",
      "E. Tidak berputar sama sekali"
    ],
    answer: "C. Posisi memanjang ke kiri dengan kaki L mengarah ke atas",
    explanation: "Bentuk L berotasi 90 derajat searah jarum jam pada setiap langkah. Langkah 1 (tegak) -> Langkah 2 (menghadap kanan) -> Langkah 3 (terbalik menghadap bawah) -> Langkah 4 akan memutar L sejauh 270 derajat, sehingga bagian memanjang berada di atas mendatar ke kiri dengan ujung kaki mengarah ke atas."
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
      "A. Lingkaran kosong saja",
      "B. Tanda tambah (+) saja",
      "C. Lingkaran dengan tanda tambah (+) di dalamnya", // Correct
      "D. Bentuk persegi berarsiran",
      "E. Dua buah lingkaran bertumpuk"
    ],
    answer: "C. Lingkaran dengan tanda tambah (+) di dalamnya",
    explanation: "Aturan baris ketiga adalah penjumlahan bentuk: Sel ketiga adalah hasil gabungan (kombinasi superimpose) antara elemen sel pertama dan sel kedua. Sel pertama adalah Lingkaran, sel kedua adalah Tanda Tambah (+). Maka sel ketiga adalah gabungan keduanya: Lingkaran berisi Tanda Tambah di tengah."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionBank };
}
