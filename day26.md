Jawaban Lengkap: Git, Merge Conflict, dan Dasar Web Development

---

1. Mengapa Merge Conflict Bisa Terjadi

Merge conflict terjadi ketika Git tidak bisa secara otomatis menggabungkan dua perubahan karena ada perbedaan pada baris yang sama di file yang sama, atau ketika satu branch menghapus file yang sedang diubah branch lain.

Minimal 2 situasi pemicu:

1. Dua orang mengedit baris yang sama pada file yang sama di branch berbeda.
2. Satu orang menghapus file, sementara orang lain masih mengedit file tersebut.
3. Satu orang mengubah nama file, sementara yang lain mengubah isinya.
4. Dua branch mengubah struktur direktori yang sama (misal pindah folder).

Contoh skenario nyata:

· Andi membuat branch fitur-login dan mengubah baris judul di index.html menjadi <h1>Login</h1>.
· Budi membuat branch fitur-dashboard dan mengubah baris judul yang sama menjadi <h1>Dashboard</h1>.
· Ketika Andi merge ke main, lalu Budi merge ke main, Git bingung versi mana yang harus dipakai → merge conflict.

---

2. Analisis Potongan Kode Konflik

```
<<<<<<< HEAD
<h1 style="color: red;">Selamat Datang</h1>
=======
<h1 style="color: blue;">Selamat Datang</h1>
>>>>>>> branch-teman
```

a. Arti penanda:

· <<<<<<< HEAD → awal bagian versi branch aktif (branch saat ini, biasanya main/master).
· ======= → pemisah antara versi branch aktif dan versi branch yang masuk.
· >>>>>>> branch-teman → akhir bagian versi dari branch yang datang (branch-teman).

b. Versi branch aktifmu:

```html
<h1 style="color: red;">Selamat Datang</h1>
```

c. Versi branch yang datang:

```html
<h1 style="color: blue;">Selamat Datang</h1>
```

---

3. Dua Cara Menyelesaikan Merge Conflict

Cara A: Melalui Visual Studio Code

1. Buka project di VS Code, buka file yang berkonflik (bertanda ! atau U).
2. VS Code menampilkan tombol "Accept Current Change", "Accept Incoming Change", "Accept Both Changes", dan "Compare Changes".
3. Klik pilihan yang diinginkan, atau edit langsung di editor.
4. Simpan file (Ctrl+S).
5. Lakukan git add <file> lalu git commit.

Cara B: Melalui Editor Teks Manual

1. Buka file konflik di editor (Notepad++, nano, vim, dll).
2. Cari penanda <<<<<<<, =======, >>>>>>>.
3. Hapus semua penanda tersebut.
4. Pilih/ gabungkan isi yang diinginkan, sisakan hanya kode final.
5. Simpan file, lalu git add <file> dan git commit.

Mengapa VS Code direkomendasikan untuk pemula?

· Ada tombol klik sekali untuk memilih versi (tidak perlu hapus manual).
· Warna berbeda (hijau/biru/abu) memudahkan membedakan versi.
· Ada fitur 3-way merge editor dan inline diff.
· Mengurangi risiko kesalahan menghapus penanda.

---

4. Perintah Setelah Menyelesaikan Konflik Manual

```bash
git add <nama-file>
git commit -m "resolve: merge conflict pada index.html"
git status
```

Fungsi masing-masing:

1. git add <file> → menandai file konflik sebagai sudah diselesaikan (staged).
2. git commit -m "..." → menyimpan hasil merge sebagai commit baru.
3. git status → memastikan tidak ada file konflik yang tersisa dan working tree bersih.

(Opsional: git merge --continue jika merge dihentikan.)

---

5. Fungsi git merge --abort

Fungsi: Membatalkan proses merge yang sedang berjalan dan mengembalikan kondisi ke keadaan sebelum merge dimulai. Semua perubahan dari branch yang datang dibatalkan, konflik hilang.

Situasi nyata penggunaan:
Kamu sedang merge branch fitur besar, tapi ternyata banyak konflik kompleks dan kamu sadar branch tersebut belum siap digabung (masih buggy). Daripada memaksakan menyelesaikan konflik yang bisa merusak kode, lebih baik:

```bash
git merge --abort
```

lalu koordinasi ulang dengan tim.

---

6. Praktik Terbaik Meminimalkan Merge Conflict

Praktik Mengapa Mengurangi Konflik
1. Sering git pull / sinkronisasi branch Perubahan kecil yang sering digabung lebih mudah diselesaikan daripada menumpuk besar.
2. Buat branch fitur berumur pendek Semakin lama branch hidup, semakin jauh divergensi dengan main.
3. Bagi tugas berdasarkan file/modul Menghindari dua orang mengedit file yang sama di baris yang sama.
4. Komunikasi tim Tim tahu siapa mengerjakan apa, sehingga tidak tumpang tindih.
5. Commit kecil & sering Memudahkan identifikasi sumber konflik.
6. Gunakan format kode konsisten (Prettier/ESLint) Menghindari konflik karena perbedaan spasi/indentasi.

---

7. Pentingnya Pesan Commit yang Jelas

Alasan: Pesan commit adalah dokumentasi sejarah proyek. Memudahkan git log, git blame, debugging, review, dan kolaborasi. Pesan buruk membuat orang bingung "perubahan apa ini?".

