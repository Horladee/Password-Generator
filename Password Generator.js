//Elements
const password = document.querySelector('#password');
const button = document.querySelector('button');

//password data
let characters = '1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}|:<>?/|';
let passwordLength = 8;
let passwordValue = ''; 

//create password
const createPassword = () => {
    passwordValue = '';

    for ( let i = 0; i < passwordLength; i++){
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number, number + 1);
    }

    password.value = passwordValue;
}
//Events
button.addEventListener('click', createPassword);