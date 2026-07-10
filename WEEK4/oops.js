// Encapsulation
// let age = 50;
// let isMale = true;
// let name = "Mwesigwa";

let person = {
     age : 50,
     isMale :true,
     name : "Mwesigwa", 
greet:function(){
console.log(`Hello my name is ${this.name}`);
}
}

person.greet();

function Person(name,age,isMale){
this.name = name;
this.age = age;
this.isMale = isMale;
this.greet = function(){
console.log(`Hello my name is ${this.name}`);
}
}
let joseph = new Person("Mwesigwa",50, true);
let carol = new Person("Nampijja", 26, false);
let okello = new Person("Emma", 39, true);

joseph.greet();
carol.greet();




