//langkah 1 tebak dulu,baru dicek===================================================================================================================
//langkah A===================================================================================================================
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

//langkah B===================================================================================================================
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

//langkah C====================================================================================================================
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

//========langkah 2 perbaiki 5 kesalahan====================================================================================================================

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// Diskon berdasarkan total belanja. Seharusnya: 8000 (diskon 10%)
// FIX: urutan kondisi dibalik — cek nilai terbesar dulu, karena if/else if dievaluasi berurutan
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// Potongan member. "gold" 5000, "silver" 2000, lainnya 0. Seharusnya untuk "gold": 5000
// FIX: typo "jenismember" → "jenisMember" (case-sensitive)
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break; // FIX: tambah break agar tidak fall-through ke "silver"
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// Voucher. Seharusnya tercetak: Voucher tidak dipakai
// FIX: operator "=" (assignment) → "===" (perbandingan)
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir. Seharusnya: 67000
let totalAkhir = totalBelanja - diskon - potonganMember;

// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
// FIX: ">" → ">=" agar uang pas (sama dengan) tetap dianggap Lunas
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

//==output akhir===
// 8000 5000 67000
// Voucher tidak dipakai
// Status: Lunas

//Perbaikan Kode — 5 Kesalahan

```javascript
let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// Diskon berdasarkan total belanja. Seharusnya: 8000 (diskon 10%)
// FIX: urutan kondisi dibalik — cek nilai terbesar dulu, karena if/else if dievaluasi berurutan
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// Potongan member. "gold" 5000, "silver" 2000, lainnya 0. Seharusnya untuk "gold": 5000
// FIX: typo "jenismember" → "jenisMember" (case-sensitive)
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break; // FIX: tambah break agar tidak fall-through ke "silver"
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// Voucher. Seharusnya tercetak: Voucher tidak dipakai
// FIX: operator "=" (assignment) → "===" (perbandingan)
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir. Seharusnya: 67000
let totalAkhir = totalBelanja - diskon - potonganMember;

// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
// FIX: ">" → ">=" agar uang pas (sama dengan) tetap dianggap Lunas
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);
```

Output:

```
Voucher tidak dipakai
Status: Lunas
8000 5000 67000
```



//Jawaban Pertanyaan

//1. Lima kesalahan dalam satu kalimat singkat

//1. Urutan if/else if diskon terbalik — kondisi >= 25000 dicek lebih dulu sehingga selalu menang; perbaikannya urutkan dari >= 100000 → >= 50000 → >= 25000.
//2. Typo jenismember (huruf kecil semua) padahal variabelnya jenisMember (case-sensitive); perbaikannya tulis jenisMember.
//3. case "gold" tidak punya break — eksekusi jatuh ke case "silver" sehingga nilainya tertimpa; perbaikannya tambahkan break;.
//4. if (kodeVoucher = "") memakai = (assignment) bukan perbandingan; perbaikannya ganti jadi ===.
//5. if (uangBayar > totalAkhir) memakai > padahal uang pas harusnya Lunas; perbaikannya ganti jadi >=.

//2. Mana yang error, mana yang tidak error tapi hasilnya salah?

//Kesalahan Jenis
//1. Urutan if/else if ❌ Tidak error, tapi hasil salah (diskon jadi 4000 bukan 8000)
//2. Typo jenismember ✅ ERROR — ReferenceError: jenismember is not defined
//3. Tidak ada break di case "gold" ❌ Tidak error, tapi hasil salah (potongan jadi 2000 bukan 5000)
//4. = bukan === di if ❌ Tidak error, tapi hasil salah (sekaligus merusak nilai kodeVoucher jadi "")
//5. > bukan >= ❌ Tidak error, tapi hasil salah (tercetak "Kurang" bukan "Lunas")

//Jadi hanya kesalahan #2 yang benar-benar melempar error dan menghentikan program. Sisanya "diam-diam salah" — lebih berbahaya karena program tetap jalan tapi hasilnya keliru.

//3. Perbedaan =, ==, dan === pada if (kodeVoucher = "")

