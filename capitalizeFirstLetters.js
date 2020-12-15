const assert = require("assert");

function capitalizeFirst(input) {
  if (input.length > 0) {
    return input
      .split(" ")
      .map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  } else {
    return "";
  }
};

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, "function");
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst("javaScript"), "JavaScript");
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst("z"), "Z");
//Check that it works with several words
assert.strictEqual(capitalizeFirst("i am learning TDD"), "I Am Learning TDD");
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(""), "");
