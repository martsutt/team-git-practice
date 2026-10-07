const test = require("node:test");
const assert = require("node:assert/strict");
const { countCompleted } = require("./martin.cjs");

test("counts completed items", () => {
  const items = [
    { completed: true },
    { completed: false },
    { completed: true }
  ];

  assert.equal(countCompleted(items), 2);
});

test("returns 0 when no items are completed", () => {
  const items = [
    { completed: false },
    { completed: false }
  ];

  assert.equal(countCompleted(items), 0);
});

test("handles an empty list", () => {
  assert.equal(countCompleted([]), 0);
});

test("ignores missing and non-boolean completed values", () => {
  const items = [
    { completed: true },
    { completed: "true" },
    {},
    { completed: false }
  ];

  assert.equal(countCompleted(items), 1);
});