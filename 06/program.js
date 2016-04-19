'use strict';

var express = require('express');
var app = express();

app.put('/message/:ID', function(req, res) {
  var str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.ID)
      .digest('hex');
  res.send(str);
});

app.listen(process.argv[2]);
