'use strict';

var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], (err, data) => {;
    if(err) {
      res.sendStatus(500);
    }
    var books;
    try {
      books = JSON.parse(data);
    } catch(err) {
      res.sendStatus(500);
    }
    res.json(books);
  });
});

app.listen(process.argv[2] || 3000);
