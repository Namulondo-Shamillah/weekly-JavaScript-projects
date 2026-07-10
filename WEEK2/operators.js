/*BODMAS(Operators)
These help us perform functions on the primitive data types*/
//Total cost of aligning wheel
//Operators
/*Addition(+)
Subtraction(-)
Division(/)
Multiplication(*)
modulus(%)
*/
let labourCharge = 20000;
let costOfWheelAlignment = 30000;
let totalcost = labourCharge + costOfWheelAlignment;
console.log(totalcost);

// let num1 = 60;
// let num2 = 50;
// let sum = num1 + num2;
// let difference = num1 - num2;
// let product = num1 * num2;
// let modulus = num1 % num2;
// let exponential = num1 ** num2;

// console.log(sum, difference, product, quotient, modulus, exponential);

/*const PI = 3.14;
let radius = 100;
let areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);*/

/*Assignment Operators
= , */
// let x = y;// The equal sign is not comparing whether these two are equal but rather assigning y to x
// let x = x + y;
// x += y;
// let x = x * y;
// x *= y;
// let x = x / y;
// x /= y;
// let x = x % y;
// x %= y;
// let x = x ** y;
// x **= y;
// let x = x - y;
// x -= y;

/*Comparison Operators
*/
let x = 5;
let y = "5";
let z = 10;
console.log(z > x);

console.log(x === y);
/*x == y; //=is comparing the values of x and y but not their data types*/
//2 equal signs is loosely equal 3 equal signs is strictly equal
let password1 = 543;
let password2 = 366;
console.log(password1 === password2);
console.log(password1 != password2);
console.log(z <= x);

/*Logical operators
and (&&), or(||), not(!)*/
let check = 5 < 10 && 10 < password1;
console.log(check);

let amountPaid = 50000;
let total = 50000;
if(amountPaid >= total){
    console.log("Payment Complete");
};

let userName = "Admin";
let passWord = "1234";
if(userName === "Admin" && password === "1234"){
    console.log("Welcome, Administrator.");
};

let count = 0;
console.log(count++); //This is an increment operator 
console.log(++count);
console.log(count);


//All these mean the same 
let carServiced = 5;
carServiced++;
carServiced = carServiced+1;
carServiced += 1;
console.log(carServiced);


