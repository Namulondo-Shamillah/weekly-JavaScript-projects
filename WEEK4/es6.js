export function add(num1,num2){
    console.log(num1+num2);
}
add(5,10);

let sum = function (num1,num2){
    return num1+num2;
}
sum(50,60);

let total =  (num1,num2)=> num1+num2;
total(30,20);

export function greet(){
    console.log("Hello everyone");
}
greet();

let salute = function(){
    console.log("Hello everyone");
}

let recognise = ()=>console.log("Hello everyone");
recognise();
    
export const PI = 3.142;
export let garageName = "Oyera Auto Service Bay";
