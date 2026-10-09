//langkah 1:tebak dulu,baru cek

//javascript 
// tebakan:13
// hasil asli: 13
// penjelasan: operator perkalian (*) memiliki prioritas lebih tinggi daripada operator penjumlahan (+), sehingga 3 * 2 dihitung terlebih dahulu, menghasilkan 6. Kemudian, 7 + 6 = 13.
console.log(7 + 3 * 2); // 13
// tebakan:20
// hasil asli: 20
// penjelasan: tanda kurung () mengubah urutan eksekusi, sehingga 7 + 3 dihitung terlebih dahulu, menghasilkan 10. Kemudian, 10 * 2 = 20.
console.log((7 + 3) * 2); // 20
// tebakan:2
// hasil asli: 2
// penjelasan: operator modulus (%) menghasilkan sisa dari pembagian. 17 dibagi 5 menghasilkan sisa 2.
console.log(17 % 5); // 2
// tebakan:8
// hasil asli: 8
// penjelasan: operator eksponensial (**) menghitung pangkat. 2 dipangkatkan dengan 3 menghasilkan 8.
console.log(2 ** 3); // 8
// tebakan:true
// hasil asli: true
// penjelasan: operator perbandingan (==) membandingkan nilai, bukan tipe data. 5 sama dengan "5" dalam hal nilai.
console.log(5 == "5"); // true
// tebakan:false
// hasil asli: false
// penjelasan: operator perbandingan (===) membandingkan baik nilai maupun tipe data. 5 adalah number, sedangkan "5" adalah string.
console.log(5 === "5"); // false
// tebakan:false
// hasil asli: false
// penjelasan: operator logika AND (&&) menghasilkan true hanya jika kedua operand bernilai true.
console.log(true && false); // false
// tebakan:true
// hasil asli: true
// penjelasan: operator logika OR (||) menghasilkan true jika minimal satu operand bernilai true.
console.log(true || false); // true
// tebakan:false
// hasil asli: false
// penjelasan: operator logika NOT (!) membalikkan nilai boolean.
console.log(!true); // false
// tebakan:false
// hasil asli: false
// penjelasan: 10 > 5 adalah true, tetapi 3 > 8 adalah false. Karena menggunakan operator AND (&&), hasilnya adalah false.
console.log(10 > 5 && 3 > 8); // false

//langkah 2:perbai 4 kesalahan

//javascript
const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = "51000";
 
let totalPesanan = hargaKopi + hargaTeh * 2; 
// kesalahan: totalPesanan dihitung tanpa memperhatikan prioritas operator. Seharusnya menggunakan tanda kurung untuk memastikan penjumlahan dilakukan terlebih dahulu.
// perbaikan: let totalPesanan = (hargaKopi + hargaTeh) * 2;
// Fix: let totalPesanan = hargaKopi + (hargaTeh * 2); // Perbaikan: Menggunakan tanda kurung untuk memastikan perkalian dilakukan terlebih dahulu.

let uangPas = uangDiterima == totalPesanan;
// kesalahan: perbandingan menggunakan operator ==, yang membandingkan nilai tetapi tidak tipe data. Seharusnya menggunakan operator === untuk membandingkan nilai dan tipe data.
// perbaikan: let uangPas = uangDiterima === totalPesanan;
// Fix: let uangPas = parseInt(uangDiterima) === totalPesanan; // Perbaikan: Mengubah uangDiterima menjadi number sebelum dibandingkan.

let dapatDiskon = sudahMember && totalPesanan > 100000;
// kesalahan: tanda titik dua (:) digunakan di akhir pernyataan, yang tidak valid dalam konteks ini. Seharusnya menggunakan tanda titik koma (;) untuk mengakhiri pernyataan.
// perbaikan: let dapatDiskon = sudahMember && totalPesanan > 100000;
// Fix: let dapatDiskon = sudahMember && totalPesanan > 100000; // Perbaikan: Mengganti tanda titik dua dengan titik koma.

// perbedaan && dan ||
// && (AND) menghasilkan true hanya jika kedua operand bernilai true.
// || (OR) menghasilkan true jika minimal satu operand bernilai true.

//langkah 3: Bikin Kasir Sendiri 
// javascript

const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = "51000";

// FIX 1: Tambahkan tanda kurung agar hargaKopi dan hargaTeh sama-sama dikali 2,
// karena tanpa kurung hanya hargaTeh yang dikali (prioritas operator * lebih tinggi dari +).
// Total 2 kopi + 2 teh. Seharusnya: 51000
let totalPesanan = (hargaKopi + hargaTeh) * 2;

