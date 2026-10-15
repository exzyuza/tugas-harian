# Tugas Day 33 — Object, Method, dan Loop di JavaScript

## 👤 Nama
**[MUAHAMAD NIZZAR RAMADHAN]**

## 📚 Yang Saya Pelajari

Satu hal yang paling saya pelajari dari tugas ini adalah **perbedaan mendasar antara `for...of` dan `for...in`**, serta kapan masing-masing harus dipakai. Sebelumnya saya sering tertukar dan mengira keduanya bisa saling menggantikan. Setelah mengerjakan Langkah 1 (Potongan C) dan Langkah 2 (FIX 5 & FIX 6), saya jadi paham bahwa:

- **`for...of`** mengiterasi **VALUE** dari objek **iterable** (Array, String, Map, Set). Cocok untuk mengambil isi array atau karakter string satu per satu.
- **`for...in`** mengiterasi **KEY** (nama properti/indeks) dari object atau array. Cocok untuk menelusuri properti object.

Saya juga belajar bahwa **object biasa tidak iterable** — jadi `for...of` pada object akan melempar `TypeError: ... is not iterable`, sedangkan `for...in` pada array justru menghasilkan indeks (`"0"`, `"1"`) bukan isinya. Momen "aha!" saya terjadi saat memperbaiki 7 kesalahan di Langkah 2: kesalahan `for...in` pada array dan `for...of` pada object adalah dua jenis bug yang **tidak selalu error** — yang satu diam-diam salah hasil, yang satu langsung meledak.

Selain itu, saya juga makin paham konsep **`this` di dalam method**, **mutasi state** (side effect), dan beda antara **`delete obj.key`** vs **`obj.key = undefined`** — terutama saat mengerjakan bonus `menuMenipis()` yang hasilnya berubah karena method lain sudah memutasi `stok` sebelumnya.

## 🤔 Yang Masih Membingungkan

Satu hal yang masih membingungkan bagi saya adalah **kapan sebaiknya memakai method di dalam object literal vs function terpisah (atau class)**. Di tugas ini semua method ditulis langsung di dalam object `kasirKedai`, dan itu bekerja dengan baik untuk skala kecil. Tapi saya masih bingung:

- Kalau object-nya makin besar (misal 20+ method), apakah tetap wajar ditulis dalam satu object literal, atau sebaiknya dipecah jadi `class`?
- Bagaimana cara yang "benar" membagi tanggung jawab antar method supaya tidak terjadi side effect yang tidak terduga seperti di bonus `menuMenipis()` — di mana hasilnya bergantung pada urutan pemanggilan?
- Apakah ada pola standar untuk membuat method yang **read-only** vs **mutating**, agar lebih mudah dilacak saat aplikasi membesar?

Saya rasa pemahaman ini akan lebih jelas saat saya belajar **`class`**, **`Object.freeze`**, dan **immutability pattern** di materi selanjutnya.

---

## 🗂️ Ringkasan Isi File `tugas_day_33.js`

| Bagian | Isi |
|---|---|
| **Langkah 1** | Tebak output 3 potongan kode (object, method `this`, `for...of` / `for...in`) — semua tebakan benar |
| **Langkah 2** | Perbaiki 7 kesalahan: `this.` hilang, `return` hilang, dot notation untuk key bertanda hubung, `delete` vs `= undefined`, `for...in`/`for...of` tertukar, typo `Object.key` |
| **Langkah 3** | Object `kasirKedai` dengan 5 menu, 6 method (cariHarga, tambahKeKeranjang, hitungSubtotal, hitungDiskon, cetakStruk) + properti dinamis `"website"` |
| **Bonus** | Method `menuMenipis()` — mengembalikan nama menu dengan stok < 5 |
| **Uji** | 2 skenario (diskon 5% & 10%) + 2 kasus gagal (menu tidak ada & stok kurang) |

## 🛠️ Cara Menjalankan

```bash
node tugas_day_33.js