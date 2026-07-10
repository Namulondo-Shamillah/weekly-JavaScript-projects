const { jsx } = require("react/jsx-runtime");

)// if(initialization,condition,increment){
// The statement runs here
// }

/*ifs and repetitions*/
/*they all use boolean to control the code*/
// Condition decides if sth is to occur while for a loop or the repetition decides how many cars move

// for(let car = 1; car<=5; car++) {
//     console.log("Car has passed")eeeeeeeeeeeeeeeee
// }
// for(let bay=1; bay<=5; bay++){
//     console.log(`Service Bay ${bay}`);
// }
// this one prints numbers from 5 downwards
// for(let num=5; num>=1; num--){
//     console.log(num);
// }
// How u can do multiplication in js using loops
// for(let num=0; num<=12; num++){
//     console.log(`${num}*${num}=${num*num}`);
// }
// captalising each of the things in the array making it loop continuously to make all of capital
let fruits= [`orange`,`apple`,`tree`,`mango`]
let captalisedGroup=[];
for(let good=0; good<fruits.length; good++){
    captalisedGroup.push(fruits[good].toUpperCase());
    console.log(captalisedGroup);
}

