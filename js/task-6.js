const validationInputRef = document.querySelector("#validation-input");
const inputLength = validationInputRef.getAttribute("data-length");

function validationInput() {
  validationInputRef.classList.add("invalid");
  if (validationInputRef.value.length == inputLength) {
    validationInputRef.classList.add("valid");
    validationInputRef.classList.remove("invalid");
  }
}

validationInputRef.addEventListener("blur", validationInput);