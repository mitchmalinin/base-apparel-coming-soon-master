let form = document.querySelector("#form");
let emailInput = document.querySelector("#email");
let error = document.querySelector("#error");
let errorImg = document.querySelector("#error-img");

form.addEventListener("submit", (e) => {
  errorImg.style.display = "none";
  error.innerHTML = "";
  emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
  e.preventDefault();
  if (
    emailInput.value === "" ||
    emailInput.value === null ||
    emailInput.value.includes("@") === false
  ) {
    emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
    error.innerHTML = "Please enter a valid email";
    errorImg.style.display = "block";
  }
});
