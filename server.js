const express = require('express');
const avatar = require('gradient-avatar');
const path = require('path');
const app = express();

app.get('/:id', (req, res) => {
  res.type('svg');
  res.send(avatar(req.params.id, !isNaN(req.query.size) ? Number(req.query.size) : 100));
});

app.all('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.all('/*', (req, res) => {
  res.status(404);
  res.send('404 - Not found');
});

app.listen(3000);
