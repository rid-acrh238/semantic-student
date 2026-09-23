# Troubleshooting Bendahara Management: PHP 8.5 & Laravel 12

## 1. Kondisi Awal

Project:

```text
bendahara-management
```

PHP:

```text
PHP 8.5.10
Zend Engine v4.5.10
```

Pada `composer.json`, requirement PHP:

```json
"php": "^8.2"
```

Requirement tersebut **tidak perlu diubah**, karena `^8.2` masih mencakup PHP 8.5.

---

## 2. Masalah Dependency Laravel Excel

Saat menjalankan Composer, ditemukan konflik:

```text
maatwebsite/excel 3.1
        ↓
phpoffice/phpspreadsheet 1.30.x
        ↓
Tidak kompatibel dengan PHP 8.5
```

Selain itu ditemukan kebutuhan extension:

```text
ext-gd
ext-iconv
```

### Solusi

Upgrade Laravel Excel dari versi 3.1 ke 4.x:

```bash
composer require maatwebsite/excel:^4.0 -W
```

Laravel Excel 4.x menggunakan PhpSpreadsheet 5.x yang kompatibel dengan PHP 8.5.

---

## 3. Mengaktifkan GD

Pengecekan package:

```bash
pacman -Q | grep -E 'gd|libgd'
```

Ditemukan:

```text
gd
php-gd 8.5.10-1
```

Extension GD kemudian diaktifkan pada konfigurasi PHP.

Verifikasi:

```bash
php -m | grep gd
```

Target:

```text
gd
```

---

## 4. Mengaktifkan iconv

File extension tersedia di:

```text
/usr/lib/php/modules/iconv.so
```

Namun extension belum dimuat oleh PHP.

Setelah diaktifkan pada konfigurasi PHP, verifikasi:

```bash
php -m | grep iconv
```

Target:

```text
iconv
```

---

## 5. Masalah SQLite

Saat menjalankan:

```bash
php artisan migrate
```

muncul error:

```text
could not find driver
(Connection: sqlite)
```

Pengecekan:

```bash
php -m | grep -E 'sqlite|pdo'
```

sebelumnya hanya menghasilkan:

```text
pdo_mysql
```

Artinya driver SQLite untuk PDO belum tersedia.

### Mencari package yang diperlukan

```bash
sudo pacman -Fy
pacman -F pdo_sqlite.so
```

Ditemukan:

```text
extra/php-sqlite 8.5.10-1
```

### Install

```bash
sudo pacman -S php-sqlite
```

Extension SQLite kemudian diaktifkan:

```ini
extension=sqlite3
extension=pdo_sqlite
```

Verifikasi:

```bash
php -m | grep -E 'sqlite|pdo'
```

Target:

```text
pdo_mysql
pdo_sqlite
sqlite3
```

---

## 6. Konfigurasi Database

`php artisan optimize:clear` sempat menghasilkan:

```text
Database file at path [bendahara] does not exist.
(Connection: sqlite, Database: bendahara)
```

Error tersebut menunjukkan Laravel menggunakan SQLite, tetapi nilai `DB_DATABASE` tidak menunjuk ke file SQLite yang tersedia.

Konfigurasi database berada di:

```text
.env
```

Periksa dengan:

```bash
grep -E '^DB_' .env
```

Pastikan konfigurasi SQLite menunjuk ke database yang benar.

Contoh:

```env
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database.sqlite
```

---

## 7. Verifikasi Laravel

Setelah dependency berhasil dipasang, Laravel sudah dapat membaca route:

```bash
php artisan route:list
```

Terdapat route seperti:

```text
/login
/dashboard
/reports
/transactions
/settings
```

Tidak terdapat route:

```text
/admin
```

Sehingga dashboard aplikasi saat ini menggunakan:

```text
/dashboard
```

bukan `/admin`.

---

## 8. Masalah APP_KEY

Saat membuka:

```text
http://127.0.0.1:8000/login
```

Laravel menghasilkan:

```text
Illuminate\Encryption\MissingAppKeyException

No application encryption key has been specified.
```

### Solusi

Generate application key:

```bash
php artisan key:generate
```

Perintah tersebut mengisi:

```env
APP_KEY=base64:...
```

Kemudian bersihkan cache:

```bash
php artisan optimize:clear
```

---

## 9. Menjalankan Aplikasi

Untuk menjalankan Laravel:

```bash
php artisan serve
```

Kemudian buka:

```text
http://127.0.0.1:8000
```

Untuk development frontend, jalankan:

```bash
npm run dev
```

---

## 10. Struktur Alur Penyelesaian

```text
PHP 8.5
    ↓
Laravel 12
    ↓
Composer dependency conflict
    ↓
Laravel Excel 3.1
    ↓
Upgrade ke Laravel Excel 4.x
    ↓
GD + iconv
    ↓
Aktifkan PHP extensions
    ↓
SQLite PDO driver
    ↓
Install php-sqlite
    ↓
APP_KEY
    ↓
php artisan key:generate
    ↓
Laravel dapat boot
    ↓
Route dapat dibaca
```

---

## 11. Status Komponen

| Komponen               | Status              |
| ---------------------- | ------------------- |
| PHP 8.5.10             | ✅                   |
| Laravel 12.69.2        | ✅                   |
| Composer dependencies  | ✅                   |
| Laravel Excel 4.x      | ✅                   |
| PhpSpreadsheet 5.x     | ✅                   |
| GD                     | ✅                   |
| iconv                  | ✅                   |
| PDO MySQL              | ✅                   |
| PDO SQLite             | ✅                   |
| SQLite3                | ✅                   |
| APP_KEY                | ✅                   |
| Laravel routes         | ✅                   |
| Database configuration | ⚠️ Perlu dipastikan |
| Halaman `/dashboard`   | ✅ Route tersedia    |

---

## 12. Perintah Utama

### Composer

```bash
composer require maatwebsite/excel:^4.0 -W
composer check-platform-reqs
```

### PHP Extensions

```bash
sudo pacman -S php-gd
sudo pacman -S php-sqlite
```

### Laravel

```bash
php artisan key:generate
php artisan migrate
php artisan optimize:clear
php artisan route:list
php artisan serve
```

### Frontend

```bash
npm run dev
```

---

## 13. Catatan Pengembangan

Project menggunakan Laravel dengan Inertia/React, sehingga modifikasi aplikasi umumnya terbagi menjadi:

```text
resources/js/
    ↓
Tampilan frontend

app/Http/Controllers/
    ↓
Logika aplikasi

app/Models/
    ↓
Representasi data/database

database/migrations/
    ↓
Struktur database

routes/web.php
    ↓
URL dan routing
```

Untuk mengetahui file frontend yang tersedia:

```bash
find resources/js -maxdepth 3 -type f | sort
```

Untuk mengetahui controller:

```bash
find app/Http/Controllers -maxdepth 2 -type f | sort
```

Dengan struktur tersebut, modifikasi website sebaiknya dilakukan berdasarkan fungsi masing-masing layer, bukan langsung mengubah file secara acak.
