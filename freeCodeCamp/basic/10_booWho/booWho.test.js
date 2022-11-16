const booWho = require("./booWho");

xtest("check if value is boolean primitive", () => {
  expect(booWho(true)).toBe(true);
  expect(booWho(false)).toBe(false);
  expect(booWho([1, 2, 3])).toBe(false);
  expect(booWho([].slice())).toBe(false);
  expect(booWho({ a: 1 })).toBe(false);
  expect(booWho(1)).toBe(false);
  expect(booWho(NaN)).toBe(false);
  expect(booWho("a")).toBe(false);
  expect(booWho("true")).toBe(false);
  expect(booWho("false")).toBe(false);
});
