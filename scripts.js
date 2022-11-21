const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-password");

window.onload = function () {
    pass.onchange = validatePassword;
    confirmPass.onchange = validatePassword;
};

function validatePassword(){
    if(pass.value !== confirmPass.value) {
        confirmPass.setCustomValidity("Come on, passwords don't match");
        confirmPass.value = "";
    } else {
        confirmPass.setCustomValidity("");
    }
};

const form = document.querySelector("form");

form.addEventListener("submit", () => {
    document.querySelector("#form-submit-btn").disabled = true;
    document.querySelector("#form-submit-btn").textContent = "Please wait...";
});