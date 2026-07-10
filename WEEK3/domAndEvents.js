 //Select the elements from the code
let likeButton = document.getElementById("likeBtn");
let likeCount = document.getElementById("likeCount");
let form = document.getElementById("form");
let submit = document.getElementById("submit");
// Initialize the count
let count = 0;
let isLiked = false;

// Function which takes in two numbers and adds them

// addEventListener("event",eventHandler)

likeButton.addEventListener("click",function handleClick(){
  if(!isLiked){
count++;
isLiked = true;
likeButton.classList.add("liked")
  }else{
count--;
isLiked = false;
  }
  likeCount.textContent = count
  likeButton.classList.remove("liked")
})

form.addEventListener("submit",functionSubmitForm)
