const repeatStringNumTimes = require("./repeatStringNumTimes");

xtest("repeats a string num times", () => {
  expect(repeatStringNumTimes("*", 3)).toBe("***");
  expect(repeatStringNumTimes("abc", 3)).toBe("abcabcabc");
  expect(repeatStringNumTimes("abc", 4)).toBe("abcabcabcabc");
  expect(repeatStringNumTimes("abc", 1)).toBe("abc");
  expect(repeatStringNumTimes("*", 8)).toBe("********");
  expect(repeatStringNumTimes("abc", -2)).toBe("");
  expect(repeatStringNumTimes("abc", 0)).toBe("");
});
