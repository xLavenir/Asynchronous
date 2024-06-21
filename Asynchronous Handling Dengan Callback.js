/*
Fungsi callback yang digunakan di JavaScript secara standar (convention) memiliki struktur seperti kode di bawah ini.

function callback(error, data) {
  // logika ketika proses asynchronous selesai
}

*/
function getUser(isOffline, callback) {
  setTimeout(() => {
    const user = ["okto", "capung", "bokis"];
    if (isOffline) {
      callback(new Error("Cant retrieve users due offline"), null);
      return;
    }
    callback(null, user);
  }, 3000);
}

function userCallback(error, users) {
  if (error) {
    console.log("Process Failed", error.message);
    return;
  }
  console.log("Process Success, Daftar User : ", users);
}

getUser(false, userCallback);
getUser(true, userCallback);
