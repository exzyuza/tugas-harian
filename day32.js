//===============================================
//=== LANGKAH 1 ,TEBAK DULU,BRU CEK ===>>>>>
/* ============================================================

   ============================================================ */


/* ------------------------------------------------------------
   POTONGAN A — ARRAY METHODS
   ------------------------------------------------------------ */

let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");       // tambah di BELAKANG   → ubah asli
menu.unshift("Air");    // tambah di DEPAN      → ubah asli
menu.pop();             // buang BELAKANG       → ubah asli
menu.shift();           // buang DEPAN          → ubah asli
menu.splice(1, 1);      // buang 1 item dari index 1 → ubah asli
let irisan = menu.slice(1, 3); // SALIN index 1–2 → asli TIDAK berubah

// HASIL ASLI:
// menu   = [ 'Kopi', 'Roti', 'Susu' ]
// irisan = [ 'Roti', 'Susu' ]
//
// CATATAN:
// - splice MENGUBAH array asli (seperti mencabut halaman buku).
// - slice MENYALIN ke array baru (seperti memfotokopi, asli utuh).
//
// URUTAN LENGKAP:
// Awal            : [Kopi, Teh, Roti, Susu]
// + push Jus      : [Kopi, Teh, Roti, Susu, Jus]
// + unshift Air   : [Air, Kopi, Teh, Roti, Susu, Jus]
// + pop  (Jus)    : [Air, Kopi, Teh, Roti, Susu]
// + shift(Air)    : [Kopi, Teh, Roti, Susu]
// + splice(1,1)   : [Kopi, Roti, Susu]      ← "Teh" yang dibuang
// + slice(1,3)    : [Roti, Susu]            ← array baru


/* ------------------------------------------------------------
   POTONGAN B — FUNCTION RETURN
   ------------------------------------------------------------ */

function tambah(a, b) {
  return a + b;         //  PUNYA return → ada nilai balik
}

function cetakTambah(a, b) {
  console.log(a + b);   //  TIDAK ada return → nilai balik undefined
}

let x = tambah(2, 3);        // x = 5
let y = cetakTambah(2, 3);   // cetak "5" di layar, tapi y = undefined

console.log(x);   // 5
console.log(y);   // undefined

// HASIL ASLI:
// 5
// 5
// undefined
//
// ANALOGI:
// - tambah       = ngasih HADIAH (return), hasilnya bisa disimpan.
// - cetakTambah  = cuma NGOMONG di layar, gak ngasih hadiah.


/* ------------------------------------------------------------
   POTONGAN C — DEFAULT PARAMETER & RETURN SEBAGAI TOMBOL KELUAR
   ------------------------------------------------------------ */

// Parameter `persen = 10` → NILAI CADANGAN kalau tidak diisi
const hitungDiskonPersen = (harga, persen = 10) =>
  harga - (harga * persen) / 100;

console.log(hitungDiskonPersen(50000, 20));  // 40000 (diskon 20%)
console.log(hitungDiskonPersen(50000));      // 45000 (pakai default 10%)

function cekAngka(n) {
  if (n < 0) {
    return "negatif";                            // ← TOMBOL KELUAR
    console.log("Baris ini muncul atau tidak?"); // ← MATI, tidak jalan
  }
  return "bukan negatif";
}

console.log(cekAngka(-5));   // negatif
console.log(cekAngka(5));    // bukan negatif

// HASIL ASLI:
// 40000
// 45000
// negatif
// bukan negatif
// (tidak ada "Baris ini muncul atau tidak?")
//
// CATATAN:
// - Default parameter → nilai cadangan kalau argumen tidak dikirim.
// - `return` = tombol keluar darurat; kode setelahnya unreachable.


/* ------------------------------------------------------------
   JAWABAN PERTANYAAN (dalam bentuk komentar)
   ------------------------------------------------------------ */

/*
1. Kenapa `menu` dan `irisan` berbeda?
   → Karena splice UBAH array asli, sedangkan slice SALIN ke array baru.
     splice → seperti mencabut halaman buku (buku berubah).
     slice  → seperti memfotokopi halaman (buku asli tetap utuh).

2. Beda `tambah` dan `cetakTambah`? Kenapa `y` undefined?
   → `tambah` pakai `return` → ada nilai balik (bisa disimpan).
     `cetakTambah` tidak pakai `return` → JS otomatis mengembalikan
     `undefined`. Jadi walau "5" tampil di layar, `y` tetap undefined.

3. Kenapa hitungDiskonPersen(50000) tetap jalan?
   Apakah console.log setelah return tercetak?
   → Karena parameter `persen` punya DEFAULT = 10, dipakai saat
     argumen kedua tidak dikirim → hasil 45000.
     Baris console.log setelah `return` TIDAK tercetak, karena
     `return` langsung menghentikan fungsi (unreachable code).
*/


