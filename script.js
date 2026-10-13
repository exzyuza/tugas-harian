// ============================================================
// BAB 7: PERULANGAN (LOOPING) — KODE LENGKAP GABUNGAN
// ============================================================
// Materi: for, while, do...while, break, continue
// Struktur sama, variabel & nilai dimodifikasi
// ============================================================


// ============================================================
// 1. PERULANGAN DENGAN JUMLAH PASTI: for
// ============================================================

console.log("=== 1. FOR LOOP ===");

// --- Contoh 1a: Antrean (6 iterasi) ---
console.log("\n-- 1a. Antrean --");
for (let n = 1; n <= 6; n++) {
  console.log("Antrean ke-" + n);
}

// --- Contoh 1b: Menghitung mundur (dari 9) ---
console.log("\n-- 1b. Hitung Mundur --");
for (let n = 9; n >= 1; n--) {
  console.log(n);
}
console.log("Gas!");

// --- Contoh 1c: Menjumlahkan angka 1 sampai 12 ---
console.log("\n-- 1c. Penjumlahan 1-12 --");
let akumulasi = 0;

for (let n = 1; n <= 12; n++) {
  akumulasi += n;
}

console.log("Akumulasi:", akumulasi); // Output: Akumulasi: 78

// --- Contoh 1d: Mengakses elemen array (6 buah) ---
console.log("\n-- 1d. Array Sayur --");
const sayur = ["Bayam", "Wortel", "Brokoli", "Tomat", "Kangkung", "Sawi"];

for (let n = 0; n < sayur.length; n++) {
  console.log(n + 1 + ".", sayur[n]);
}


// ============================================================
// 2. PERULANGAN BERSYARAT: while
// ============================================================

console.log("\n=== 2. WHILE LOOP ===");

// --- Contoh 2a: Saldo (mulai Rp 30.000, potong Rp 6.000) ---
console.log("\n-- 2a. Saldo --");
let tabungan = 30000;

while (tabungan > 0) {
  console.log("Tabungan saat ini: Rp", tabungan);
  tabungan -= 6000;
}
console.log("Tabungan habis.");

// --- Contoh 2b: Infinite loop (JANGAN dijalankan) ---
// let y = 1;
// while (y > 0) {
//   console.log(y);
//   // y tidak pernah berubah → loop tidak berhenti
// }

// --- Contoh 2c: Menebak angka (rentang 1-30) ---
console.log("\n-- 2c. Tebak Angka --");
let kodeRahasia = 21;
let dugaan = 0;
let langkah = 0;

while (dugaan !== kodeRahasia) {
  langkah++;
  dugaan = Math.floor(Math.random() * 30) + 1; // Angka acak 1-30
  console.log("Langkah ke-" + langkah + ": menebak angka", dugaan);
}

console.log(
  "Berhasil menebak angka",
  kodeRahasia,
  "dalam",
  langkah,
  "langkah.",
);


// ============================================================
// 3. EKSEKUSI MINIMAL SATU KALI: do...while
// ============================================================

console.log("\n=== 3. DO...WHILE ===");

// --- Contoh 3a: Hitung mundur dari 6 ---
console.log("\n-- 3a. do...while dari 6 --");
let bilangan = 6;

do {
  console.log("Nilai bilangan:", bilangan);
  bilangan--;
} while (bilangan > 0);

// --- Contoh 3b: Perbedaan while vs do...while ---
console.log("\n-- 3b. while vs do...while --");

// while — kondisi diperiksa SEBELUM eksekusi
let p = 0;
while (p > 3) {
  console.log("while dijalankan"); // Tidak pernah dieksekusi
}

// do...while — blok dijalankan SEBELUM kondisi diperiksa
let q = 0;
do {
  console.log("do...while dijalankan"); // Dieksekusi satu kali
} while (q > 3);
// Output: do...while dijalankan

// --- Contoh 3c: Konfirmasi pengguna ---
console.log("\n-- 3c. Konfirmasi Pengguna --");
// Catatan: prompt() hanya berjalan di browser, bukan di Node.js
// let jawaban;
// do {
//   jawaban = prompt("Ketik 'lanjut' untuk melanjutkan:");
// } while (jawaban !== "lanjut");
// console.log("Pengguna telah mengkonfirmasi. Melanjutkan proses...");


// ============================================================
// 4. MENGhentikan PERULANGAN: break
// ============================================================

console.log("\n=== 4. BREAK ===");

// --- Contoh 4a: Target di posisi ke-8 dari maksimal 50 ---
console.log("\n-- 4a. Pencarian Target --");
for (let n = 1; n <= 50; n++) {
  if (n === 8) {
    console.log(
      "Target ditemukan pada posisi ke-" + n + ". Pencarian dihentikan.",
    );
    break;
  }
  console.log("Memeriksa posisi ke-" + n);
}


// ============================================================
// 5. MELEWATI ITERASI TERTENTU: continue
// ============================================================

console.log("\n=== 5. CONTINUE ===");

// --- Contoh 5a: Cetak angka ganjil 1-20 ---
console.log("\n-- 5a. Angka Ganjil 1-20 --");
for (let n = 1; n <= 20; n++) {
  if (n % 2 === 0) {
    continue; // Lewati angka genap
  }
  console.log(n);
}
// Output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// --- Contoh 5b: Memfilter data array (7 nilai) ---
console.log("\n-- 5b. Filter Nilai Negatif --");
const skor = [90, -4, 77, -12, 65, 82, 50];

console.log("Skor valid:");
for (let n = 0; n < skor.length; n++) {
  if (skor[n] < 0) {
    continue; // Lewati nilai negatif
  }
  console.log("-", skor[n]);
}
// Output:
// Skor valid:
// - 90
// - 77
// - 65
// - 82
// - 50


// ============================================================
// 6. SIMULASI LENGKAP — KOMBINASI LOOPING (10 data)
// ============================================================

console.log("\n=== 6. SIMULASI LENGKAP ===");

const kumpulanSkor = [88, 40, 95, -6, 70, 55, 100, 5, 62, 120];
let totalSkor = 0;
let sah = 0;
let tidakSah = 0;

for (let n = 0; n < kumpulanSkor.length; n++) {
  const itemSkor = kumpulanSkor[n];

  // Lewati nilai yang tidak valid (di luar rentang 0–100)
  if (itemSkor < 0 || itemSkor > 100) {
    console.log("Nilai tidak valid dilewati:", itemSkor);
    tidakSah++;
    continue;
  }

  totalSkor += itemSkor;
  sah++;
}

const rerata = totalSkor / sah;

console.log("---");
console.log("Total data     :", kumpulanSkor.length);
console.log("Data valid     :", sah);
console.log("Data tidak valid:", tidakSah);
console.log("Rata-rata      :", rerata.toFixed(2));

// Output:
// Nilai tidak valid dilewati: -6
// Nilai tidak valid dilewati: 120
// ---
// Total data     : 10
// Data valid     : 8
// Data tidak valid: 2
// Rata-rata      : 71.88


// ============================================================
// SELESAI
// ============================================================

console.log("\n=== PROGRAM SELESAI ===");