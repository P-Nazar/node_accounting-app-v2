const userService = require('../services/user.services.js');

const get = (_req, res) => {
  res.send(userService.getAll());
};

const getById = (req, res) => {
  const { id } = req.params;

  const user = userService.getById(id);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
};

const create = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.sendStatus(422);
  }

  const newUser = userService.create(name);

  res.statusCode = 201;

  res.send(newUser);
};

const remove = (req, res) => {
  const { id } = req.params;

  if (!userService.getById(id)) {
    res.sendStatus(404);

    return;
  }

  userService.remove(id);

  res.sendStatus(204);
};

const update = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = userService.getById(id);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  if (typeof name !== 'string') {
    res.send(user);

    return;
  }

  res.send(user);
};

module.exports = {
  get,
  getById,
  remove,
  create,
  update,
};
