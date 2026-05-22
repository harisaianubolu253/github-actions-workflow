function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  // Intentional practice bug: this reverses the expected subtraction order.
  return b - a;
}

function multiply(a, b) {
  // Intentional practice bug: this adds instead of multiplying.
  return a * b;
}

function divide(a, b) {
  // Intentional practice bug: this checks the string "0" instead of number 0.
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
