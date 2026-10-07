const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidMinutes } = require('./jako.cjs');

test('accepts a normal value', () => {
  assert.equal(isValidMinutes(45), true);
});

test('rejects invalid values', () => {
  assert.equal(isValidMinutes(0), false);
  assert.equal(isValidMinutes(2.5), false);
  assert.equal(isValidMinutes('30'), false);
  assert.equal(isValidMinutes(NaN), false);
});

test('handles the boundaries', () => {
  assert.equal(isValidMinutes(1), true);
  assert.equal(isValidMinutes(180), true);
  assert.equal(isValidMinutes(181), false);
});