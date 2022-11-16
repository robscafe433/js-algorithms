const truncateString = require("./truncateString");

xtest("truncates string", () => {
  expect(truncateString("A-tisket a-tasket A green and yellow basket", 8)).toBe(
    "A-tisket..."
  );
  expect(
    truncateString("Peter Piper picked a peck of pickled peppers", 11)
  ).toBe("Peter Piper...");
  expect(
    truncateString(
      "A-tisket a-tasket A green and yellow basket",
      "A-tisket a-tasket A green and yellow basket".length
    )
  ).toBe("A-tisket a-tasket A green and yellow basket");
  expect(
    truncateString(
      "A-tisket a-tasket A green and yellow basket",
      "A-tisket a-tasket A green and yellow basket".length + 2
    )
  ).toBe("A-tisket a-tasket A green and yellow basket");
  expect(truncateString("A-", 1)).toBe("A...");
  expect(truncateString("Absolutely Longer", 2)).toBe("Ab...");
});
