const button = document.getElementById("helloButton");
const message = document.getElementById("message");

function greetUser() {
    message.textContent = "Hello, Lytino! Welcome to your website.";
}

button.addEventListener("click", greetUser);

button.addEventListener("click", function() {

    message.textContent = "Welcome to " + creatorName + "! My vision is " + vision;

});function greetUser() {
    console.log("Welcome to Lytino Xix!");
}

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Lytino");
greetUser("Franklin");
greetUser("Developer");