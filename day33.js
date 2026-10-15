//<<<<<<< LANGKAH 1 : REBAK DULU,BARU CEK >>>>>>>>>>>>

// ============================================
// POTONGAN A
// ============================================

const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

// Tebakan:
// produk.nama        -> "Kopi Susu"
// produk[kunci]      -> "Kopi Susu"
// produk["harga"]    -> 20000
// produk.stok        -> undefined
// "kategori" in produk -> true
// "stok" in produk   -> false
// Object.keys(produk)   -> ["nama", "harga", "kategori"]
// Object.values(produk) -> ["Kopi Susu", 20000, "minuman"]

console.log(produk.nama);
console.log(produk[kunci]);
console.log(produk["harga"]);
console.log(produk.stok);
console.log("kategori" in produk);
console.log("stok" in produk);
console.log(Object.keys(produk));
console.log(Object.values(produk));

// Hasil asli:
// "Kopi Susu"
// "Kopi Susu"
// 20000
// undefined
// true
// false
// [ 'nama', 'harga', 'kategori' ]
// [ 'Kopi Susu', 20000, 'minuman' ]


// ============================================
// POTONGAN B
// ============================================

const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

// Tebakan:
// sisa              -> 30000
// cekSaldo()        -> "Rina: Rp 30000"
// belanja(10000)    -> saldo jadi 20000
// cekSaldo()        -> "Rina: Rp 20000"
// dompet.saldo      -> 20000

let sisa = dompet.belanja(20000);
console.log(sisa);
dompet.cekSaldo();
dompet.belanja(10000);
dompet.cekSaldo();
console.log(dompet.saldo);

// Hasil asli:
// 30000
// Rina: Rp 30000
// Rina: Rp 20000
// 20000


// ============================================
// POTONGAN C
// ============================================

const hari = ["Senin", "Selasa"];

// Tebakan for...of hari -> "Senin", "Selasa"
for (let nilai of hari) {
  console.log(nilai);
}

// Tebakan for...in hari -> "0", "1" (indeks sebagai string)
for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

// Tebakan for...in kopi -> "nama: Kopi", "harga: 18000"
for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

// Tebakan for...of "Kopi" -> "K", "o", "p", "i"
for (let huruf of "Kopi") {
  console.log(huruf);
}

// Hasil asli:
// Senin
// Selasa
// 0
// 1
// nama: Kopi
// harga: 18000
// K
// o
// p
// i


// ============================================
// PERCOBAAN TAMBAHAN
// ============================================

// Tebakan: for...of pada object akan ERROR
// karena object tidak iterable (tidak punya Symbol.iterator)

// for (let x of kopi) { console.log(x); }

// Pesan error yang muncul:
// TypeError: kopi is not iterable


// ============================================
// JAWABAN PERTANYAAN
// ============================================

/*
1. Pada Potongan A, apa beda `produk.nama` dan `produk[kunci]`?
   Kenapa `produk.stok` hasilnya `undefined`?
   
   - `produk.nama` mengakses properti dengan nama literal "nama".
   - `produk[kunci]` mengakses properti menggunakan nilai variabel `kunci`
     (yang berisi "nama"), sehingga hasilnya sama.
   - `produk.stok` bernilai `undefined` karena properti `stok` sudah dihapus
     dengan `delete produk.stok`. Mengakses properti yang tidak ada akan
     mengembalikan `undefined`, bukan error.


2. Pada Potongan B, kenapa `dompet.saldo` di akhir bernilai 20000, padahal
   `belanja(10000)` tidak disimpan ke variabel? Apa yang dirujuk oleh `this`?
   
   - `belanja(10000)` tetap mengubah `this.saldo` di dalam object `dompet`,
     meskipun nilai return-nya tidak disimpan. Yang disimpan hanyalah nilai
     kembalian (return), bukan efek sampingnya (mutasi state).
   - `this` di dalam method `belanja` dan `cekSaldo` merujuk pada object
     `dompet` itu sendiri, karena method dipanggil sebagai `dompet.belanja()`
     (implicit binding).


3. Pada Potongan C, kenapa `for...in` pada array menghasilkan `0` dan `1`,
   bukan `"Senin"` dan `"Selasa"`? Kenapa `for...of` pada object `kopi`
   menghasilkan error?
   
   - `for...in` melakukan iterasi terhadap KEY (properti enumerable), dan pada
     array key-nya adalah indeks numerik (0, 1, ...) dalam bentuk string.
     Untuk mendapatkan nilainya, perlu `hari[indeks]`.
   - `for...of` membutuhkan objek yang ITERABLE (punya `Symbol.iterator`).
     Array dan string iterable, tapi object biasa TIDAK iterable, sehingga
     muncul error: "TypeError: kopi is not iterable".
     Untuk object, gunakan `for...in` atau `Object.keys/values/entries`.

// Catatan: tebakan yang paling sulit adalah output `Object.values(produk)`
// karena harus melacak urutan properti setelah penambahan `kategori` dan
// penghapusan `stok`. Urutan mengikuti urutan penyisipan (insertion order),
// sehingga "kategori" muncul terakhir dan "stok" sudah hilang.
*/


// ============================================
// LANGKAH 2: PERBAIKI 7 KESALAHAN
// ============================================

const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // FIX 1: Sebelumnya `saldoKas += jumlah` tanpa `this.`
  //        sehingga mengakses variabel global (ReferenceError).
  tambahKas(jumlah) {
    this.saldoKas += jumlah;
  },

  // FIX 2: Sebelumnya tidak ada `return`, sehingga hasilnya `undefined`.
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);       // 150000
console.log(warung.ambilKas(30000)); // 120000

