let passwordLength;

const generate = () => {
    passwordLength = prompt('How long would you like your password to be? Please enter a number between 8 and 128 in numerical format.');
    passwordLength = parseInt(passwordLength);
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt('Please enter a valid number between 8 and 128 in numerical format.');
        passwordLength = parseInt(passwordLength);
    }
    console.log(passwordLength);
}

document.getElementById('pb').onclick = generate;

