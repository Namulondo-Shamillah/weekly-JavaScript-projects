let sentence = "My name is Namulondo Shamillah";
let pattern = /Shamillah/g;
let searchResult = pattern.test(sentence);
console.log(searchResult);

let email = "shamillahnamulondo@gmail.com";
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let testResult = emailPattern.test(email);
console.log(testResult);
