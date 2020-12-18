const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("rectangle", () => {
    const Rectangle1 = new Rectangle(3, 3);
  it("is a square", () => {
    assert.strictEqual(Rectangle1.isSquare(), true);
  });
  const Rectangle2 = new Rectangle(11, 9);
  it("is not a square", () => {
    assert.strictEqual(Rectangle2.isSquare(), false);
  });
  const area = new Rectangle(13, 7);
  it("is area", () => {
    assert.strictEqual(area.getArea(),91);
  });
  const parameters = new Rectangle(13, 7);
  it("is parameter", () => {
    assert.strictEqual(parameters.getPerimeter(),40);
  });
});