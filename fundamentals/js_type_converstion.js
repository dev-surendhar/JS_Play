

// 2 types of type converstion in JS

// 1. Implicit Type Conversion (Type Coercion)
// In JavaScript, implicit type conversion occurs when the language automatically converts one data type to another. This can happen in various scenarios, such as when performing operations between different types.



//1. Implicit Type Conversion (Type Coercion)
let num = 5;  
let str = "10";  
let result = num + str; // Implicitly converts num to a string and concatenates  
console.log(result); // Output: "510" (string)

let boolValue = true;  
let sum = boolValue + 1; // Implicitly converts true to 1 and adds  
console.log(sum); // Output: 2 (number) 
let res = 5 + "5";  
console.log(res);  


let res = true + 1;  
console.log(res);



// Automatic Conversion in Logical Operations

// In JavaScript, these values are automatically converts undefined, null, "" (empty string), false, NaN, and 0 to false, and all other values to true.

let res = Boolean("");  

let res2 = Boolean("Hello");  

console.log(res) // Output: false

console.log(res2) // Output: true
    



// Explicit Type Conversion

// In JavaScript, explicit type conversion can be defined as when we manually change the data type of the variable from one to other using some built-in JavaScript functions. JavaScript provides us the built-in functions for performing the explicit conversion.


let n = 123;
let s1 = String(n);  
let s2 = n.toString();  
console.log(typeof s1)     //string
console.log(typeof s2)     //string



let s = "123";
let n = Number(s);  
let s1 = "12.34";
let n1 = parseFloat(s1);  
console.log(n)
console.log(n1)