//  const form = document.getElementById("login-form");
//  const name = document.getElementById("exampleInputName");
//  const email = document.getElementById("exampleInputEmail1");
//  const vehicleNumber = document.getElementById("vehicleNumber");
//  const submitButton = document.getElementById("submitBtn");


// regular expression
// const emailRegex


// form.addEventListener("submit", function(){
//     if(name.value.trim()===""){
//         event.preventDefault()
//     }

//  alert("You can not leave the name blank")    })


//  selecting the form
const loginForm = document.getElementById("login-form");
const tableBody = document.querySelector("#dataTable tbody")
// message paragraph
const message = document.getElementById("message");
const rawHtml = document.getElementById("rawHtml");
// let userEmail = " shamillah@gmail.com"
// let cleanEmail = userEmail.trim()
// console.log(cleanEmail);

// regular expression
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\+?256?|0)?(7[0-9]\d{7})$/;
const inputNameRegex = /^[A-Z][a-zA-Z\s]{2,49}$/;
const vehicleNumberRegex = /^[A-Z]{3}\s?[0-9]{3}[A-Z]?$/i;
//  Listens for the form submit
loginForm.addEventListener("submit", function(event){
  event.preventDefault()     //stop page refresh

 
// we are getting input values
const inputName = document.getElementById("exampleInputName").value.trim()
const inputEmail = document.getElementById("exampleInputEmail1").value.trim()
const vehicleNumber = document.getElementById("vehicleNumber").value.trim()
const phoneNumber = document.getElementById("phoneNumber").value.trim()

// validation
if(inputEmail === ""){
    message.textContext = "Customer email required";
    message.className = "text-danger";
    return;
}
if(inputName === ""){
    message.textContext = "Name required";
    message.className = "text-danger";
    return;
}
    if(vehicleNumber === ""){
    message.textContext = "Number plate required";
    message.className = "text-danger";
    return;
    }
    if(phoneNumber === ""){
    message.textContext = "Phone number required";
    message.className = "text-danger";
    return;
    }

    if(!emailRegex.test(inputEmail)){
message.textContent= "Enter valid email";
message.className = "text-danger";
return;
}

    if(!phoneRegex.test(phoneNumber)){
message.textContent= "Phone number should be like 0785454434 or +256785454434";
message.className = "text-danger";
return;
}

    if(!inputNameRegex.test(inputName)){
message.textContent= "Name must start with capital letter and contain only letters";
message.className = "text-danger";
return;
}

    if(!vehicleNumberRegex.test(vehicleNumber)){
message.textContent= "Vehicle number plate should be like UBA 123W or UBA123W ";
message.className = "text-danger";
return;
}

//     //create a new row using javascript
    const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${inputName}</td>
        <td>${inputEmail}</td>
        <td>${phoneNumber}</td>
        <td>${vehicleNumber}</td>` 
        // append row in table
        tableBody.appendChild(newRow);

//     //success
    message.textContent = "Customer registered successfully";
    message.className = "text-success";
    // clear form
    loginForm.reset()
})

//     //create a new row using javascript
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `<td>$` 
