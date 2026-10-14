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