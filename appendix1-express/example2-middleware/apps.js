var express = require("express");
var http = require("http");
var logger = require("morgan");

var app = express();


// Log middleware with morgan
app.use( logger("short") );

// Authorization middleware
app.use(function(request, response, next) {
  var minute = (new Date()).getMinutes();
  if ((minute % 2) === 0) {
    next();
  } else {
   response.statusCode = 403;
   response.end("Not authorized.");
  }
});

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!"); 
});


http.createServer(app).listen(3000);

