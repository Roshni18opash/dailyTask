var username = document.getElementById("username");
var age = document.getElementById("age");
var userError = document.getElementById("userError");
var ageError = document.getElementById("ageError");
var registerBtn = document.getElementById("registerBtn");
var isUsernameValid = false;
var isAgeValid = false;
/* INPUT EVENT (fires on every change) */
username.addEventListener("input", function (event) {
    var value = event.target.value;
    if (value.length < 5) {
        userError.textContent = "Username must be at least 5 characters";
        isUsernameValid = false;
    }
    else {
        userError.textContent = "";
        isUsernameValid = true;
    }
    checkFormValidity();
});
/* KEYUP EVENT */
age.addEventListener("keyup", function (event) {
    var value = Number(event.target.value);
    if (value < 18) {
        ageError.textContent = "Age must be 18 or above";
        isAgeValid = false;
    }
    else {
        ageError.textContent = "";
        isAgeValid = true;
    }
    checkFormValidity();
});
/* COMMON FUNCTION */
function checkFormValidity() {
    registerBtn.disabled = !(isUsernameValid && isAgeValid);
}
