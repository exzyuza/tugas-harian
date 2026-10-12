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




