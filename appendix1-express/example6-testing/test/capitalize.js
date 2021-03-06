
var capitalize = require("../capitalize");

var chai = require("chai");
var expect = chai.expect;

describe("capitalize", function() {
  it("capitalizes single words", function() {
    expect(capitalize("express")).to.equal("Express");
    expect(capitalize("cats")).to.equal("Cats");
  });

  it("makes the rest of the string lowercase", function() {
    expect(capitalize("javaScript")).to.equal("Javascript");
  });

  it("leaves empty strings alone", function() {
    expect(capitalize("")).to.equal("");
  });
});

