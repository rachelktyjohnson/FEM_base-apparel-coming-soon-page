const submit_button = document.querySelector(".submit-button");
const input_email = document.querySelector(".email-input");
const hint_text = document.querySelector(".hint");
const error_icon = document.querySelector(".error-icon");
const form = document.querySelector("form");

submit_button.addEventListener('click', formSubmit)
form.addEventListener("submit", (e)=>formSubmit(e))

function formSubmit(e){
    let email_value = input_email.value;
    let email_pattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email_pattern.test(email_value)){
        document.querySelector('form').submit();
    } else {
        e.preventDefault();
        hint_text.style.display="block";
        error_icon.style.display="block";
        input_email.style.borderColor="red";

    }
}