const expenseService = require('../services/expense.service.js');
const userService = require('../services/user.service.js');

const get = (_req, res) => {
  res.send(expenseService.getAll());
};

const getById = (req, res) => {
  const { id } = req.params;

  const expense = expenseService.getById(id);

  if (!expense) {
    res.sendStatus(404);

    return;
  }

  res.send(expense);
};

const create = (req, res) => {
  const { userId, title, amount, category, note } = req.body;
  const existedUser = userService.getById(userId);

  if (!userId || !title || !amount || !category || !note || !existedUser) {
    res.sendStatus(400);
  }

  const newExpense = expenseService.create({
    userId,
    title,
    amount,
    category,
    note,
  });

  res.statusCode = 201;

  res.send(newExpense);
};

const remove = (req, res) => {
  const { id } = req.params;

  if (!expenseService.getById(id)) {
    res.sendStatus(404);

    return;
  }

  expenseService.remove(id);

  res.sendStatus(204);
};

const update = (req, res) => {
  const data = req.body;
  const { id } = req.params;

  if (!id) {
    res.sendStatus(404);

    return;
  }

  if (!userService.getById(data.userId)) {
    res.sendStatus(404);

    return;
  }

  const newExpense = expenseService.update({ id, data });

  res.send(newExpense);
};

module.exports = {
  get,
  getById,
  remove,
  create,
  update,
};
