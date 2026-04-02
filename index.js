let lengthInput = document.getElementById("length");
let uppercaseCheckbox = document.getElementById("include_uppercase");
let lowercaseCheckbox = document.getElementById("include_lowercase");
let numbersCheckbox = document.getElementById("include_numbers");
let symbolsCheckbox = document.getElementById("include_symbols");
let generateBtn = document.getElementById("generate_btn");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let alertBox = document.querySelector(".alert");

// Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Generate single password
function generateSinglePassword(charPool, length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    return password;
}

// Main function
function generatePassword() {
    const length = parseInt(lengthInput.value);

    if (!length || length < 1 || length > 15) {
        // alert("Please enter a valid length (1-15)");
        alertBox.textContent = "⚠️ Please enter a valid length (1-15)";
        alertBox.style.display = "block";
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 2000);
        return;
    }

    let charPool = ""; //takes all the checked options and adds to the pool of characters to generate password from

    if (uppercaseCheckbox.checked) charPool += uppercaseChars;
    if (lowercaseCheckbox.checked) charPool += lowercaseChars;
    if (numbersCheckbox.checked) charPool += numberChars;
    if (symbolsCheckbox.checked) charPool += symbolChars;

    if (charPool === "") {
        // alert("Select at least one option!");
        alertBox.textContent = "⚠️ Select at least one option!";
        alertBox.style.display = "block";
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 2000);
        return;
    }
    password1.textContent = generateSinglePassword(charPool, length);
    password2.textContent = generateSinglePassword(charPool, length);

    password1.style.display = "inline-block";
    password2.style.display = "inline-block";
}

// Copy functionality
password1.addEventListener("click", () => {
    let originalPassword = password1.textContent;
    if (password1.textContent) {
        navigator.clipboard.writeText(password1.textContent);
        password1.textContent = "Copied!";
        setTimeout(() => {
            password1.textContent = originalPassword;
        }, 1000);
    }
});

password2.addEventListener("click", () => {
    let originalPassword = password2.textContent;
    if (password2.textContent) {
        navigator.clipboard.writeText(password2.textContent);
        password2.textContent = "Copied!";
        setTimeout(() => {
            password2.textContent = originalPassword;
        }, 1000);
    }
});

// Event listener
generateBtn.addEventListener("click", generatePassword);