//Operator Nama Fungsi
//= Assignment Mengisi nilai ke variabel
//== Loose equality Membandingkan nilai, dengan konversi tipe (type coercion)
//=== Strict equality Membandingkan nilai dan tipe sekaligus, tanpa konversi

//Pada if (kodeVoucher = ""):

//· kodeVoucher = "" adalah assignment — variabel diisi "", lalu nilai hasil assignment ("") dipakai sebagai kondisi if.
//· "" adalah falsy, jadi kondisi if bernilai false → masuk ke else.
//· Kenapa tidak error? Karena secara sintaks ini valid. JavaScript mengizinkan assignment di dalam ekspresi. Yang terjadi: kodeVoucher malah ditimpa jadi "" (kalau sebelumnya ada isinya, jadi hilang!) dan kondisi salah ambil cabang. Ini yang disebut bug "silent".

//Yang benar:

//```javascript
//if (kodeVoucher === "") { ... }   // ✅ strict, bandingkan string kosong
//if (kodeVoucher == "")  { ... }   // ⚠️ work, tapi lebih longgar (mis. 0 == "" → true)
//if (kodeVoucher = "")   { ... }   // ❌ assignment, bukan perbandingan
//```

//Tips: biasakan pakai === agar aman dari type coercion dan terhindar dari salah tulis = vs ==.

//===langkah 3: bikin kasir sendiri====================================================================================================================

// =====================================================
// PROGRAM KASIR — Langkah 3
// =====================================================

// Data awal pelanggan
const kasirNamaPelanggan = "Rina";
let kasirTotalBelanja    = 90000;
let kasirHari            = "sabtu";
let kasirJenisMember     = "silver";
let kasirKodeVoucher     = "SENJA10";
let kasirUangBayar       = 100000;

//// ===Skenario 1===
// nama = "Rina", belanja = 90000, hari = "sabtu",
// member = "silver", voucher = "SENJA10", uang = 100000
//
// Perhitungan:
//   Diskon 10%   = 9000
//   Member silver = 2000
//   Promo sabtu   = 5000
//   Voucher       = 2000
//   Total akhir   = 90000 - 9000 - 2000 - 5000 - 2000 = 72000
//   Uang 100000 > 72000 → Lunas (kembalian 28000)
//
// Hasil:
// Pelanggan: Rina
// Hari: sabtu
// Voucher dipakai: SENJA10
// Total akhir: Rp72000
// Status: Lunas, kembalian: Rp28000

//===HASIL ASLI SKENARIO 1===
//===== STRUK KASIR =====
//Pelanggan: Rina
//Hari: sabtu
//Total belanja: Rp90000
//Diskon: Rp9000
//Potongan member (silver): Rp2000
//Promo hari: Rp5000
//Voucher dipakai: SENJA10
//Potongan voucher: Rp2000
//-----------------------
//Total akhir: Rp72000
//Uang bayar: Rp100000
//Status: Lunas, kembalian: Rp28000
//=======================

//===SKENARIO 2===
// Skenario 2:
// nama = "", belanja = 150000, hari = "jumat",
// member = "gold", voucher = "SENJA10", uang = 130000
//
// Perhitungan:
//   Diskon 15%   = 22500
//   Member gold  = 5000
//   Promo jumat  = 3000
//   Voucher      = 2000
//   Total akhir  = 150000 - 22500 - 5000 - 3000 - 2000 = 117500
//
// Uang pas: set uang = 117500 agar status "Lunas (uang pas)"
//
// Hasil:
// Nama pelanggan belum diisi
// Hari: jumat
// Voucher dipakai: SENJA10
// Total akhir: Rp117500
// Status: Lunas (uang pas)

//const kasirNamaPelanggan = "";      // → nama kosong (uji truthy/falsy)
//let kasirTotalBelanja    = 150000;
//let kasirHari            = "jumat";
//let kasirJenisMember     = "gold";
//let kasirKodeVoucher     = "SENJA10";
//let kasirUangBayar       = 117500;   // sengaja pas

