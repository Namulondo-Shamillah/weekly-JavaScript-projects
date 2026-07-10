// const vehicleRegisterButton = document.getElementById("vehicleBtn");
// const CustomerRegisterButton = document.getElementById("customerBtn");
const input = document.getElementById("customerName");
const form = document.getElementById("customerform");

// vehicleRegisterButton.addEventListener("click",function(){
//     alert("vehicle Registered")
// });

// CustomerRegisterButton.addEventListener("click",function(){
//     alert("Customer Registered")
// });

// customerName.addEventListener("input",function(){
//     console.log(input.value)
// });

form.addEventListener("submit", function(event){
    event.preventDefault() //for stopping the browser from reloading the page
    alert("Customer Registered")
})