var express = require("express");

var api = express.Router();

api.get("/", function(req, res) {
  res.type("text");
  res.send(req.headers["user-agent"]);
});

// Export the router so that other files can use it
module.exports = api;

