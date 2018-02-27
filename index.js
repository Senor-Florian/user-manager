const express = require('express');
const userManager = express();
const roles = require('./controllers/roles');
const users = require('./controllers/users');

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

userManager.use(logger);
userManager.use('/roles', roles);
userManager.use('/users', users);

userManager.listen(8080);
