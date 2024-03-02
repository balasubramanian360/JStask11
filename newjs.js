const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const PhoneNumber = document.getElementById('PhoneNumber');

form.addEventListener('submit', e => {

    validateInputs();{
        e.preventDefault(); 
    }
});

const setError = (element, message) => {
    const input_group = element.parentElement;
    const errorDisplay = input_group.querySelector('.error');

    errorDisplay.innerText = message;
    input_group.classList.add('error');
    input_group.classList.remove('success')
}

const setSuccess = element => {
    const input_group = element.parentElement;
    const errorDisplay = input_group.querySelector('.error');

    errorDisplay.innerText = '';
    input_group.classList.add('success');
    input_group.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const PhoneNumberValue = PhoneNumber.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(PhoneNumberValue === '') {
        setError(PhoneNumber,'Phone number is required');
    } else if (PhoneNumberValue.length > 10) {
        setError(PhoneNumber,'Number must be in 10 numbers');
    }  else {
        setSuccess(PhoneNumber);
    }

};
