var express = require('express');

var app = express();

// use the provided path or fall back to __dirname + 'public' if not provided
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2] || 3000);
