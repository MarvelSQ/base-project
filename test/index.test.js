const isNullOrUndefined = require("../src/index");

test("test isNullOrUndefined", () => {
  expect(isNullOrUndefined(null)).toBe(true);
  expect(isNullOrUndefined(undefined)).toBe(true);
  expect(isNullOrUndefined(true)).toBe(false);
  expect(isNullOrUndefined(false)).toBe(false);
  expect(isNullOrUndefined("")).toBe(false);
  expect(isNullOrUndefined("1")).toBe(false);
  expect(isNullOrUndefined(0)).toBe(false);
  expect(isNullOrUndefined(1)).toBe(false);
  expect(isNullOrUndefined({})).toBe(false);
  expect(isNullOrUndefined([])).toBe(false);
});
