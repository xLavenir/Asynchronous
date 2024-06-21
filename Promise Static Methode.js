// Promise All

/*
Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel.
Method ini menerima sebuah array yang berisi beberapa Promise sebagai argumen.
Fungsi ini akan mengembalikan sebuah Promise baru dan membawa nilai yang 
di-resolve dalam masing-masing Promise yang diletakkan pada array argumen. 
*/

// Contoh penggunaan Promise.all():

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

// Promise Race

/* 
Promise.race() digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all().
Namun, ia hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.
*/

const promise4 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise5 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise6 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3]).then((value) =>
  console.log(value)
);