//===HASIL AKHIR SKENARIO 2===
//===== STRUK KASIR =====
//Nama pelanggan belum diisi
//Hari: jumat
//Total belanja: Rp150000
//Diskon: Rp22500
//Potongan member (gold): Rp5000
//Promo hari: Rp3000
//Voucher dipakai: SENJA10
//Potongan voucher: Rp2000
//-----------------------
//Total akhir: Rp117500
//Uang bayar: Rp117500
//Status: Lunas (uang pas)
//=======================

//===SKENARIO 3===
// nama = "Budi", belanja = 10000, hari = "senin",
// member = "bronze", voucher = "", uang = 5000
//
// Perhitungan:
//   Diskon 0%     = 0
//   Member bronze = 0
//   Promo senin   = 0 (default)
//   Voucher kosong = 0
//   Total akhir   = 10000
//   Uang 5000 < 10000 → Kurang Rp5000
//
// Hasil:
// Pelanggan: Budi
// Hari: senin
// Voucher tidak dipakai
// Total akhir: Rp10000
// Status: Kurang: Rp5000

//const kasirNamaPelanggan = "Budi";
//let kasirTotalBelanja    = 10000;
//let kasirHari            = "senin";
//let kasirJenisMember     = "bronze";
//let kasirKodeVoucher     = "";      // → voucher kosong (uji truthy/falsy)
//let kasirUangBayar       = 5000;

//===HASIL AKHIR SKENARIO 3===
//===== STRUK KASIR =====
//Pelanggan: Budi
//Hari: senin
//Total belanja: Rp10000
//Diskon: Rp0
//Potongan member (bronze): Rp0
//Promo hari: Rp0
//Voucher tidak dipakai
//Potongan voucher: Rp0
//-----------------------
//Total akhir: Rp10000
//Uang bayar: Rp5000
//Status: Kurang: Rp5000
//=======================
//=====================================================================================================


// --- 1. Diskon berdasarkan total belanja (if...else if...else) ---
let kasirDiskon;
if (kasirTotalBelanja >= 100000) {
  kasirDiskon = kasirTotalBelanja * 0.15;
} else if (kasirTotalBelanja >= 50000) {
  kasirDiskon = kasirTotalBelanja * 0.10;
} else if (kasirTotalBelanja >= 25000) {
  kasirDiskon = kasirTotalBelanja * 0.05;
} else {
  kasirDiskon = 0;
}

// --- 2. Potongan member (switch) ---
let kasirPotonganMember;
switch (kasirJenisMember) {
  case "gold":
    kasirPotonganMember = 5000;
    break;
  case "silver":
    kasirPotonganMember = 2000;
    break;
  default:
    kasirPotonganMember = 0;
}

// --- 3. Promo hari (switch, sabtu & minggu digabung tanpa break di antaranya) ---
let kasirPromoHari;
switch (kasirHari) {
  case "jumat":
    kasirPromoHari = 3000;
    break;
  case "sabtu":
  case "minggu":           // sengaja tanpa break — fall-through ke minggu
    kasirPromoHari = 5000;
    break;
  default:
    kasirPromoHari = 0;
}

// --- 4. Validasi nama (Truthy/Falsy) ---
let kasirStatusNama;
if (kasirNamaPelanggan) {
  kasirStatusNama = `Pelanggan: ${kasirNamaPelanggan}`;
} else {
  kasirStatusNama = "Nama pelanggan belum diisi";
}

// --- 5. Voucher (Truthy/Falsy) ---
let kasirPotonganVoucher;
let kasirStatusVoucher;
if (kasirKodeVoucher) {
  kasirPotonganVoucher = 2000;
  kasirStatusVoucher = `Voucher dipakai: ${kasirKodeVoucher}`;
} else {
  kasirPotonganVoucher = 0;
  kasirStatusVoucher = "Voucher tidak dipakai";
}

// --- 6. Total akhir ---
let kasirTotalAkhir =
  kasirTotalBelanja -
  kasirDiskon -
  kasirPotonganMember -
  kasirPromoHari -
  kasirPotonganVoucher;

