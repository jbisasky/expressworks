'use strict';

var express = require('express');
var app = express();

// styles the HTML using Stylus middleware
app.use(require('stylus').middleware(process.argv[3]));

// serve the HTML similar to 02/program.js
app.use(express.static(process.argv[3]));

app.listen(process.argv[2] || 3000);
