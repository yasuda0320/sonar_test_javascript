let express = require('express');
let app = express(); // Noncompliant

app.get('/', function (req, res) {
  res.send('hello')
});

