const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/users', (req, res) => {
  const users = [{name: 'eldar'}, {name: 'muhtar'}, {name: 'john'}];
res.send(users);
});

app.listen(3000);

module.exports.app = app;