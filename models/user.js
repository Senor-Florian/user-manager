let usersDB = [];
var idCounter = 0;

const getAll = () => {
  return usersDB;
};

const get = (id) => {
  /*
  usersDB.forEach((user) => {
    if (user.id === id) {
      return user;
    }
  });
  */
  return usersDB.find((user) => {
    return user.id === id;
  });
};

const create = (params) => {
  let newUser = {id: idCounter, username: params.username};
  usersDB.push(newUser);
  idCounter++;
  return newUser;
};

const destroy = (id) => {
  let user = get(id);
  let index = usersDB.indexOf(user);
  usersDB.splice(index, 1);
  return user;
};

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  destroy: destroy
};
