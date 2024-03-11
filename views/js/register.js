let usernameInput = document.getElementById("username");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let passvalInput = document.getElementById("passval");
let formInput = document.getElementById("inputs")

let usernameError = document.getElementById("errorun");
let emailError = document.getElementById("erroremail");
let passwordError = document.getElementById("errorpw");
let passvalError = document.getElementById("errorpv");

console.log(formInput);

usernameInput.addEventListener("keyup", (e) => {
    console.log(usernameInput.value);
    if (usernameInput.value.length <= 4) {
        usernameInput.style.borderColor = "red"
        usernameError.innerText = "Username must be above 4 characters"
        usernameError.style.color = "red"
    } else {
        usernameInput.style.borderColor = "green"
        usernameError.innerText = ""
    }
});

emailInput.addEventListener("keyup", (e) => {
    console.log(emailInput.value);
    if (!emailInput.value.includes("@")) {
        emailInput.style.borderColor = "red"
        emailError.innerText = "Please enter a valid Email"
        emailError.style.color = "red"
    } else {
        emailInput.style.borderColor = "green"
        emailError.innerText = ""
    }
});

passwordInput.addEventListener("keyup", (e) => {
    console.log(passwordInput.value);
    if (passwordInput.value.length <= 8) {
        passwordInput.style.borderColor = "red"
        passwordError.innerText = "Password must contain at least 1 Capital letter, number, and be grreater then 8 characters"
        passwordError.style.color = "red"
    } else {
        passwordInput.style.borderColor = "green"
        passwordError.innerText = ""
    }
});

passvalInput.addEventListener("keyup", (e) => {
    console.log(passvalInput.value);
    if (!((passvalInput.value.length >= 8) && (validateString(passvalInput.value)))) {
        passvalInput.style.borderColor = "red"
        passvalError.innerText = "Password must contain at least 1 Capital letter, number, and be grreater then 8 characters"
        passvalError.style.color = "red"
    } else {
        passvalInput.style.borderColor = "green"
        passvalError.innerText = ""
    }
});

function validateString(input) { //chat gpt wtf || HOW TF DOES IT WORK
    // Regular expression pattern
    const pattern = /^(?=.*[A-Z])(?=.*[\W_]).+$/;

    // Test the input string against the pattern
    return pattern.test(input);
}