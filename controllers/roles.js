const express = require('express');
const roles = express();
var rolesDB = [];
var idCounter = 0;

const arrayRemove = (array, value) => {
  let index = array.indexOf(value);
  array.splice(index, 1);
};

// index
roles.get('/', (req, res) => {
  res.json(rolesDB);
});

// show
roles.get('/:id', (req, res) => {
  let id = req.params.id;
  res.json({
    id: id,
    action: 'show'
  });
});

// new
roles.get('/new', (req, res) => {
  res.json({action: 'new'});
});

// create
roles.post('/create', (req, res) => {
  let rolename = req.query.rolename;
  let object = {id: idCounter, rolename: rolename};
  rolesDB.push(object);
  idCounter++;
  res.json({action: 'create', success: true});
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
  let id = req.params.id;
  arrayRemove(rolesDB, id);
  res.json({id: id, action: 'delete'});
});

module.exports = roles;
