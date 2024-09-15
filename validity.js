// Correct form selection by using the actual form tag, no need for an ID unless needed
const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#Email'); // Correct case-sensitive ID
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

// Listen for form submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    validateInput();
});

// Validation function
function validateInput() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // Validate username
    if (usernameVal === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    // Validate email
    if (emailVal === '') {
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Email is invalid');
    } else {
        setSuccess(email);
    }

    // Validate password
    if (passwordVal === '') {
        setError(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
    } else {
        setSuccess(password);
    }

    // Validate confirm password
    if (cpasswordVal === '') {
        setError(cpassword, 'Please confirm your password');
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }
}

// Set error for input fields
function setError(element, message) {
    const inputGroup = element.parentElement; // Get the input group
    const errorDisplay = inputGroup.querySelector('.error'); // Find the error div
    errorDisplay.innerText = message; // Display the error message
    inputGroup.classList.add('error'); // Add the error class
    inputGroup.classList.remove('success'); // Remove success class
}

// Set success for input fields
function setSuccess(element) {
    const inputGroup = element.parentElement; // Get the input group
    const errorDisplay = inputGroup.querySelector('.error'); // Find the error div
    errorDisplay.innerText = ''; // Clear the error message
    inputGroup.classList.add('success'); // Add the success class
    inputGroup.classList.remove('error'); // Remove error class
}

// Email validation regex
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};