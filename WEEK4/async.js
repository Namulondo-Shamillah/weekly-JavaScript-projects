// What does asynchronous mean
// Do not happen at the same time
// Creating an object and converting it to json 
let customer = {
    customerName : "Namulondo Shamillah",
    customerId: 1,
    customerPhoneNumber : "0785454434",
}
console.log(parsedObject);
let json = `{"name": "John Doe"}`;

let parsedJson = JSON.parse(json);
console.log(parsedJson.name);

console.log("start");
setTimeout(function(){
    console.log("loading...");
},3000);
console.log("end");

// We use fetch to access data from an API or a server. It is an asynchronous
// Its always fetches then url of your choice in the brackets.
let response = fetch("https://jsonplaceholder.typicode.com/todos/1") 

fetch('data.json')
//This first then deals with turning the json to a javascript object
.then(function(){
return response.json()   // .json is similar to JSON.parse()it turns the json into)


})
//This second then deals with the data that is returned from the API
.then(function(data){
console.log(data)
})
.catch(function(){
    console.error(Error fetching data: ', error');
})
function displayServices(services);
}

/