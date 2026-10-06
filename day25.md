Jawaban Lengkap: Alur Kerja Git & GitHub

1. Dua Arah Aliran Kode: Push dan Pull

Push adalah proses mengirim/mengunggah perubahan kode dari komputer lokal ke repositori remote (GitHub). Pull adalah proses mengambil/mengunduh perubahan terbaru dari repositori remote ke komputer lokal.

Contoh situasi Push:
Kamu selesai memperbaiki fitur login di komputer lokalmu, lalu ingin menyimpan hasilnya ke GitHub agar bisa diakses tim atau sebagai backup. Kamu melakukan git push.

Contoh situasi Pull:
Rekan timmu baru saja menambahkan fitur baru ke repositori GitHub. Sebelum kamu mulai bekerja, kamu perlu mengambil perubahan tersebut agar kode lokalmu tetap update. Kamu melakukan git pull.

---

2. Fungsi git push dan Opsi -u

Fungsi git push: Mengirim commit dari repositori lokal ke repositori remote (misalnya GitHub), sehingga perubahan bisa dilihat dan diakses orang lain.

a. Fungsi opsi -u pada git push -u origin main:
Opsi -u (singkatan dari --set-upstream) menghubungkan branch lokal main dengan branch remote origin/main. Setelah ditetapkan, Git akan "mengingat" pasangan branch tersebut.

b. Jika opsi -u tidak disertakan pada push pertama:
Push tetap berhasil, tetapi branch lokal tidak terhubung ke branch remote. Akibatnya, pada push berikutnya kamu harus menuliskan tujuan secara lengkap, misalnya git push origin main.

c. Mengapa setelah -u ditetapkan cukup git push saja:
Karena Git sudah menyimpan konfigurasi upstream. Git tahu branch lokal mana yang berpasangan dengan branch remote mana, sehingga cukup mengetik git push tanpa argumen tambahan.

---

3. Perbedaan git clone dan git init

· git init: Membuat repositori Git baru dari nol di dalam folder yang sudah ada. Belum ada riwayat commit, belum terhubung ke remote.
· git clone: Menyalin repositori yang sudah ada di remote (GitHub) ke komputer lokal, lengkap dengan seluruh riwayat commit, branch, dan konfigurasi remote.

Mengapa setelah git clone tidak perlu git init lagi?
Karena git clone secara otomatis sudah:

1. Membuat folder proyek.
2. Menginisialisasi repositori Git di dalamnya (setara git init).
3. Menambahkan remote origin yang menunjuk ke GitHub.
4. Mengunduh semua riwayat commit dan branch.

Jadi menjalankan git init lagi akan sia-sia atau bahkan mengacaukan konfigurasi.

---

4. Fungsi git pull dan Pentingnya dalam Tim

Fungsi git pull: Mengambil perubahan terbaru dari remote (git fetch) dan langsung menggabungkannya ke branch lokal (git merge). Sederhananya: git pull = git fetch + git merge.

Mengapa penting dalam kerja tim:
Karena banyak orang bekerja di repositori yang sama. Tanpa pull, kode lokal bisa ketinggalan jauh dari kode di GitHub, memicu konflik saat push, atau menimbulkan bug karena bekerja di atas versi lama.

2 momen spesifik menjalankan git pull:

1. Sebelum mulai bekerja di pagi hari atau saat memulai sesi coding, agar kode lokal up-to-date.
2. Sebelum melakukan push, agar perubahanmu dibangun di atas versi terbaru dan menghindari konflik.

---

5. Alur Kerja Harian yang Direkomendasikan

```bash
git pull origin main
git switch -c fitur-baru
# ... edit file ...
git add .
git commit -m "Menambahkan fitur baru"
git push -u origin fitur-baru
```

Penjelasan tiap langkah:

1. git pull origin main — Mengambil perubahan terbaru dari remote agar kode lokal tidak ketinggalan. Penting agar tidak bekerja di atas versi lama.
2. git switch -c fitur-baru — Membuat branch baru untuk bekerja. Penting agar perubahan tidak langsung mengotori main dan memudahkan review.
3. Edit file — Melakukan pekerjaan sebenarnya.
4. git add . — Menambahkan perubahan ke staging area. Penting agar file yang di-commit sudah terpilih dengan benar.
5. git commit -m "..." — Menyimpan snapshot perubahan dengan pesan jelas. Penting untuk dokumentasi riwayat.
6. git push -u origin fitur-baru — Mengirim branch ke GitHub. Penting agar bisa dibuat Pull Request dan direview tim.

---

6. Apa Itu Fork?

Fork adalah tindakan menyalin repositori milik orang lain ke akun GitHub milikmu sendiri. Fork terjadi di sisi server GitHub (bukan di komputer lokal).

2 situasi nyata perlunya fork:

1. Berkontribusi ke proyek open source — Kamu tidak punya izin menulis langsung ke repo orang lain, jadi kamu fork dulu, edit di fork-mu, lalu ajukan Pull Request.
2. Mengembangkan proyek orang lain untuk keperluan pribadi — Misalnya kamu ingin memodifikasi library open source untuk kebutuhan perusahaan tanpa mengganggu repo aslinya.

Perbedaan mendasar fork vs clone:

Aspek Fork Clone
Lokasi Di GitHub (server) Di komputer lokal
Tujuan Menyalin repo orang lain ke akunmu Menyalin repo (milikmu/orang lain) ke lokal
Hubungan dengan repo asli Tetap terhubung sebagai "upstream" Tidak otomatis terhubung ke repo asli

Sering kali keduanya dipakai bersamaan: fork dulu di GitHub, lalu clone fork tersebut ke lokal.

---

7. Enam Langkah Alur Kontribusi Open Source (Fork + Pull Request)

1. Fork repositori di GitHub
   Tujuan: Membuat salinan repo milik orang lain di akunmu sendiri, karena kamu tidak punya akses tulis ke repo asli.
2. Clone fork ke komputer lokal
   Tujuan: Mendapatkan salinan kode di lokal agar bisa diedit.
   ```bash
   git clone https://github.com/usernamekamu/proyek.git
   ```
3. Buat branch baru untuk perubahan
   Tujuan: Memisahkan pekerjaanmu dari main agar rapi dan mudah direview.
   ```bash
   git switch -c perbaikan-fitur
   ```
4. Lakukan perubahan, commit, dan push ke fork
   Tujuan: Menyimpan pekerjaan dan mengunggahnya ke GitHub (di fork milikmu).
   ```bash
   git add .
   git commit -m "Memperbaiki bug X"
   git push origin perbaikan-fitur
   ```
5. Ajukan Pull Request ke repo asli
   Tujuan: Meminta pemilik repo asli meninjau dan menggabungkan perubahanmu.
6. Diskusi & revisi (jika diminta)
   Tujuan: Menanggapi masukan reviewer dengan memperbaiki kode, lalu push ulang ke branch yang sama — PR otomatis terupdate.

---

8. Apa Itu Pull Request (PR)?

Pull Request adalah permintaan resmi untuk menggabungkan perubahan dari satu branch (biasanya di fork atau branch fitur) ke branch lain (biasanya main) di repositori. PR menjadi wadah diskusi, review kode, dan persetujuan sebelum merge.

Mengapa tim profesional tidak langsung merge ke main:
Karena main harus selalu dalam kondisi stabil dan siap rilis. Merge langsung berisiko memasukkan bug, kode tidak konsisten, atau konflik ke produksi.

2 keuntungan menggunakan PR:

1. Code review — Anggota tim lain bisa memeriksa kualitas, menemukan bug, dan memberi saran sebelum kode masuk.
2. Jejak diskusi & dokumentasi — Setiap perubahan punya catatan: siapa mengubah apa, kapan, dan mengapa. Berguna untuk audit dan pembelajaran.

---

9. Studi Kasus: Andi dan Budi

a. Apa yang kemungkinan besar terjadi saat Budi push?
Push Budi akan ditolak (rejected) oleh GitHub dengan pesan seperti "Updates were rejected because the remote contains work that you do not have locally."

b. Mengapa hal ini bisa terjadi?
Karena Budi belum melakukan git pull setelah Andi push. Kode lokal Budi masih berbasis versi kemarin, sementara remote sudah punya commit baru dari Andi. Git menolak push agar tidak menimpa perubahan Andi.

c. Apa yang seharusnya Budi lakukan sebelum mengedit?
Menjalankan git pull terlebih dahulu agar kode lokalnya sinkron dengan versi terbaru di GitHub.

d. Urutan perintah yang seharusnya dilakukan Budi sejak pagi:

```bash
git pull origin main
# ... baru mulai edit file ...
git add style.css
git commit -m "Memperbarui style"
git push
```

---

10. Studi Kasus: Alur Kerja Lengkap

```bash
git clone https://github.com/andi/proyek.git
cd proyek
git switch -c perbaikan-bug
touch fix.js
git add fix.js
git commit -m "Memperbaiki bug pada validasi form"
git push origin perbaikan-bug
```

a. Apa yang dilakukan git clone pada baris pertama?
Menyalin seluruh repositori proyek milik Andi dari GitHub ke komputer lokal, lengkap dengan riwayat commit, branch, dan remote origin.

b. Mengapa membuat branch perbaikan-bug dulu, tidak langsung di main?
Karena main harus tetap stabil. Bekerja di branch terpisah memungkinkan perubahan diuji dan direview dulu sebelum digabungkan. Juga memudahkan jika ada beberapa perbaikan paralel.

c. Tujuan git push origin perbaikan-bug — mengapa tidak git push saja?
Karena branch perbaikan-bug baru dibuat dan belum punya upstream. Jadi harus disebutkan tujuan (origin) dan nama branch (perbaikan-bug) secara eksplisit. Jika hanya git push, Git akan bingung karena belum tahu ke mana harus push.

d. Langkah di web GitHub setelah perintah terakhir?
Buka repositori di GitHub, akan muncul tombol "Compare & pull request" untuk branch perbaikan-bug. Klik, isi judul dan deskripsi PR, lalu klik "Create pull request".

e. Jika pemilik repo meminta revisi, apa yang harus dilakukan?
Alurnya:

1. Kembali ke komputer lokal, pastikan masih di branch perbaikan-bug.
2. Lakukan perbaikan sesuai masukan reviewer.
3. git add . lalu git commit -m "Revisi sesuai review".
4. git push origin perbaikan-bug (cukup git push karena upstream sudah ada).
5. PR di GitHub otomatis terupdate — tidak perlu membuat PR baru.
6. Beri komentar di PR bahwa revisi sudah dilakukan, lalu tunggu approval ulang.