// FIX 2: Konversi uangDiterima (string) ke number dengan Number(),
// lalu bandingkan dengan === agar perbandingan ketat dan aman.
// Uang diterima sama persis dengan total? Seharusnya: true
let uangPas = Number(uangDiterima) === totalPesanan;

// FIX 3: Simpan hasil penambahan ke variabel dengan += ,
// karena "jumlahMember + 1;" hanya menghitung tanpa menyimpan.
// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
jumlahMember += 1;

// FIX 4: Ganti operator && menjadi || karena aturannya "ATAU",
// sehingga cukup salah satu kondisi terpenuhi.
// Dapat diskon jika sudah member ATAU total lebih dari 100000. Seharusnya: true
let dapatDiskon = sudahMember || totalPesanan > 100000;

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);
// Output: 51000 true 6 true 

// JAWABAN 1A: totalPesanan salah karena tidak ada tanda kurung, sehingga hanya
// hargaTeh yang dikali 2 — perbaikannya tambahkan ( ) menjadi (hargaKopi + hargaTeh) * 2.

// JAWABAN 1B: uangPas salah karena membandingkan string dengan number secara longgar
// (==) — perbaikannya konversi dulu ke number: Number(uangDiterima) === totalPesanan.

// JAWABAN 1C: jumlahMember salah karena hanya menghitung "jumlahMember + 1" tanpa
// menyimpan hasilnya — perbaikannya gunakan += menjadi jumlahMember += 1.

// JAWABAN 1D: dapatDiskon salah karena memakai && (DAN) padahal aturannya "ATAU" —
// perbaikannya ganti && menjadi || menjadi sudahMember || totalPesanan > 100000.

// JAWABAN 2:
// Jika uangPas ditulis: uangDiterima === totalPesanan
// hasilnya false karena uangDiterima bertipe STRING ("51000") sedangkan
// totalPesanan bertipe NUMBER (51000). Operator === (strict equality)
// TIDAK melakukan konversi tipe, sehingga tipe yang berbeda langsung
// dianggap tidak sama walaupun nilainya mirip.
//
// Agar hasilnya true, ubah salah satu supaya tipenya sama, contohnya:
//   let uangPas = Number(uangDiterima) === totalPesanan;   // true
// atau langsung ubah deklarasinya tanpa tanda kutip:
//   let uangDiterima = 51000;   // sekarang bertipe number

// JAWABAN 3:
// && (AND / DAN)  -> true HANYA jika SEMUA kondisi bernilai true.
// || (OR / ATAU)  -> true jika MINIMAL SATU kondisi bernilai true.
//
// Contoh pada kode dapatDiskon:
//   Nilai saat ini: sudahMember = true, totalPesanan = 51000.
//   Cek: totalPesanan > 100000  ->  51000 > 100000  ->  false.
//
// Jika pakai && (SALAH):
//   sudahMember && totalPesanan > 100000
//   = true && false
//   = false   <-- padahal dia member, harusnya dapat diskon
//
// Jika pakai || (BENAR):
//   sudahMember || totalPesanan > 100000
//   = true || false
//   = true    <-- benar, karena cukup salah satu terpenuhi
//
// Aturan bisnisnya "member ATAU belanja > 100000", maka operator yang tepat
// adalah || (OR), bukan && (AND).

// Bonus (+5 poin):

// Soal: Ubah 250 menit menjadi "X jam Y menit"

let totalMenit = 250;

// Langkah 1: Cari JUMLAH JAM
// Bagi totalMenit dengan 60 untuk dapat jam (dalam desimal)
// Lalu bulatkan ke bawah dengan Math.floor()
let jam = Math.floor(totalMenit / 60);
// 250 / 60 = 4.1666...  ->  Math.floor(4.1666...) = 4


// Langkah 2: Cari SISA MENIT
// Gunakan operator % (modulus) untuk dapat sisa bagi
let menit = totalMenit % 60;
// 250 % 60 = 10  (karena 250 = 4 × 60 + 10)


// Langkah 3: Cetak hasilnya
console.log(jam + " jam " + menit + " menit");

// Output: 4 jam 10 menit 

// Hasil terminal Git Bash:
// $ node tugasday28zar/tugas_day_28.js
// SyntaxError: Identifier 'hargaKopi' has already been declared
// Node.js v24.11.1




