# Portal Psikotes Online Calon Group Leader - PPD BA

Aplikasi web ini dirancang khusus untuk melatih dan menyaring calon Group Leader (GL) pada seksi **Plant People Development Bukit Asam (PPD BA)** PT Putra Perkasa Abadi (PPA). Aplikasi ini dapat diakses dengan mudah di ponsel pintar (smartphone) maupun komputer desktop.

---

## 📂 Struktur File Proyek

1.  `index.html` - Halaman utama aplikasi (Halaman Login, Ujian Peserta, dan Dasbor Admin).
2.  `style.css` - Desain antarmuka premium, modern, dan sangat responsif untuk HP (kombinasi warna hitam & kuning PPA).
3.  `questions.js` - Bank data 30 soal (8 Deret Angka, 12 Perhitungan Logika, dan 10 Bangun Ruang menggunakan gambar tajam berbasis SVG).
4.  `app.js` - Logika program, timer 45 menit, sistem database ganda, dasbor analitik admin, dan pengurai rekomendasi psikologi otomatis.
5.  `ppd_icon.txt` - File teks berisi kode base64 logo resmi PPD Web Portal agar logo tampil otomatis secara dinamis.
6.  `google_script.gs` - Kode backend Google Sheets untuk database online gratis bersama.

---

## ⚡ Cara Menjalankan Aplikasi secara Lokal (Offline Mode)

1.  Buka folder `d:\ASSESMENT\web_psikotes` pada komputer Anda.
2.  Klik dua kali pada file `index.html`.
3.  Aplikasi akan terbuka secara instan di browser web Anda.
4.  Anda sudah dapat langsung menguji coba ujian (Login NRP) dan masuk ke Portal Admin (menggunakan password default: `adminPPA2026`).
5.  *Catatan:* Pada mode lokal, seluruh hasil ujian akan tersimpan di dalam memori penyimpanan browser perangkat tersebut (`localStorage`).

---

## 🌐 Cara Mengatur Database Online Bersama (Gratis menggunakan Google Sheets)

Agar hasil ujian dari berbagai HP karyawan dapat dikumpulkan langsung ke dalam satu file Excel (Google Sheets) milik Admin secara real-time, ikuti langkah mudah berikut:

### Langkah 1: Siapkan Google Sheets & Google Apps Script
1.  Buka [Google Sheets](https://sheets.google.com) baru pada Google Drive Anda.
2.  Beri nama sheet tersebut (misal: *Database Hasil Ujian GL*).
3.  Pada menu bar atas, klik **Extensions** -> **Apps Script** (Ekstensi -> Apps Script).
4.  Hapus semua kode bawaan yang ada di editor Apps Script, lalu buka file `google_script.gs` dari folder proyek Anda, salin seluruh kodenya, dan tempelkan (*paste*) ke editor Apps Script tersebut.
5.  Klik tombol **Save** (ikon disket) untuk menyimpan proyek.

### Langkah 2: Deploy sebagai Web App
1.  Di pojok kanan atas Apps Script, klik tombol **Deploy** -> **New deployment** (Terapkan -> Penerapan baru).
2.  Klik ikon gerigi (**Select type**) di samping *Configuration*, lalu pilih **Web app**.
3.  Lakukan konfigurasi berikut:
    *   **Description:** *Database Psikotes PPD BA*
    *   **Execute as:** Pilih **Me (email Anda@gmail.com)**
    *   **Who has access:** Pilih **Anyone** (Siapa saja, bahkan tanpa akun Google)
4.  Klik **Deploy** (Terapkan).
5.  *PENTING:* Jika muncul permintaan izin (*Authorization*), klik **Authorize Access**, pilih akun Google Anda, klik **Advanced** (Lanjutan), lalu klik **Go to Untitled project (unsafe)** dan klik **Allow** (Izinkan).
6.  Setelah sukses, Anda akan mendapatkan tautan **Web app URL** yang berakhiran `/exec`. **Salin tautan tersebut**.

### Langkah 3: Hubungkan Aplikasi Web ke Google Sheets
1.  Buka aplikasi web Anda (`index.html`) di browser.
2.  Klik **Portal Admin** di pojok kanan atas layar.
3.  Masukkan password admin: `adminPPA2026` lalu tekan enter.
4.  Pada dasbor admin, klik tombol **Integrasi gSheet** di pojok kanan atas.
5.  Tempelkan tautan Web app URL yang sudah Anda salin tadi ke kolom input, lalu klik **Simpan URL**.
6.  Selesai! Sekarang database online Anda sudah aktif. Setiap kali peserta menyelesaikan ujian dari HP mana pun, hasilnya langsung masuk ke tab **Hasil_Ujian** di Google Sheets Anda, dan dasbor admin akan memperbarui grafik statistiknya secara otomatis.

---

## 🔑 Hak Akses & Fitur Dasbor Admin

*   **Password Portal Admin:** `adminPPA2026`
*   **Reset Ujian per NRP:** Jika ingin memperbolehkan karyawan dengan NRP tertentu mengulang ujian, cari NRP tersebut di kolom pencarian dasbor admin, lalu klik tombol **Reset** merah. Ini akan menghapus riwayat ujian NRP tersebut di browser dan di Google Sheets agar mereka dapat masuk dan mengerjakannya kembali dari awal.
*   **Analisis Psikologis:** Klik tombol **Detail** pada baris peserta di tabel admin untuk melihat detail skor per seksi dan saran pembinaan personal karyawan tersebut.
