let textBox = document.getElementById("textbox");
let checkbox1 = document.getElementById("digit");
let checkbox2 = document.getElementById("upperCase");
let checkbox3 = document.getElementById("lowerCase");
let result = document.getElementById("resulTextbox");
let checkBoxes = document.getElementsByClassName("checkboxes");

let digit = false;
let upperCase = false;
let lowerCase = false;


let button = document.getElementById("ShowResult");
button.addEventListener("click", ShowResult);

function ShowResult() {
    if (textBox.value > 100) return;
    if (textBox.value == 0) return;
    let length = textBox.value;
    result.value = RandomStringPart1(length);  
}


function RandomStringPart1(length) {
    let randomNumeric = '0123456789';
    let randomAlphabetUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomAlphabetLowercase = 'abcdefghijklmnopqrstuvwxyz';
    let randomAlphabet = randomAlphabetUppercase + randomAlphabetLowercase;
    let randomAll = randomAlphabet + randomNumeric;
    let randomAlphabetUppercaseNumeric = randomAlphabetUppercase + randomNumeric;
    let randomAlphabetLowercaseNumeric = randomAlphabetLowercase + randomNumeric;

    if (digit && upperCase && lowerCase) {
        return RandomStringPart2(randomAll, length);
    }
    else if (digit && !upperCase && !lowerCase) {
        return RandomStringPart2(randomNumeric, length);
    }
    else if (!digit && upperCase && !lowerCase) {
        return RandomStringPart2(randomAlphabetUppercase, length);
    }
    else if (!digit && !upperCase && lowerCase) {
        return RandomStringPart2(randomAlphabetLowercase, length);
    }
    else if (digit && upperCase && !lowerCase) {
        return RandomStringPart2(randomAlphabetUppercaseNumeric, length);
    }
    else if (digit && !upperCase && lowerCase) {
        return RandomStringPart2(randomAlphabetLowercaseNumeric, length);
    }
    else if (!digit && upperCase && lowerCase) {
        return RandomStringPart2(randomAlphabet, length);
    }
    throw Error("Исключение : нет подходящей проверки для чекбоксов");
}

function RandomStringPart2(str, length) {
    let result = '';
    let charactersLength = str.length;
    for (let i = 0; i < length; i++) {
        result += str.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function filtrSettings() {
    if (event.target.id == "digit") {
        digit = event.target.checked;
    }
    else if (event.target.id == "upperCase") {
        upperCase = event.target.checked;
    }
    else if (event.target.id == "lowerCase") {
        lowerCase = event.target.checked;
    }
}