3 contoh pesan commit BURUK:

1. "update"
2. "fix"
3. "asdfasdf" atau "benerin dikit"

3 contoh pesan commit BAIK:

1. "fix: perbaiki validasi email pada form registrasi"
2. "feat: tambahkan fitur export laporan ke PDF"
3. "docs: perbarui README bagian instalasi"

---

8. Format Conventional Commits

Format umum:

```
<type>(<scope>): <deskripsi singkat>

[body opsional]

[footer opsional]
```

4 tipe commit & fungsinya:

Tipe Fungsi Contoh
feat Menambah fitur baru feat: tambahkan fitur login Google
fix Memperbaiki bug fix: perbaiki error 500 saat upload gambar
docs Perubahan dokumentasi docs: tambahkan panduan kontribusi
refactor Perbaikan kode tanpa mengubah fungsi refactor: pisahkan fungsi validasi ke helper
chore Tugas rutin (build, deps) chore: update dependency axios ke v1.6
style Formatting, spasi, titik koma style: rapikan indentasi komponen Navbar

---

9. Analisis 3 Pesan Commit

```
1. git commit -m "update"
2. git commit -m "fix bug tombol"
3. git commit -m "feat: menambahkan fitur pencarian produk di navbar"
```

Yang paling baik: nomor 3.

Alasan:

· Mengikuti Conventional Commits (feat:).
· Menjelaskan apa yang ditambahkan (fitur pencarian produk).
· Menjelaskan di mana (navbar).
· Informatif, bisa dipahami tanpa buka diff.
· Nomor 1 terlalu umum; nomor 2 sudah cukup baik tapi belum pakai konvensi tipe.

---

10. Fungsi .gitignore

Fungsi: Memberi tahu Git file/folder mana yang tidak boleh dilacak (tidak di-commit / tidak di-push ke GitHub).

4 jenis file yang sebaiknya masuk .gitignore:

Jenis File Contoh Alasan Tidak Perlu di-Upload
Dependency node_modules/, vendor/ Besar, bisa di-install ulang via npm install.
Environment variable .env, config.local.js Berisi rahasia (API key, password) → risiko keamanan.
Build output dist/, build/, *.min.js Hasil generate, bisa dibuat ulang.
File OS/editor .DS_Store, Thumbs.db, .vscode/ Spesifik ke mesin/editor masing-masing, tidak relevan proyek.
Log & cache *.log, .cache/ Tidak penting, sering berubah.

---

11. Format Standar Penamaan Branch

Rekomendasi format:

```
<tipe>/<deskripsi-singkat>
```

atau

```
<tipe>/<issue-id>-<deskripsi>
```

3 contoh penamaan branch yang baik:

1. feature/login-google
2. bugfix/error-upload-gambar
3. hotfix/security-patch-2024

Mengapa lebih baik dari penamaan bebas?

· Konsisten → mudah diprediksi & dicari.
· Jelas tujuan branch dari namanya.
· Terintegrasi dengan tools (CI/CD, GitHub Actions bisa filter by prefix).
· Menghindari nama seperti branch-andi, coba-coba, fix2, fix-beneran.

---

12. Peran HTML, CSS, dan JavaScript

Teknologi Peran
HTML (HyperText Markup Language) Struktur halaman web: heading, paragraf, gambar, form, link.
CSS (Cascading Style Sheets) Tampilan/desain: warna, layout, font, responsif, animasi.
JavaScript Interaktivitas & logika: event klik, validasi form, fetch API, manipulasi DOM.

Analogi: HTML = rangka tubuh, CSS = pakaian & makeup, JavaScript = otak & gerakan.

---

13. Dua Lingkungan Tempat JavaScript Dapat Dijalankan

1. Browser (Client-side) → Chrome, Firefox, Safari. JS dijalankan lewat mesin seperti V8 (Chrome), SpiderMonkey (Firefox). Contoh: manipulasi DOM, event klik.
2. Node.js (Server-side) → Runtime JS di luar browser, dibangun di atas V8. Contoh: membuat REST API, baca/tulis file, server Express.

(Tambahan: Deno, Bun, React Native, Electron — tapi 2 di atas yang utama.)

---

14. Perbedaan JavaScript vs ECMAScript

· ECMAScript (ES) = standar/spesifikasi bahasa yang dibuat oleh ECMA International (misal ES5, ES6/ES2015, ES2020).
· JavaScript = implementasi dari standar ECMAScript (ditambah fitur host seperti DOM, alert, fetch di browser).

Analoginya: ECMAScript = blueprint/resep, JavaScript = masakan jadi di browser/Node.

Contoh perbandingan kode:

Gaya lama (ES5):

```javascript
var nama = "Andi";
function sapa(nama) {
  return "Halo, " + nama + "!";
}
console.log(sapa(nama));
```

Gaya modern (ES6+):

```javascript
const nama = "Andi";
const sapa = (nama) => `Halo, ${nama}!`;
console.log(sapa(nama));
```

Perbedaan: var → const/let, function → arrow function, konkatenasi string → template literal.

---

Semoga jawaban ini membantu untuk tugas/ujianmu! 🚀 Jika ada bagian yang ingin diperdalam (misal praktik langsung Git), beri tahu saja.