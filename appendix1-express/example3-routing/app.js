var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

// Middleware -express.static- that shows files of a path
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// Route GET /
app.get("/", function(request, response) {
  response.end("Welcome to my homepage!");
});

// Route GET /about
app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

// Route GET /weather
app.get("/hello/:who", function(request, response) {
  response.end("Hello, " + request.params.who + ".");
});

// Middleware: otherwise: NOT FOUND
app.use(function(request, response) {
  response.statusCode = 404;
  response.end("404!");
});

// Start server
http.createServer(app).listen(3000);