/* ============================================================
   RINGKASAN CEPAT (TABEL ANALOGI)
   ------------------------------------------------------------
   | Konsep                              | Analogi               |
   |-------------------------------------|-----------------------|
   | push/pop/shift/unshift/splice       | MENGUBAH array asli   |
   | slice/map/filter/concat             | SALIN, asli tetap     |
   | Fungsi dengan return                | Ngasih hadiah         |
   | Fungsi tanpa return                 | Cuma ngomong          |
   | Default parameter (persen = 10)     | Nilai cadangan        |
   | return di tengah fungsi             | Tombol keluar darurat |
   ============================================================ */


   // === LANGKAH 2 PERBAAIKI 7 KESALAHAN ===>>>>>>

   // ============================================================
 //============================================================

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// FIX 1: unshift menambah di AWAL array.
//        Seharusnya push() untuk menambah di AKHIR.
daftarBelanja.push("Susu");

// FIX 2: slice() hanya menyalin potongan, TIDAK mengubah array asli.
//        Seharusnya splice() untuk benar-benar menghapus elemen.
daftarBelanja.splice(1, 1);

// FIX 3: indexOf() mengembalikan INDEKS (angka).
//        Seharusnya includes() untuk mendapat boolean true/false.
let adaRoti = daftarBelanja.includes("Roti");

// FIX 4: Indeks terakhir array adalah length - 1, bukan length.
let terakhir = daftarBelanja[daftarBelanja.length - 1];

// FIX 5: Function declaration tanpa `return` menghasilkan undefined.
//        Seharusnya tambahkan `return`.
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100;
}

// FIX 6: Arrow function dengan BLOK { } butuh `return` eksplisit.
//        (Implicit return hanya berlaku jika body berupa ekspresi tunggal tanpa { }).
const hitungPajak = (subtotal) => {
  return subtotal * 0.11;
};

// FIX 7: `const` tidak bisa diakses sebelum deklarasinya (temporal dead zone).
//        Seharusnya deklarasi dipindah KE ATAS sebelum dipanggil.
const hitungTotal = (subtotal, pajak) => subtotal + pajak;

// ============================================================
// OUTPUT
// ============================================================

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));
console.log(hitungTotal(80000, 8800));

/*
Output yang diharapkan:
[ 'Kopi', 'Roti', 'Susu' ] true Susu
80000
8800
88800
*/

// ============================================================
// JAWABAN PERTANYAAN
// ============================================================

/*
------------------------------------------------------------
1. TUJUH KESALAHAN (satu kalimat singkat masing-masing)
------------------------------------------------------------
1. unshift("Susu")       → Menambah di awal, seharusnya push("Susu") agar di akhir.
2. slice(1, 1)           → Tidak mengubah array asli, seharusnya splice(1, 1) untuk hapus.
3. indexOf("Roti")       → Mengembalikan indeks (angka), seharusnya includes() untuk boolean.
4. arr[arr.length]       → Indeks melewati batas, seharusnya arr[arr.length - 1].
5. hitungDiskon          → Tidak ada `return`, seharusnya tambahkan `return`.
6. hitungPajak           → Tidak ada `return`, seharusnya tambahkan `return`.
7. hitungTotal           → Dipanggil sebelum `const` dideklarasikan, seharusnya deklarasi dinaikkan.

------------------------------------------------------------
2. ERROR vs HASIL SALAH
------------------------------------------------------------
- ERROR (ReferenceError):
  #7 hitungTotal → "Cannot access 'hitungTotal' before initialization"
  (const tidak di-hoist seperti var; masuk temporal dead zone.)

- TIDAK ERROR tapi HASIL SALAH:
  #1 unshift    → "Susu" muncul di depan, bukan di akhir.
  #2 slice      → "Teh" tidak terhapus, array tetap 3 elemen.
  #3 indexOf    → Hasil `2` (angka), bukan `true` (boolean).
  #4 length     → Hasil `undefined`, bukan "Susu".
  #5 hitungDiskon → Hasil `undefined`, bukan 80000.
  #6 hitungPajak  → Hasil `undefined`, bukan 8800.

------------------------------------------------------------
3. KENAPA hitungDiskon & hitungPajak SAMA-SAMA undefined?
------------------------------------------------------------
Karena di JavaScript, sebuah fungsi HANYA mengembalikan nilai
jika ada `return` eksplisit.

- hitungDiskon ditulis sebagai function declaration dengan blok { }.
  Ekspresi `harga - (harga * persen) / 100;` hanya dievaluasi
  lalu dibuang → fungsi mengembalikan `undefined`.

- hitungPajak ditulis sebagai arrow function dengan BLOK { }.
  Arrow function hanya melakukan implicit return jika body-nya
  berupa EKSPRESI TUNGGAL tanpa { }, misalnya:
      const hitungPajak = (x) => x * 0.11;   // implicit return
  Karena di sini memakai { }, ia diperlakukan seperti fungsi
  biasa dan juga butuh `return` eksplisit.

Kesimpulan: perbedaan sintaks (declaration vs arrow) tidak
relevan — yang menentukan adalah ADA atau TIDAKNYA `return`
di dalam body fungsi.
*/


