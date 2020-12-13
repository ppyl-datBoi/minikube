'use strict';

const express = require('express');

// константы
const port = 8080;
const host = '0.0.0.0';
let counter = 0;
// приложение
const app = express();
app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  counter += 1;
  res.end(counter);
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);