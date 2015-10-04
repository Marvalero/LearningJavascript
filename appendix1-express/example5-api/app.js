var express = require("express");
var logger = require("morgan");

var apiVersion1 = require("./apiv1.js");
var apiVersion2 = require("./apiv2.js");

var app = express();

app.use( logger("short") );

app.use("/v1", apiVersion1);
app.use("/v2", apiVersion2);

app.listen(3000, function() {
  console.log("App started on port 3000");
});

