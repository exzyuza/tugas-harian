```markdown
# 📚 Pelajaran Hari Ini — Git & GitHub

**Nama:** [MUHAMAD NIZZAR RAMADHAN
]

---

## 🎯 Materi yang Dipelajari

### 1. Push ke Repository Git
Belajar cara mengirim perubahan dari komputer lokal ke repository GitHub menggunakan perintah:

```bash
git add .
git commit -m "pesan commit"
git push origin main
```

2. Mengatasi Error "Updates were rejected" / "Note about fast-forwards"

Menghadapi error saat push karena branch lokal tertinggal dari remote:

Penyebab:

· Ada commit baru di GitHub yang belum ditarik ke lokal
· Git menolak push untuk mencegah hilangnya commit orang lain

Solusi:

```bash
git pull origin main
# selesaikan konflik jika ada
git push origin main
```

Alternatif (riwayat lebih rapi):

```bash
git pull origin main --rebase
git push origin main
```

3. Hal Penting yang Diingat

· ❌ Jangan gunakan git push --force sembarangan → bisa menghapus commit orang lain
· ✅ Selalu git pull sebelum git push
· ✅ Selesaikan konflik dengan hati-hati sebelum commit

---

🧠 Kesimpulan

Hari ini saya belajar bahwa sebelum push ke GitHub, penting untuk menarik perubahan terbaru (git pull) agar tidak terjadi konflik dan error. Kerja sama tim di Git membutuhkan komunikasi dan kehati-hatian.

---

Ditulis sebagai catatan pembelajaran Git & GitHub.

```

---

✅ **Sudah digabungkan!** Salin seluruh isi di atas (mulai dari `# 📚 Pelajaran Hari Ini`) ke dalam file `README.md` di project Anda.

📝 **Langkah selanjutnya:**
1. Ganti `[Tulis Nama Anda di Sini]` dengan nama asli Anda
2. Simpan file
3. Jalankan:
```bash
git add README.md
git commit -m "menambahkan catatan pelajaran hari ini"
git push origin main
```

🚀 Selamat belajar Git!