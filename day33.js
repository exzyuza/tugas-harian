// ============================================
// TUGAS DAY 33
// ============================================

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