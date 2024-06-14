# Currency Exchange API

API ini menyediakan layanan untuk konversi nilai tukar mata uang terkini dan informasi historis nilai tukar berdasarkan data yang tersedia.

### Instalasi

1. **Clone repositori ini**
   ```bash
   git clone https://github.com/mancode77/simple-currency-api.git
   ```
   
2. **Masuk ke direktori proyek**
   ```bash
   cd simple-currency-api
   ```
   
3. **Instal dependencies**
   ```bash
   npm install
   ```
   
4. **Buat file `.env` dan tambahkan kunci API Anda (jika diperlukan)**
   ```env
   API_KEY=your_api_key_here
   ```
   
5. **Jalankan server**
   ```bash
   node index.js
   ```
   
   Server akan berjalan di `http://localhost:3000`.

### Endpoint

#### 1. Konversi Nilai Tukar Mata Uang

- **URL**: `/convert`
- **Method**: `GET`
- **Query Parameters**:
  - `from` (string): Mata uang asal (contoh: USD)
  - `to` (string): Mata uang tujuan (contoh: EUR)
  - `amount` (number): Jumlah yang akan dikonversi
- **Response**:
  - `from` (string): Mata uang asal
  - `to` (string): Mata uang tujuan
  - `amount` (number): Jumlah yang dikonversi
  - `convertedAmount` (number): Hasil konversi
  - `rate` (number): Nilai tukar

**Contoh Request**:
```
GET /convert?from=USD&to=EUR&amount=1000
```

**Contoh Response**:
```json
{
  "from": "USD",
  "to": "EUR",
  "amount": 1000,
  "convertedAmount": 929.5,
  "rate": 0.9295
}
```

### Data

Data nilai tukar mata uang diambil dari https://app.exchangerate-api.com
