'use strict';

const express = require('express');
const cors = require('cors');
const { router: userRouter } = require('./routes/user.route.js');

function createServer() {
  const app = express();

  app.use(cors());

  app.use('/users', express.json(), userRouter);

  // Add a routes to the server
  // Return the server (express app)
  return app;
}

module.exports = {
  createServer,
};