// ============================================================
// === LANGKAH 3: KASIR SENDIRI ===>>>>>>
// ============================================================

// ---------- Data awal ----------
const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];
let kasirKeranjang = [];

// ============================================================
// FUNCTION 1: kasirCariHarga (function declaration)
// ============================================================
function kasirCariHarga(namaMenu) {
  const idx = kasirNamaMenu.indexOf(namaMenu);
  if (idx === -1) return 0;
  return kasirHargaMenu[idx];
}

// ============================================================
// FUNCTION 2: kasirHitungSubtotal (function expression)
// ============================================================
const kasirHitungSubtotal = function (keranjang) {
  let subtotal = 0;
  for (let i = 0; i < keranjang.length; i++) {
    subtotal += kasirCariHarga(keranjang[i]);
  }
  return subtotal;
};

// ============================================================
// FUNCTION 3: kasirHitungDiskon (arrow + blok + return)
// ============================================================
const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) return subtotal * 0.15;
  else if (subtotal >= 50000) return subtotal * 0.10;
  else if (subtotal >= 25000) return subtotal * 0.05;
  else return 0;
};

// ============================================================
// FUNCTION 4: kasirHitungPajak (arrow ringkas + default param)
// ============================================================
const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;

// ============================================================
// FUNCTION 5: kasirCetakStruk (mencetak, tanpa return)
// ============================================================
function kasirCetakStruk(keranjang, subtotal, diskon, pajak) {
  const total = subtotal - diskon + pajak;

  console.log("================================");
  console.log("           STRUK KASIR          ");
  console.log("================================");

  // Daftar item bernomor
  for (let i = 0; i < keranjang.length; i++) {
    const harga = kasirCariHarga(keranjang[i]);
    console.log(`${i + 1}. ${keranjang[i].padEnd(14)} Rp${harga}`);
  }

  console.log("--------------------------------");
  console.log(`Subtotal : Rp${subtotal}`);
  console.log(`Diskon   : Rp${diskon}`);
  console.log(`Pajak    : Rp${pajak.toFixed(0)}`);
  console.log(`Total    : Rp${total.toFixed(0)}`);
  console.log("================================");
}

// ============================================================
// UJI SKENARIO
// ============================================================

// ---------- SKENARIO 1 ----------
kasirKeranjang = [];
kasirKeranjang.push("Kopi Susu");                    // tambah di akhir
kasirKeranjang.push("Nasi Goreng");                  // tambah di akhir
kasirKeranjang.push("Jus Jeruk");                    // tambah di akhir
kasirKeranjang.unshift("Es Teh");                    // tambah prioritas di depan
kasirKeranjang.pop();                                // batal 1 item (Jus Jeruk)
kasirKeranjang.push("Roti Bakar");                   // isi ulang jadi 4 item
kasirKeranjang.splice(1, 1, "Nasi Goreng Spesial");  // ganti item ke-2

console.log("=== SKENARIO 1 ===");
console.log("Keranjang:", kasirKeranjang);

// includes: cek apakah "Kopi Susu" ada di keranjang
console.log("Ada 'Kopi Susu'? ", kasirKeranjang.includes("Kopi Susu"));

// slice: ambil 3 item pertama sebagai paket cepat
console.log("Paket cepat   : ", kasirKeranjang.slice(0, 3));

let s1Subtotal = kasirHitungSubtotal(kasirKeranjang);
let s1Diskon   = kasirHitungDiskon(s1Subtotal);
let s1Pajak    = kasirHitungPajak(s1Subtotal - s1Diskon);
kasirCetakStruk(kasirKeranjang, s1Subtotal, s1Diskon, s1Pajak);

// ---------- SKENARIO 2 ----------
kasirKeranjang = [];
kasirKeranjang.push("Nasi Goreng");
kasirKeranjang.push("Nasi Goreng");
kasirKeranjang.push("Kopi Susu");
kasirKeranjang.unshift("Roti Bakar");
kasirKeranjang.splice(3, 1, "Jus Jeruk");            // ganti item ke-4

