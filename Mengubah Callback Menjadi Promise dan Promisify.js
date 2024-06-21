const { promisify } = require("util");

function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];
    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then((users) => console.log(users)) // ['John', 'Jack', 'Abigail']
  .catch((err) => console.log(err.message));

getUsersPromise(true)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message)); // cannot retrieve users due offline

/* 
  catatan ketika Anda hendak mengubah fungsi asynchronous callback-based menjadi Promise-based menggunakan util.promisify().

Promisify selalu menganggap callback berada pada argumen paling akhir sebuah fungsi asynchronous. 
Dengan begitu, Anda tidak dapat menggunakan promisify jika callback berada di posisi awal ataupun tengah argumen.

Promisify akan bekerja dengan baik jika callback memiliki struktur argumen callback(error, data).
Jika callback memiliki struktur argumen di luar aturan tersebut, nilai yang dibawa oleh Promise ketika fulfilled dan rejected bisa tertukar.
  */
