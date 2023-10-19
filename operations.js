// arithemetic operators

let num1 = 55;
let num2 = 42;

let sum = num1 + num2;
console.log("Sum", sum);

let difference = num1 - num2;
console.log("Difference", difference); 

let product = num1 * num2;
console.log("Product", product);

let quotient = num1 / num2;
console.log("Quotient", quotient);

let remainder = num1 % num2; 
console.log("Remainder", remainder);

// assignment operators

let x = 41;
let y = 90;

console.log("Initial x: ", x);
console.log("Initial y: ", y);

x += 2; // equivalent to x = x + 2
y -= 3; // equivalent to y = y - 3

console.log("Updated x (x += 2): ", x); 
console.log("Updated y (y -= 3): ", y);

x *= 6; // equivalent to x = x * 3
y /= 2; // equivalent to y = y / 2

console.log("Updated x (x *= 3): ", x); 
console.log("Updated y (y /= 2):" , y);

// Note: this was a very interesting part for ChatGPT. It kept putting the console.logs together, so the multiplication and division output was the same as addition and subtraction. It took a bit of prompting to eventually correct itself and realize to split the console.logs between the operations in order to output the correct numbers. 

// comparison operators

let a = 591
let b = 31

console.log(a == b); 
console.log(a != b); 
console.log(a > b);
console.log(a < b); 
console.log(a >= b);
console.log(a <= b);

// logical operators

let condition1 = true;
let condition2 = false;

console.log(condition1 && condition2); 
console.log(condition1 || condition2);
console.log(!condition1);

// combining logical operators

let condition3 = true;
let condition4 = false;
let condition5 = true;

console.log("Should be false: ", condition3 && condition4 && condition5); // Using && to check if all conditions are true:
console.log("Should be true: ", condition3 || condition4 || condition5); // Using || to check if at least one condition is true

let condition6 = false; //adding new condition 
console.log("Should be true: ", (condition3 || condition4) && (condition5 || condition6)); // Combining && and || for more complex logic

// short circuit evaluation 

let condition7 = false;
let condition8 = true;

 console.log("Should be false: ", condition7 && condition8); // Since condition1 is false, condition2 is not evaluated. result is false