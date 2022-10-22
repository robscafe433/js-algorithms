const factorialize = require("./factorialize");

xtest("factorializes a number", () => {
  expect(factorialize(5)).toBe(120);
  expect(factorialize(10)).toBe(3628800);
  expect(factorialize(0)).toBe(1);
});
