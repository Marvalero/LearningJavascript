var express = require("express");

var api = express.Router();

api.get("/random/:min/:max", function(req, res) {
  var min = parseInt(req.params.min);
  var max = parseInt(req.params.max);

  if (isNaN(min) || isNaN(max)) {
    res.status(400);
    res.json({ error: "Bad request." });
    return;
  }

  var result = Math.round((Math.random() * (max - min)) + min);
  res.json({ result: result });
});

// Export the router so that other files can use it
module.exports = api;

