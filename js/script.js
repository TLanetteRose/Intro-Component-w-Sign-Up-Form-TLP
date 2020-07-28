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




