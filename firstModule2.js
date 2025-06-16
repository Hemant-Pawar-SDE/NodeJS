function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function product(x, y) {
  return x * y;
}

//way-1
module.exports = { add, subtract, product };

//way-2
module.exports.greet = function (name) {
  console.log(`my name is ${name}`);
};
