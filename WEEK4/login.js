let inputUserName = document.getElementById("userName");
let inputPassword = document.getElementById("password1");
let loginButton = document.getElementById("loginButton");
let messageInput = document.getElementById("message");

let user = {
    userName: "admin",
    password1: "1234"
}

localStorage.setItem("user",JSON.stringify(user));//here we are stringifying ie from my computer to the server
let storedUser = JSON.parse(localStorage.getItem("user"));//here we are parsing ie from the server to my computer that is y we are removing the quotes
console.log(storedUser);

localStorage.setItem("loggedIn",true);

loginButton.addEventListener("click",function(){
    if(inputUserName.value === storedUser.userName && inputPassword.value === storedUser.password1){
        window.location.href = "admin.html";
    }else {
        messageInput.textContent = "Invalid user name or password"
        messageInput.classList.add("text-danger");
    }
    if(inputUserName === ""){
    message.textContext = "Customer name required";
    message.className = "text-danger";
    return;
}
if(inputPassword === ""){
    message.textContext = "password required";
    message.className = "text-danger";
    return;
}
})