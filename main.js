const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-btn");

function emailValidation(email) {
  const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return emailRegex.test(email)
    ? form.classList.remove("error")
    : form.classList.add("error");
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  emailValidation(emailInput.value);
  emailInput.value = "";
});

emailInput.addEventListener("input", () => form.classList.remove("error"));
