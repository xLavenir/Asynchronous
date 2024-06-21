//  Callback merupakan mekanisme untuk memanggil kembali code yang ada di program dari proses async
//  Callback biasanya dibuat dalam bentuk function yang akan dipanggil kembali ketika proses async selesai
// Dengan menggunakan callback, program bisa menerima informasi yang dibutuhkan dari proses yang berjalan secara async

// Contoh Asynchronous Process yang menerapkan callback

// setTimeout(handler, time) digunakan untuk menjalankan proses async sekali dalam waktu tertentu
// setInterval(handler, time) digunakan untuk menjalankan proses async berulang dalam waktu tertentu

// Contoh 1

console.log("Selamat datang!");

// setTimeout(() => {
//   console.log("Terima kasih sudah menunggu!");
// }, 3000);
setInterval(() => {
  console.log("Sedang Diprosess ... ");
}, 2000);

console.log("Ada yang bisa dibantu?");
