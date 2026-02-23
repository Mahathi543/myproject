// Load Event
window.addEventListener("load", function() {
    alert("Welcome to SecondChance Login Page");
});

const form = document.getElementById("loginForm");
const button = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const card = document.getElementById("loginCard");
const profile = document.getElementById("profileImg");


// Form Submit Event
form.addEventListener("submit", function(event){
    event.preventDefault();

    if(email.value === "" || password.value === ""){
        message.innerText = "Please fill all fields!";
        message.style.color = "yellow";
    } else {
        message.innerText = "Login Successful!";
        message.style.color = "lightgreen";
    }
});


// Mouse Event (mouseover)
button.addEventListener("mouseover", function(){
    card.style.transform = "scale(1.05)";
});

// Mouse Event (mouseout)
button.addEventListener("mouseout", function(){
    card.style.transform = "scale(1)";
});


// Keyboard Event
email.addEventListener("keydown", function(event){
    console.log("Key Pressed: " + event.key);
});


// Click Event on Profile Image
function rotateProfile(){
    profile.style.transform = "rotate(360deg)";
    profile.style.transition = "1s";
}

// Add Event Listener
profile.addEventListener("click", rotateProfile);


// Remove Event Listener after 1 click
profile.addEventListener("click", function(){
    profile.removeEventListener("click", rotateProfile);
});
