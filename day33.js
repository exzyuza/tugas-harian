// ============================================
// <<<<<<< LANGKAH 1 : REBAK DULU,BARU CEK >>>>>>>>>>>>
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
// <<<<<<<< LAANGKAH 2: PERBAIKI 7 KESALAHAN >>>>>>>
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

// ============================================
// <<<<<<< LANGKAH 3: BIKIN KASIR SENDIRI >>>>>>>>
// ============================================

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  menu: [
    { nama: "Kopi Susu",  kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Teh Manis",  kategori: "minuman", harga: 10000, stok: 15 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 20000, stok: 8  },
    { nama: "Nasi Goreng",kategori: "makanan", harga: 25000, stok: 6  },
    { nama: "Es Jeruk",   kategori: "minuman", harga: 12000, stok: 12 },
  ],
  keranjang: [],

  // ------------------------------------------
  // Method cariHarga: for...of pada this.menu
  // Mengembalikan harga, atau 0 jika tidak ketemu
  // ------------------------------------------
  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        return item.harga;
      }
    }
    return 0;
  },

  // ------------------------------------------
  // Method tambahKeKeranjang
  // true jika berhasil, false jika gagal
  // ------------------------------------------
  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        if (item.stok >= jumlah) {
          this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
          item.stok -= jumlah;
          return true;
        }
        return false; // stok tidak cukup
      }
    }
    return false; // menu tidak ada
  },

  // ------------------------------------------
  // Method hitungSubtotal: for...of pada this.keranjang
  // Memanggil this.cariHarga(...) untuk tiap item
  // ------------------------------------------
  hitungSubtotal() {
    let subtotal = 0;
    for (let item of this.keranjang) {
      subtotal += this.cariHarga(item.nama) * item.jumlah;
    }
    return subtotal;
  },

  // ------------------------------------------
  // Method hitungDiskon
  // ------------------------------------------
  hitungDiskon(subtotal) {
    if (subtotal >= 100000) return subtotal * 0.15;
    if (subtotal >= 50000)  return subtotal * 0.10;
    if (subtotal >= 25000)  return subtotal * 0.05;
    return 0;
  },

  // ------------------------------------------
  // Method cetakStruk
  // ------------------------------------------
  cetakStruk() {
    console.log("================================");
    console.log("        " + this.nama);
    console.log("        " + this.kota);
    console.log("================================");

    let no = 1;
    for (let item of this.keranjang) {
      let harga = this.cariHarga(item.nama);
      console.log(
        no + ". " + item.nama +
        " x" + item.jumlah +
        " = Rp " + (harga * item.jumlah)
      );
      no++;
    }

    let subtotal = this.hitungSubtotal();
    let diskon   = this.hitungDiskon(subtotal);
    let setelahDiskon = subtotal - diskon;
    let pajak    = setelahDiskon * 0.11;
    let total    = setelahDiskon + pajak;

    console.log("--------------------------------");
    console.log("Subtotal: Rp " + subtotal);
    console.log("Diskon  : Rp " + diskon);
    console.log("Pajak   : Rp " + pajak.toFixed(0));
    console.log("Total   : Rp " + total.toFixed(0));
    console.log("================================");

    this.saldoKas += total;
  },
};

// ============================================
// NO 7: Properti dinamis dengan bracket notation
// ============================================
let namaProperti = "website";
kasirKedai[namaProperti] = "https://kedaisenja.id";

console.log("website" in kasirKedai);   // true
console.log(kasirKedai.website);         // https://kedaisenja.id

delete kasirKedai[namaProperti];
console.log("website" in kasirKedai);   // false

// ============================================
// NO 8: for...in pada object jamOperasional & menu[0]
// ============================================
console.log("--- Jam Operasional ---");
for (let kunci in kasirKedai.jamOperasional) {
  console.log(kunci + ": " + kasirKedai.jamOperasional[kunci]);
}
// buka: 08:00
// tutup: 21:00

