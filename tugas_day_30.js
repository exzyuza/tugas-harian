//langkah 1===================================================================================================================
//===TEBAKAN OUTPUT===
// 2: masuk
// 4: masuk
// 6: masuk
if (0) {
    console.log("1: masuk");
}
if ("0") {
    console.log("2: masuk");
}
if ("") {
    console.log("3: masuk");
}
if ([]) {
    console.log("4: masuk");
}
if (null) {
    console.log("5: masuk");
}
if (-1) {
    console.log("6: masuk");
}
//===HASIL AKHIR===
// 2: masuk
// 4: masuk
// 6: masuk

//langkah 2===================================================================================================================
//===TEBAKAN OUTPUT===
// Diskon 5%
let belanja = 120000;

if (belanja >= 25000) {
    console.log("Diskon 5%");
} else if (belanja >= 50000) {
    console.log("Diskon 10%");
} else if (belanja >= 100000) {
    console.log("Diskon 15%");
} else {
    console.log("Tidak ada diskon");
}
//===HASIL AKHIR===
// Diskon 5%

//langkah 3====================================================================================================================
//===TEBAKAN OUTPUT===
// Promo Akhir Pekan
// Promo Keluarga
let hari = "sabtu";

switch (hari) {
    case "jumat":
        console.log("Promo Jumat Berkah");
    case "sabtu":
        console.log("Promo Akhir Pekan");
    case "minggu":
        console.log("Promo Keluarga");
        break;
    default:
        console.log("Tidak ada promo");
}
//===HASIL AKHIR===
// Promo Akhir Pekan
// Promo Keluarga

//===jawaban pertanyaan===
// 1. Pada Potongan A, kenapa `"0"` dan `[]` tetap masuk ke dalam `if`, padahal terlihat seperti kosong?
// Jawaban: Karena dalam JavaScript, string "0" dan array kosong [] dianggap sebagai nilai truthy. Nilai truthy adalah nilai yang dianggap benar dalam konteks boolean, 
// sehingga kondisi if akan terpenuhi dan blok kode di dalamnya akan dieksekusi.

//2. Pada Potongan B, `belanja` bernilai 120000 tetapi hasilnya bukan "Diskon 15%". Kenapa? Bagaimana cara memperbaikinya?
// Jawaban: Pada Potongan B, kondisi if-else if dievaluasi secara berurutan. Ketika `belanja` bernilai 120000, kondisi pertama `belanja >= 25000` terpenuhi,
//  sehingga blok kode untuk "Diskon 5%" dieksekusi dan blok kode lainnya tidak diperiksa.
// Untuk memperbaikinya, urutan kondisi harus diubah sehingga kondisi yang lebih besar diperiksa terlebih dahulu. Berikut adalah perbaikan kodenya:

//3. Pada Potongan C, kenapa yang tercetak dua baris? Apa yang harus ditambahkan agar hanya satu baris yang tercetak?
// Jawaban: Pada Potongan C, tidak ada pernyataan `break` setelah setiap case, sehingga eksekusi akan terus berlanjut ke case berikutnya setelah menemukan case yang cocok.
// Untuk memastikan hanya satu baris yang tercetak, tambahkan pernyataan `break` setelah setiap case. Berikut adalah perbaikan kodenya:

