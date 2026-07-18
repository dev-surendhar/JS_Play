console.log(a); // var is hoisted, but it starts as undefined, so this prints undefined
var a = "this is the beginning";
console.log(a); // After initialization, this prints the assigned value

console.log(b); // let is also hoisted, but it stays in the Temporal Dead Zone until initialization
let b = "this is the middle";

console.log(c); // const is hoisted similarly, and it also cannot be accessed before initialization
const c = "this is the end";


// Hoisting means declarations are moved to the top of their scope during compilation,
// but their initial values are not assigned until the code runs.
// With var, the variable exists from the start with an initial value of undefined.
// With let and const, the variable exists in the Temporal Dead Zone until its declaration is executed.

let ab = "hello world";

let fnx = function() {
    console.log(ab); // This tries to access the inner ab before it has been initialized
    let ab = "hello world 2";
    console.log(ab);
};

fnx(); // Output: ReferenceError: Cannot access 'ab' before initialization
