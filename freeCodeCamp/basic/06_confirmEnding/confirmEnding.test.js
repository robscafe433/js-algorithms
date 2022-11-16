const confirmEnding = require("./confirmEnding");

xtest("confirms ending", () => {
  expect(confirmEnding("Bastian", "n")).toBe(true);
  expect(confirmEnding("Congratulation", "on")).toBe(true);
  expect(confirmEnding("Connor", "n")).toBe(false);
  expect(
    confirmEnding(
      "Walking on water and developing software from a specification are easy if both are frozen",
      "specification"
    )
  ).toBe(false);
  expect(confirmEnding("He has to give me a new name", "name")).toBe(true);
  expect(confirmEnding("Open sesame", "same")).toBe(true);
  expect(confirmEnding("Open sesame", "sage")).toBe(false);
  expect(confirmEnding("Open sesame", "game")).toBe(false);
  expect(
    confirmEnding(
      "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
      "mountain"
    )
  ).toBe(false);
  expect(confirmEnding("Abstraction", "action")).toBe(true);
});