// FIX 3: Key "no-wa" mengandung tanda hubung, jadi TIDAK bisa diakses
//        dengan dot notation (`kontak.no-wa` dianggap `kontak.no - wa`).
//        Harus pakai bracket notation.
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]);       // 08123

// FIX 4: `akun.kataSandi = undefined` hanya mengubah VALUE menjadi undefined,
//        tapi KEY-nya masih ada. Untuk menghapus properti, gunakan `delete`.
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);                  // { nama: 'Rina' }

// FIX 5: `for...in` mencetak INDEX (0, 1, 2), bukan VALUE.
//        Untuk array, pakai `for...of` supaya langsung dapat value-nya.
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
  console.log(item);                // Kopi, Teh, Roti
}

// FIX 6: Object tidak iterable, jadi `for...of` akan error.
//        Untuk iterasi object, gunakan `for...in`.
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// FIX 7: Typo — `Object.key` seharusnya `Object.keys` (pakai 's').
console.log(Object.keys(info));     // [ 'nama', 'kota' ]


// ============================================
// OUTPUT AKHIR
// ============================================
// 150000
// 120000
// 08123
// { nama: 'Rina' }
// Kopi
// Teh
// Roti
// nama: Warung Senja
// kota: Yogyakarta
// [ 'nama', 'kota' ]


// ============================================
// JAWABAN PERTANYAAN
// ============================================

/*
1. Tulis ke-7 kesalahan tadi dalam satu kalimat singkat masing-masing.

   FIX 1: `tambahKas` menulis `saldoKas += jumlah` tanpa `this.`,
          sehingga mengakses variabel yang tidak ada.
          → Perbaikan: tulis `this.saldoKas += jumlah`.

   FIX 2: `ambilKas` tidak mengembalikan nilai, sehingga hasilnya
          `undefined` saat di-console.log.
          → Perbaikan: tambahkan `return this.saldoKas;`.

   FIX 3: Key `"no-wa"` mengandung tanda hubung, diakses dengan
          dot notation (`kontak.no-wa`) yang tidak valid.
          → Perbaikan: gunakan bracket notation `kontak["no-wa"]`.

   FIX 4: `akun.kataSandi = undefined` hanya mengubah nilai, key-nya
          masih ada sehingga muncul di output.
          → Perbaikan: gunakan `delete akun.kataSandi;`.

   FIX 5: `for...in` pada array mencetak indeks (0, 1, 2), bukan isi.
          → Perbaikan: ganti dengan `for...of`.

   FIX 6: `for...of` pada object akan error karena object tidak iterable.
          → Perbaikan: ganti dengan `for...in`.

   FIX 7: Typo `Object.key` (harusnya `Object.keys`).
          → Perbaikan: tulis `Object.keys(info)`.


2. Mana kesalahan yang menyebabkan error di console, dan mana yang
   tidak error tetapi hasilnya salah?

   ERROR (runtime error):
   - FIX 1: `tambahKas` → ReferenceError: saldoKas is not defined
            (karena `saldoKas` bukan variabel yang dideklarasikan).
   - FIX 6: `for...of info` → TypeError: info is not iterable
            (karena plain object tidak punya Symbol.iterator).
   - FIX 7: `Object.key` → TypeError: Object.key is not a function
            (karena method yang benar adalah `Object.keys`).

   TIDAK ERROR, tapi hasilnya SALAH:
   - FIX 2: `ambilKas` mengembalikan `undefined` (tidak error, tapi
            output salah).
   - FIX 3: `kontak.no-wa` menghasilkan `NaN` (karena JS membaca
            `kontak.no - wa`, di mana keduanya `undefined`, dan
            `undefined - undefined = NaN`) — tidak error, tapi salah.
   - FIX 4: `akun.kataSandi = undefined` tetap menampilkan key
            `kataSandi` di output (tidak error, tapi hasil tidak
            sesuai harapan).
   - FIX 5: `for...in` pada array mencetak `0`, `1`, `2` bukan
            `Kopi`, `Teh`, `Roti` — tidak error, tapi salah.


3. Kenapa `akun.kataSandi = undefined` tidak sama dengan
   `delete akun.kataSandi`? Tunjukkan bedanya memakai `in`.

   - `akun.kataSandi = undefined` → HANYA mengubah nilai properti
     menjadi `undefined`. Key-nya TETAP ADA di object.
   - `delete akun.kataSandi`      → MENGHAPUS key beserta nilainya
     dari object sepenuhnya.
*/

// Demonstrasi perbedaan dengan operator `in`:
const akunA = { nama: "Rina", kataSandi: "abc123" };
akunA.kataSandi = undefined;

const akunB = { nama: "Rina", kataSandi: "abc123" };
delete akunB.kataSandi;

console.log("kataSandi" in akunA);       // true  ← key masih ada
console.log("kataSandi" in akunB);       // false ← key sudah hilang

console.log(Object.keys(akunA));         // [ 'nama', 'kataSandi' ]
console.log(Object.keys(akunB));         // [ 'nama' ]

console.log(JSON.stringify(akunA));      // {"nama":"Rina"}
// ↑ Perhatikan: saat di-JSON.stringify, nilai undefined otomatis
//   dihilangkan. Tapi di console.log(object), key-nya tetap tampil.
console.log(JSON.stringify(akunB));      // {"nama":"Rina"}

// Kesimpulan:
// - `= undefined` → "mengosongkan nilai", key masih ikut di `in`
//   dan `Object.keys`.
// - `delete`      → "menghapus properti", key tidak lagi ikut di
//   `in` maupun `Object.keys`.