console.log("\n=== SKENARIO 2 ===");
console.log("Keranjang:", kasirKeranjang);
console.log("Ada 'Es Teh'? ", kasirKeranjang.includes("Es Teh"));
console.log("Paket cepat  : ", kasirKeranjang.slice(0, 3));

let s2Subtotal = kasirHitungSubtotal(kasirKeranjang);
let s2Diskon   = kasirHitungDiskon(s2Subtotal);
let s2Pajak    = kasirHitungPajak(s2Subtotal - s2Diskon);
kasirCetakStruk(kasirKeranjang, s2Subtotal, s2Diskon, s2Pajak);

// ============================================================
// HASIL SKENARIO
// ============================================================
/*
Skenario 1: keranjang = ["Es Teh", "Nasi Goreng Spesial", "Kopi Susu", "Roti Bakar"]
  Catatan: "Nasi Goreng Spesial" tidak ada di menu → harga 0
  Subtotal = 7500 + 0 + 18000 + 15000 = 40500
  Diskon   = 5% × 40500 = 2025
  Pajak    = 11% × (40500 - 2025) = 11% × 38475 = 4232.25 ≈ 4232
  Total    = 40500 - 2025 + 4232 = 42707

Skenario 2: keranjang = ["Roti Bakar", "Nasi Goreng", "Nasi Goreng", "Jus Jeruk"]
  Subtotal = 15000 + 22000 + 22000 + 12000 = 71000
  Diskon   = 10% × 71000 = 7100
  Pajak    = 11% × (71000 - 7100) = 11% × 63900 = 7029
  Total    = 71000 - 7100 + 7029 = 70929
*/

// ============================================================
// JAWABAN PERTANYAAN
// ============================================================

/*
1. Array method: push(). Mengubah array asli (mutasi).
   Bukti:
     console.log(kasirKeranjang);   // sebelum: []
     kasirKeranjang.push("Kopi Susu");
     console.log(kasirKeranjang);   // sesudah: ["Kopi Susu"]
   Panjang array bertambah & item baru benar-benar masuk.

2. Beda splice vs slice:
   - splice : MENGUBAH array asli (mutasi). Bisa hapus/tambah/ganti.
   - slice  : TIDAK mengubah array asli. Hanya menyalin potongan.
   Contoh di kode:
     kasirKeranjang.splice(1, 1, "Nasi Goreng Spesial");
       → array asli berubah (item indeks 1 diganti).
     kasirKeranjang.slice(0, 3);
       → array asli tetap, hanya menghasilkan array baru berisi 3 item.

3. kasirCariHarga pakai `return`, bukan `console.log`, karena
   hasilnya ingin DIPAKAI function lain (kasirHitungSubtotal).
   `console.log` hanya menampilkan ke layar dan menghasilkan undefined.
   Jika diganti console.log, maka:
     subtotal += kasirCariHarga(...)   → subtotal += undefined → NaN
   Subtotal akan menjadi NaN dan seluruh perhitungan rusak.

4. Parameter vs Argumen:
   - Parameter: variabel di definisi function.
       Contoh: `namaMenu` pada `function kasirCariHarga(namaMenu)`.
   - Argumen: nilai nyata yang dikirim saat memanggil function.
       Contoh: `"Kopi Susu"` pada `kasirCariHarga("Kopi Susu")`.

5. kasirHitungPajak boleh dipanggil 1 atau 2 argumen karena
   parameternya punya NILAI DEFAULT (tarif = 0.11).
   Jika argumen kedua tidak diberikan, JS otomatis memakai 0.11.
   Contoh:
     kasirHitungPajak(80000)        → 8800  (tarif default)
     kasirHitungPajak(80000, 0.05)  → 4000  (tarif di-override)

6. Beda waktu pemanggilan sebelum deklarasi:
   - kasirCariHarga (function declaration) → HOISTED penuh,
     bisa dipanggil SEBELUM baris deklarasinya.
   - kasirHitungSubtotal (function expression / const) → TIDAK hoisted
     seperti function declaration. Memanggilnya lebih dulu akan
     memicu ReferenceError (temporal dead zone).

   Percobaan:
     // console.log(kasirCariHarga("Kopi Susu"));       // → 18000 (BERHASIL)
     // console.log(kasirHitungSubtotal(["Kopi Susu"])); // → ReferenceError:
     //   Cannot access 'kasirHitungSubtotal' before initialization

   Kesimpulan: declaration di-hoist, expression/const tidak.
*/
