// calling functions

function sayHello() {
    console.log("Hello, World!");
}

sayHello(); 

// function parameters 

function greet(name) { 
    console.log("Hello, " + name + "!");
}

greet("Alice") // calls greet function with name parameter included

// return statements

function add(a,b) { 
    return a + b; 
}

let sum2 = add(5,7); // calls add function and stores result in the sum variable
console.log("Sum: ", sum2)

// function expressions (or arrow functions in modern js)

const multiply = function(x,y) {
    return x * y;
}

let product2 = multiply(6, 3); 
console.log("Product: ", product2); 

// in modern js, you can use arrow functions for concise function expressions

const divide = (x,y) => x / y;

let quotient3 = divide(10,5);
console.log("Quotient: ", quotient3)
