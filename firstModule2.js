function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function product(x, y) {
  return x * y;
}

module.exports = { add, subtract, product };

module.exports.greet = function (name) {
  console.log(`my name is ${name}`);
};
