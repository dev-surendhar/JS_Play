// Old style
var a = 10    

// Preferred for non-const
let b = 20;    

// Preferred for const (cannot be changed)
const c = 30;  

console.log(a);
console.log(b);
console.log(c);


//var is function scoped, meaning it is accessible within the function it is declared in, or globally if declared outside of a function.

var x = 1; // global scope

function testVar() {
    var y = 2; // function scope
    console.log(x); // accessible
    console.log(y); // accessible
}

testVar();
console.log(y); // ReferenceError: y is not defined

//let and const are block scoped, meaning they are only accessible within the block they are declared in.

if (true) {
    let z = 3; // block scope
    const w = 4; // block scope
    console.log(z); // accessible
    console.log(w); // accessible
}

console.log(z); // ReferenceError: z is not defined
console.log(w); // ReferenceError: w is not defined 