// --- 7. Status pembayaran ---
let kasirStatusBayar;
if (kasirUangBayar > kasirTotalAkhir) {
  kasirStatusBayar = `Lunas, kembalian: Rp${kasirUangBayar - kasirTotalAkhir}`;
} else if (kasirUangBayar === kasirTotalAkhir) {
  kasirStatusBayar = "Lunas (uang pas)";
} else {
  kasirStatusBayar = `Kurang: Rp${kasirTotalAkhir - kasirUangBayar}`;
}

// --- 8. Cetak hasil ---
console.log("===== STRUK KASIR =====");
console.log(kasirStatusNama);
console.log(`Hari: ${kasirHari}`);
console.log(`Total belanja: Rp${kasirTotalBelanja}`);
console.log(`Diskon: Rp${kasirDiskon}`);
console.log(`Potongan member (${kasirJenisMember}): Rp${kasirPotonganMember}`);
console.log(`Promo hari: Rp${kasirPromoHari}`);
console.log(kasirStatusVoucher);
console.log(`Potongan voucher: Rp${kasirPotonganVoucher}`);
console.log("-----------------------");
console.log(`Total akhir: Rp${kasirTotalAkhir}`);
console.log(`Uang bayar: Rp${kasirUangBayar}`);
console.log(`Status: ${kasirStatusBayar}`);
console.log("=======================");

//===BONUS 5 POINT===
// =====================================================
// JAWABAN PERTANYAAN — Langkah 3
// =====================================================

// 1. Kenapa urutan `else if` pada diskon dimulai dari angka terbesar?
//    Apa yang terjadi jika dibalik?
//
//    Karena `if...else if` dievaluasi BERURUTAN dari atas, dan yang pertama
//    bernilai true langsung diambil — sisanya dilewati. Kalau dimulai dari
//    angka terkecil (>= 25000), maka belanja 120000 akan "nyangkut" di
//    kondisi >= 25000 (dapat 5%) padahal seharusnya dapat 15%.
//    Jadi urutkan dari kondisi PALING SPESIFIK (>= 100000) ke paling umum.

// 2. Kenapa promo hari lebih cocok memakai `switch`, bukan `if...else if`?
//
//    Karena variabelnya membandingkan SATU nilai (hari) dengan banyak
//    KEMUNGKINAN NILAI TETAP (jumat/sabtu/minggu). `switch` lebih ringkas,
//    lebih mudah dibaca, dan otomatis mendukung fall-through untuk
//    case-case yang berbagi aksi yang sama (sabtu + minggu).
//    `if...else if` lebih cocok untuk rentang/ekspresi logika (>=, <=, &&).

// 3. Pada `switch` promo hari, di mana kamu sengaja tidak menulis `break`?
//    Kenapa hasilnya tetap benar?
//
//    Di antara `case "sabtu":` dan `case "minggu":`. `case "sabtu"` sengaja
//    dibiarkan tanpa statement dan tanpa break, sehingga eksekusi "jatuh"
//    ke `case "minggu"` yang berisi `kasirPromoHari = 5000; break;`.
//    Hasilnya tetap benar karena kedua hari memang sama-sama dapat 5000,
//    jadi jatuh ke satu blok yang sama tidak menimbulkan efek samping.

// 4. Sebutkan 3 nilai yang membuat `if (namaPelanggan)` bernilai `false`.
//
//    - ""          (string kosong)
//    - null        (nilai null)
//    - undefined   (variabel belum diisi)
//    Alternatif lain: 0, -0, NaN, 0n, false.

// 5. Jika `jumlahBeli = -1`, apa hasil `if (jumlahBeli)` dan
//    `if (jumlahBeli > 0)`? Kenapa berbeda?
//
//    if (jumlahBeli)      → TRUE  → masuk blok
//        karena -1 adalah angka non-nol → truthy.
//    if (jumlahBeli > 0)  → FALSE → tidak masuk
//        karena -1 tidak lebih besar dari 0.
//
//    Bedanya: `if (jumlahBeli)` hanya menguji "truthy/falsy" (angka non-nol
//    dianggap benar), sedangkan `jumlahBeli > 0` menguji perbandingan nilai
//    secara nyata. Untuk validasi "harus positif", pakai `> 0`.

