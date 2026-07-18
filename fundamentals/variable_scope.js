// var is function scoped(local scope), meaning it is accessible within the function it is defined in, or globally if defined outside of a function. It can be redeclared and updated within its scope.

// let and const are block scoped, meaning they are only accessible within the block they are defined in. They cannot be redeclared within the same scope, but let can be updated while const cannot.

// global scope refers to variables that are accessible throughout the entire code, while local scope refers to variables that are only accessible within a specific function or block.

var townMessage = "Welcome to our lovely town!";

function welcomeMessage() {
  console.log(townMessage); // Accessing the global variable
}

welcomeMessage();

// local scope refers to variables that are only accessible within a specific function or block. In this case, the variable localMessage is only accessible within the function welcomeMessage.

function myFunction() {
  var localVariable = "I'm in local scope";
  console.log(localVariable);
}

myFunction();
// Accessing localVariable here would result in an error


// block scope refers to variables that are only accessible within the block they are defined in. In this case, the variable blockVariable is only accessible within the if statement block.

if (true) {
  let blockVariable = "I'm in block scope";
  console.log(blockVariable);
}
// Accessing blockVariable here would result in an error

if (true) {
  let blockVariable = "I'm in block scope";
  console.log(blockVariable);
}
// Accessing blockVariable here would result in an error


// block scope with var, let, const

function myFunction() {
  if (true) {
    var localVariable = "I'm in block scope";
    let blockVariable = "I'm also in block scope";
  }
  console.log(localVariable); // Accessible (var is function scoped)
  console.log(blockVariable); // Error: blockVariable is not defined (let is block scoped)
}


function exampleBlockScope() {
  if (true) {
    let blockVariable = "I'm block-scoped with 'let'";
    const constantBlockVar = "I'm block-scoped with 'const'";
  }
  console.log(blockVariable); // Error: blockVariable is not defined
  console.log(constantBlockVar); // Error: constantBlockVar is not defined
}


// Block Scope in Conditional Statements and Loops

function checkCondition() {
  let result = "Before condition";
  if (true) {
    let result = "Inside condition"; // Block-scoped variable
  }
  console.log(result); // "Before condition" from the outer scope
}

