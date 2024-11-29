const { v4: uuidv4 } = require('uuid');

let expenses = [];

const resetExpenses = () => {
  expenses = [];
};

const getAll = () => {
  return expenses;
};

const getById = (id) => {
  return expenses.find((expense) => expense.id === id) || null;
};

const create = ({ userId, title, amount, category, note }) => {
  const newExpense = {
    id: uuidv4(),
    userId,
    spentAt: new Date(),
    title,
    amount,
    category,
    note,
  };

  expenses.push(newExpense);

  return newExpense;
};

const remove = (id) => {
  const filteredExpenses = expenses.filter((item) => item.id !== id);

  expenses = filteredExpenses;

  return expenses;
};

const update = ({ id, data }) => {
  const expense = expenses.find((item) => item.id === id);

  const newExpense = {
    ...expense,
  };

  for (const key in data) {
    if (data[key]) {
      newExpense[key] = data[key];
    }
  }

  Object.assign(expense, newExpense);

  return newExpense;
};

module.exports = {
  getAll,
  getById,
  remove,
  update,
  create,
  resetExpenses,
};
