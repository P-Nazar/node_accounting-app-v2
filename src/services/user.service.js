const { v4: uuidv4 } = require('uuid');

let users = [];

const resetUsers = () => {
  users = [];
};

const getAll = () => {
  return users;
};

const getById = (id) => {
  return users.find((person) => person.id === id) || null;
};

const create = (name) => {
  const newUser = {
    id: uuidv4(),
    name,
  };

  users.push(newUser);

  return newUser;
};

const remove = (id) => {
  const filteredUsers = users.filter((person) => person.id !== id);

  users = filteredUsers;

  return users;
};

const update = ({ id, name }) => {
  const user = getById(id);

  Object.assign(user, { name });

  return user;
};

module.exports = {
  getAll,
  getById,
  remove,
  update,
  create,
  resetUsers,
};
