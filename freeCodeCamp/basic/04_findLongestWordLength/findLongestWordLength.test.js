const findLongestWordLength = require("./findLongestWordLength");

xtest("finds longest word length", () => {
  expect(
    findLongestWordLength("The quick brown fox jumped over the lazy dog")
  ).toBe(6);
  expect(findLongestWordLength("May the force be with you")).toBe(5);
  expect(findLongestWordLength("Google do a barrel roll")).toBe(6);
  expect(
    findLongestWordLength(
      "What is the average airspeed velocity of an unladen swallow"
    )
  ).toBe(8);
  expect(
    findLongestWordLength(
      "What if we try a super-long word such as otorhinolaryngology"
    )
  ).toBe(19);
});
