/* CODE GOOGLE APPS SCRIPT BACKEND (DATABASE SHARE GRATIS) */
/* Pasang skrip ini di Extension -> Apps Script pada Google Sheets Anda */

function doGet(e) {
  var sheet = getOrCreateSheet();
  var range = sheet.getDataRange();
  var data = range.getValues();
  var displayData = range.getDisplayValues();
  var records = [];
  
  // Baca data baris demi baris (abaikan baris header)
  for (var i = 1; i < data.length; i++) {
    records.push({
      nrp: displayData[i][0],
      date: formatDate(data[i][1]),
      score: parseInt(data[i][2]),
      total: parseInt(data[i][3]),
      duration: displayData[i][4], // Ambil teks tampilan langsung dari kolom E (misal: "0:39:27" atau "46:58:00")
      insight: displayData[i][5],
      level: displayData[i][6] ? parseInt(displayData[i][6]) : 2, // Kolom F (Level: 1 atau 2)
      disc: displayData[i][7] || '-', // Kolom G (Profil DISC)
      mostLeast: displayData[i][8] || '-' // Kolom H (Profil Most & Least)
    });
  }
  
  // Kembalikan data dalam format JSON dengan CORS enabled
  return ContentService.createTextOutput(JSON.stringify(records))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var params = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet();
    
    if (params.action === 'insert') {
      // Append data baru
      sheet.appendRow([
        params.nrp,
        params.date,
        params.score,
        params.total,
        params.duration,
        params.insight,
        params.level || 2,
        params.disc || '-',
        params.mostLeast || '-'
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Data berhasil disimpan!' }))
        .setMimeType(ContentService.MimeType.JSON);
    } else if (params.action === 'delete') {
      // Reset/Hapus data berdasarkan NRP dan Tanggal
      var data = sheet.getDataRange().getValues();
      var deleted = false;
      
      // Cari baris yang cocok dari bawah ke atas agar indeks baris tidak bergeser saat dihapus
      for (var i = data.length - 1; i >= 1; i--) {
        if (data[i][0] === params.nrp && formatDate(data[i][1]) === params.date) {
          sheet.deleteRow(i + 1); // Indeks baris di GAS dimulai dari 1
          deleted = true;
        }
      }
      
      return ContentService.createTextOutput(JSON.stringify({ status: deleted ? 'success' : 'not_found', message: deleted ? 'Data berhasil dihapus!' : 'Data tidak ditemukan.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = "Hasil_Ujian";
  var sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    // Tulis Header
    sheet.appendRow([
      "NRP Karyawan",
      "Tanggal Ujian",
      "Jumlah Benar",
      "Total Soal",
      "Durasi Pengoperasian",
      "Analisis & Saran Evaluasi",
      "Level Tes",
      "Profil DISC",
      "Profil Most & Least"
    ]);
    // Format Header agar rapi
    sheet.getRange("A1:I1").setFontWeight("bold").setBackground("#f3f4f6");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function formatDate(dateVal) {
  if (dateVal instanceof Date) {
    var yr = dateVal.getFullYear();
    var mo = String(dateVal.getMonth() + 1).padStart(2, '0');
    var dy = String(dateVal.getDate()).padStart(2, '0');
    var hr = String(dateVal.getHours()).padStart(2, '0');
    var min = String(dateVal.getMinutes()).padStart(2, '0');
    return yr + '-' + mo + '-' + dy + ' ' + hr + ':' + min;
  }
  return String(dateVal);
}