console.log("--- Menu Pertama ---");
for (let kunci in kasirKedai.menu[0]) {
  console.log(kunci + ": " + kasirKedai.menu[0][kunci]);
}
// nama: Kopi Susu
// kategori: minuman
// harga: 18000
// stok: 10

// ============================================
// NO 9: Object.keys & Object.values jamOperasional
// ============================================
console.log(Object.keys(kasirKedai.jamOperasional));
// [ 'buka', 'tutup' ]

console.log(Object.values(kasirKedai.jamOperasional));
// [ '08:00', '21:00' ]

// ============================================
// NO 10: Hitung huruf 'a' di kasirKedai.nama pakai for...of string
// ============================================
let jumlahA = 0;
for (let huruf of kasirKedai.nama) {
  if (huruf === "a") jumlahA++;
}
console.log("Jumlah huruf 'a' di '" + kasirKedai.nama + "': " + jumlahA);
// "Kedai Senja" -> huruf 'a' muncul 2x (di "dai" dan "ja")

// ============================================
// NO 11: Uji 2 skenario + 2 kasus gagal
// ============================================

// --- SKENARIO 1: Diskon 5% ---
// Isi: Kopi Susu x1 (18000), Teh Manis x1 (10000) -> subtotal 28000
// Hasil struk:
// Subtotal: 28000
// Diskon  : 1400     (5% karena >= 25000)
// Pajak   : 2926     (11% dari 26600)
// Total   : 29526

console.log("\n>>> SKENARIO 1 <<<");
kasirKedai.keranjang = [];
kasirKedai.tambahKeKeranjang("Kopi Susu", 1);
kasirKedai.tambahKeKeranjang("Teh Manis", 1);
kasirKedai.cetakStruk();

// --- SKENARIO 2: Diskon 10% ---
// Isi: Nasi Goreng x2 (50000), Roti Bakar x1 (20000) -> subtotal 70000
// Hasil struk:
// Subtotal: 70000
// Diskon  : 7000     (10% karena >= 50000)
// Pajak   : 6930     (11% dari 63000)
// Total   : 69930

console.log("\n>>> SKENARIO 2 <<<");
kasirKedai.keranjang = [];
kasirKedai.tambahKeKeranjang("Nasi Goreng", 2);
kasirKedai.tambahKeKeranjang("Roti Bakar", 1);
kasirKedai.cetakStruk();

// ============================================
// KASUS GAGAL
// ============================================
console.log("\n>>> UJI GAGAL <<<");
console.log(kasirKedai.tambahKeKeranjang("Sate Ayam", 1)); // false (menu tidak ada)
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 999)); // false (stok tidak cukup)

// ============================================
// PERTANYAAN
// ============================================

/*
1. Apa beda dot notation dan bracket notation? Beri contoh dari kodemu,
   dan jelaskan kapan bracket notation wajib dipakai.

   - Dot notation: `kasirKedai.nama` -> key HARUS berupa identifier yang
     valid (huruf/angka/underscore, tidak boleh ada tanda hubung/spasi,
     tidak boleh diawali angka).
   - Bracket notation: `kasirKedai[namaProperti]` -> key diambil dari
     NILAI variabel/ekspresi.

   Contoh dari kode:
     - Dot: `kasirKedai.nama`, `kasirKedai.saldoKas`
     - Bracket: `kasirKedai[namaProperti]` (nilai variabel = "website")

   Bracket notation WAJIB dipakai ketika:
     a) Key disimpan dalam variabel (contoh di atas: `namaProperti`).
     b) Key mengandung karakter tidak valid (tanda hubung, spasi, angka di awal),
        misal `kontak["no-wa"]` di Langkah 2.
     c) Key dihasilkan secara dinamis dari loop/ekspresi.


2. Kenapa di dalam method kamu menulis `this.saldoKas`, bukan `saldoKas`?
   Apa yang terjadi jika kata `this` dihapus? Buktikan dengan kode, lalu
   jadikan baris percobaan itu komentar dan tulis pesan errornya.

   Karena `saldoKas` adalah PROPERTI milik object `kasirKedai`, bukan
   variabel bebas. Untuk mengakses properti dari dalam method, harus
   lewat `this` (yang merujuk ke object pemanggil). Tanpa `this`, JS
   akan mencari variabel bernama `saldoKas` di scope luar, dan tidak
   menemukannya.

   Bukti:
*/
// const ujiThis = {
//   saldoKas: 1000,
//   tes() { saldoKas += 1; },
// };
// ujiThis.tes();
// -> ReferenceError: saldoKas is not defined

