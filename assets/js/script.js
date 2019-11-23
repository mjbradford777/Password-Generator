let passwordLength;
let lower;
let upper;
let nums;
let special;
let characters;
let password;
let area = document.getElementById('area');
let passwordButton = document.getElementById('pb');

const generate = () => {
    password = '';
    passwordLength = prompt('How long would you like your password to be? Please enter a number between 8 and 128 in numerical format.');
    passwordLength = parseInt(passwordLength);
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt('Please enter a valid number between 8 and 128 in numerical format.');
        passwordLength = parseInt(passwordLength);
    }
    console.log(passwordLength);

    lower = confirm('Would you like your password to include lower case letters?');
    upper = confirm('Would you like your password to include upper case letters?');
    nums = confirm('Would you like your password to include numbers?');
    special = confirm('Would you like your password to include special characters?');
    if (!lower && !upper && !nums && !special) {
        alert('You must choose at least one character type to create a password.');
        return;
    }

    if (lower && upper && nums && special) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        console.log(password);
    } else if (lower && upper && nums && !special) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        console.log(password);
    } else if (lower && upper && !nums && special) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        console.log(password);
    } else if (lower && !upper && nums && special) {
        characters = 'abcdefghijklmnopqrstuvwxyz0123456789 !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        console.log(password);
    } else if (!lower && upper && nums && special) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        console.log(password);
    } else if (lower && upper && !nums && !special) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } else if (lower && !upper && nums && !special) {
        characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        } 
    } else if (lower && !upper && !nums && special) {
        characters = 'abcdefghijklmnopqrstuvwxyz !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } else if (!lower && upper && nums && !special) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } else if (!lower && upper && !nums && special) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } else if (!lower && !upper && nums && special) {
        characters = '0123456789 !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } else if (lower && !upper && !nums && !special) {
        characters = 'abcdefghijklmnopqrstuvwxyz'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } else if (!lower && upper && !nums && !special) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } else if (!lower && !upper && nums && !special) {
        characters = '0123456789'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    } else if (!lower && !upper && !nums && special) {
        characters = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
        for (let i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }

    area.textContent = password;
}

passwordButton.onclick = generate;

