var express = require("express");
var logger = require("morgan");

var apiVersion1 = require("./apiv1.js");

var app = express();

app.use( logger("short") );

app.use("/v1", apiVersion1);

app.listen(3000, function() {
  console.log("App started on port 3000");
});

// Export the app for testing
module.exports = app;

