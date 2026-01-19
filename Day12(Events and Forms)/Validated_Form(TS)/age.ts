const username = document.getElementById("username") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;
const userError = document.getElementById("userError") as HTMLSpanElement;
const ageError = document.getElementById("ageError") as HTMLSpanElement;
const registerBtn = document.getElementById("registerBtn") as HTMLButtonElement;

let isUsernameValid = false;
let isAgeValid = false;

/* INPUT EVENT (fires on every change) */
username.addEventListener("input", (event: Event) => {
  const value = (event.target as HTMLInputElement).value;

  if (value.length < 5) {
    userError.textContent = "Username must be at least 5 characters";
    isUsernameValid = false;
  } else {
    userError.textContent = "";
    isUsernameValid = true;
  }

  checkFormValidity();
});

/* KEYUP EVENT */
age.addEventListener("keyup", (event: KeyboardEvent) => {
  const value = Number((event.target as HTMLInputElement).value);

  if (value < 18) {
    ageError.textContent = "Age must be 18 or above";
    isAgeValid = false;
  } else {
    ageError.textContent = "";
    isAgeValid = true;
  }

  checkFormValidity();
});

/* COMMON FUNCTION */
function checkFormValidity(): void {
  registerBtn.disabled = !(isUsernameValid && isAgeValid);
}
