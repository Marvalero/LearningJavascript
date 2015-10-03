var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

// Our views are going to be in /views folder
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// We render the response with our message
app.get("/", function(request, response) {
  response.render("index", {
    message: "Hey everyone! This is my webpage."
  });
});

http.createServer(app).listen(3000);

