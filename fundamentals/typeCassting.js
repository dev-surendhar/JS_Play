
// Type Casting / Type Conversion in JavaScript

// Implicit type conversion is also called coercion.
// JavaScript converts values automatically in expressions.

let implicitNumber = 5;
let implicitString = "10";
let implicitResult = implicitNumber + implicitString;

console.log(implicitResult); // "510"
console.log(typeof implicitResult); // string

let boolValue = true;
let boolResult = boolValue + 1;

console.log(boolResult); // 2
console.log(typeof boolResult); // number

let comparisonResult = "5" == 5;
console.log(comparisonResult); // true

// Explicit type conversion is also known as type casting.
// Here we convert values manually with built-in functions.

let numericString = "123";
let convertedNumber = Number(numericString);

console.log(convertedNumber); // 123
console.log(typeof convertedNumber); // number

let decimalString = "12.75";
let parsedDecimal = parseFloat(decimalString);

console.log(parsedDecimal); // 12.75

let wholeNumber = 45;
let convertedString = String(wholeNumber);

console.log(convertedString); // "45"
console.log(typeof convertedString); // string

let truthyValue = 1;
let convertedBoolean = Boolean(truthyValue);

console.log(convertedBoolean); // true

let emptyValue = "";
console.log(Boolean(emptyValue)); // false

// Common falsy values in JavaScript:
// false, 0, -0, 0n, "", null, undefined, NaN