/*
3. Apa beda `for...of` dan `for...in`? Tunjuk satu tempat di kodemu yang
   memakai masing-masing, dan jelaskan kenapa yang satu tidak bisa
   ditukar dengan yang lain.

   - `for...of` : iterasi VALUE dari objek ITERABLE (Array, String, Map, Set).
   - `for...in` : iterasi KEY (nama properti) dari object/array.

   Di kode:
     - `for...of` pada `this.menu`   (di `cariHarga`) -> dapat VALUE
       tiap menu (object menu), sehingga bisa cek `item.nama`.
     - `for...in` pada `kasirKedai.jamOperasional` -> dapat KEY
       ("buka", "tutup"), untuk mengakses value pakai bracket.

   Tidak bisa ditukar karena:
     - Kalau `cariHarga` pakai `for...in`, `item` akan berisi INDEKS
       ("0","1",...) bukan object menu, sehingga `item.nama` = undefined.
     - Kalau `jamOperasional` pakai `for...of`, akan muncul
       TypeError: jamOperasional is not iterable (object tidak iterable).


4. Kenapa `for...of` pada `kasirKedai` (object) menghasilkan error,
   sedangkan pada string dan array tidak? Tulis pesan errornya.

   Karena `for...of` memerlukan objek yang punya method
   `[Symbol.iterator]()`. Array dan String sudah punya built-in iterator;
   plain object TIDAK punya secara default.

   Pesan error:
     TypeError: kasirKedai is not iterable
*/ 
// for (let x of kasirKedai) { console.log(x); }
// -> TypeError: kasirKedai is not iterable

/*
5. Apa beda `Object.keys` dan `Object.values`? Tunjuk hasilnya dari kodemu.

   - `Object.keys(obj)`   -> array berisi KEY (nama properti).
   - `Object.values(obj)` -> array berisi VALUE dari tiap key.

   Dari kode:
     Object.keys(kasirKedai.jamOperasional)   -> [ 'buka', 'tutup' ]
     Object.values(kasirKedai.jamOperasional) -> [ '08:00', '21:00' ]


6. Kenapa `cariHarga` dan `hitungSubtotal` harus memakai `return`,
   sedangkan `cetakStruk` boleh tidak? Apa yang terjadi jika
   `hitungSubtotal` hanya memakai `console.log`?

   - `cariHarga` dan `hitungSubtotal` HARUS `return` karena hasilnya
     akan DIPAKAI oleh kode lain (dikalikan, dijumlahkan, dibandingkan).
     Tanpa `return`, hasilnya tidak bisa dipakai.
   - `cetakStruk` cukup dengan `console.log` karena tugasnya HANYA
     menampilkan teks ke layar (side effect), tidak perlu mengembalikan
     nilai untuk dipakai lebih lanjut.

   Jika `hitungSubtotal` hanya pakai `console.log`:
     - Nilai subtotal hanya tampil di layar, TIDAK bisa dioper ke
       `hitungDiskon` atau perhitungan pajak/total.
     - Baris `let subtotal = this.hitungSubtotal();` akan menghasilkan
       `undefined`, lalu `undefined - diskon = NaN`, dan seterusnya
       sampai total jadi `NaN`. Struk akan rusak total.
*/

