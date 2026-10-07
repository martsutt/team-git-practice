function isValidMinutes(value) {
  return Number.isInteger(value) && value >= 1 && value <= 180;
}

module.exports = { isValidMinutes };