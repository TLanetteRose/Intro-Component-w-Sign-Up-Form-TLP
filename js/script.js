const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Add eventlistener for submitting form
form.addEventListener('submit', e => {
    //Prevents submittion of form by cancelling
    e.preventDefault();
    checkInput();
})

// Function to check inputs in forms 
function checkInput() {
    //Trim whitespace 
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Check conditions for input
    if (firstNameValue === '') {
        setErrorMsg(firstName);
    } else {
        setSuccess(firstName);
    }
    if (lastNameValue === '') {
        setErrorMsg(lastName);
    } else {
        setSuccess(lastName);
    }
    if (emailValue === '') {
        setErrorMsg(email);
    } else {
        setSuccess(email);
    }
    if (passwordValue === '') {
        setErrorMsg(password);
    } else {
        setSuccess(password);
    }

}

// Error message function
function setErrorMsg(input) {
    const formControl = input.parentElement;
    const image = formControl.querySelector('.error');
    const warning = formControl.querySelector('.errorMessage');

    image.style.display = 'block';
    warning.style.display = 'block';

}

// Success function
function setSuccess(input) {
    const formControl = input.parentElement;
    const image = formControl.querySelector('.error');
    const warning = formControl.querySelector('.errorMessage');

    image.style.display = 'none';
    warning.style.display = 'none';
}

// Check email validity
function isEmail(email) {
    return emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
}



