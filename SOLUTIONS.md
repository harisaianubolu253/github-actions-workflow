# Practice Bug Solutions

This repository intentionally contains a few small bugs so students can practice reading CI logs, reproducing failures locally, and fixing code.

## How to Practice

Run the same checks used by GitHub Actions:

```bash
npm ci
npm run lint
npm test
```

Lint should pass, but the Jest tests should fail until the calculator bugs are fixed.

## Bug 1: Subtract Uses the Wrong Order

Failing test:

```text
subtracts two numbers
```

Problem in `src/calculator.js`:

```js
return b - a;
```

Fix:

```js
return a - b;
```

## Bug 2: Multiply Adds Instead of Multiplying

Failing test:

```text
multiplies two numbers
```

Problem in `src/calculator.js`:

```js
return a + b;
```

Fix:

```js
return a * b;
```

## Bug 3: Divide by Zero Checks the Wrong Type

Failing test:

```text
throws when dividing by zero
```

Problem in `src/calculator.js`:

```js
if (b === "0") {
```

This checks for a string value, but the calculator receives numbers.

Fix:

```js
if (b === 0) {
```

## Complete Fixed Calculator

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
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
```

## After Fixing

Run:

```bash
npm run lint
npm test
```

Expected result:

```text
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
```
