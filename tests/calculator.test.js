const { add, subtract, multiply, divide } = require("../src/calculator");

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(4, 10)).toBe(6);
  });

  test("multiplies two numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("divides two numbers", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("throws when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
