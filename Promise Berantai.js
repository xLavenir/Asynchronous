function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 1000000) {
        reject(new Error("Maaf, Saldo Anda Tidak Mencukupi Untuk Penarikan!"));
      }
      resolve(amount);
    }, 1000);
  });
}

function buyMovieTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 50000) {
        reject(new Error("Uang Tidak Mencukupi Untuk Membeli Tiket"));
      }
      resolve("Tiket Berhasil Dibeli!");
    }, 2000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error("Anda Tidak Memiliki Tiket, Dilarang Masuk!"));
      }
      resolve("Selamat Menonton!");
    }, 3000);
  });
}

function watchMovie() {
  withDrawMoney(100000)
    .then((money) => {
      return buyMovieTicket(money);
    })
    .then((ticket) => {
      return goInsideCinema(ticket);
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
watchMovie();
