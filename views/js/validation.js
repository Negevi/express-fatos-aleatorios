let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("errorpw");
let usernameError = document.getElementById("errorun");
let form = document.getElementById("in-innerR");

usernameInput.addEventListener("keyup", (e) => {
    console.log(usernameInput.value);
    if (usernameInput.value.length <= 4) {
        console.log("red");
        usernameInput.style.borderColor = "red"
        usernameError.innerText = "Username precisa ser 4 > caracteres"
        usernameError.style.color = "red"
    } else {
        console.log("green");
        usernameInput.style.borderColor = "green"
        usernameError.innerText = ""
    }
});

passwordInput.addEventListener("keyup", (e) => {
    console.log(passwordInput.value);
    if (passwordInput.value.length <= 8) {
        console.log("red");
        passwordInput.style.borderColor = "red"
        passwordError.innerText = "Password precisa ser 8 > caracteres"
        passwordError.style.color = "red"
    } else {
        console.log("green");
        passwordInput.style.borderColor = "green"
        passwordError.innerText = ""
    }
});

form.addEventListener("submit", (e) => {
    if ((passwordInput.value.length <= 8) || (usernameInput <= 4)) {
        e.preventDefault()
    }
});