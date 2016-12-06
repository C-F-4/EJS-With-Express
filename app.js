var express = require('express');
var path = require('path');
var app = express();

const port = 8080;

// configure app
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routing
app.get('/', function(req, res) {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/html');
  var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
  var tagline = "Hi, I'm the tagline";
  res.render('index.ejs', {
    drinks: drinks,
    tagline: tagline
  });
});

app.listen(port, function() {
  console.log(`Server running at http://localhost:${port}/`);
});


/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
