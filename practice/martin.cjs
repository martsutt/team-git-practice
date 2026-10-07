function countCompleted(items) {
  return items.filter(item => item.completed === true).length;
}

module.exports = { countCompleted };