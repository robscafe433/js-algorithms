const convertCToF = require("./convertCToF");

xtest("converts Celsius to Farenheit", () => {
  expect(convertCToF(-30)).toBe(-22);
  expect(convertCToF(-10)).toBe(14);
  expect(convertCToF(0)).toBe(32);
  expect(convertCToF(20)).toBe(68);
  expect(convertCToF(30)).toBe(86);
});
