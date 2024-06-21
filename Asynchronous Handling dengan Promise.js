function getUsers(isOffline) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["okto", "capung", "bokis"];
      if (isOffline) {
        return reject(new Error("Cant retrieve users due offline"));
      }
      return resolve(users);
    });
  });
}

getUsers(true)
  .then((users) => console.log(users))
  .catch((error) => console.log(error.message));
