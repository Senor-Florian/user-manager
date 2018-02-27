const express = require('express');
const roleModel = require('../models/role');
const roles = express();

// index
roles.get('/', (req, res) => {
  let allRoles = roleModel.getAll();
  res.json(allRoles);
});

// show
roles.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let role = roleModel.get(id);
  res.json(role);
});

// new
roles.get('/new', (req, res) => {
  res.json({action: 'new'});
});

// create
roles.post('/create', (req, res) => {
  let rolename = req.query.rolename;
  let role = roleModel.create({rolename: rolename});
  res.json({action: 'created', success: true, data: role});
});

// edit
roles.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'edit'});
});

// update
roles.put('/:id/update', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'update'});
});

// destroy
roles.delete('/:id/delete', (req, res) => {
  let id = parseInt(req.params.id);
  let role = roleModel.destroy(id);
  res.json(role);
});

module.exports = roles;
