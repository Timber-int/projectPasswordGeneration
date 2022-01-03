const empty = '';
const uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*=-_';

const pLength = document.getElementById('p-length');
const upperCase = document.getElementById('p-uppercase');
const lowerCase = document.getElementById('p-lowercase');
const pNumber = document.getElementById('p-numbers');
const pSymbol = document.getElementById('p-symbols');
const submit = document.getElementById('generator-pass');
const password = document.getElementById('password');

submit.addEventListener('click', () => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword += uCase : '';
    (lowerCase.checked) ? initialPassword += lCase : '';
    (pNumber.checked) ? initialPassword += number : '';
    (pSymbol.checked) ? initialPassword += symbol : '';

    password.value = generatePassword(pLength.value, initialPassword);
    // console.log(initialPassword);
});

function generatePassword(length, initialValue) {
    // console.log(initialValue.length);
    if (length <= 4) {
        alert('Password wrong');
        return;
    }
    let pass = '';

    for (let i = 0; i < length; i++) {
        // console.log(pass);
        pass += initialValue.charAt(Math.floor(
            Math.random() * initialValue.length));
    }
    return pass;
}

const copy = document.getElementById('copy');

copy.addEventListener('click', () => {
    if (password.value === '') {
        alert('Please generate a password');
    } else {
        password.select();
        document.execCommand('copy');
    }
});
