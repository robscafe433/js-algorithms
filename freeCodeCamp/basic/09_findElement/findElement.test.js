const findElement = require("./findElement");

xtest("find first element in array given a truth test", () => {
  expect(
    findElement([1, 3, 5, 8, 9, 10], function (num) {
      return num % 2 === 0;
    })
  ).toBe(8);
  expect(
    findElement([1, 3, 5, 9], function (num) {
      return num % 2 === 0;
    })
  ).toBeUndefined();
});
