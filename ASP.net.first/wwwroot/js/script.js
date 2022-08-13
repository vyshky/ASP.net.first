let textBox = document.getElementById("textbox");
let checkbox1 = document.getElementById("digit");
let checkbox2 = document.getElementById("upperCase");
let checkbox3 = document.getElementById("lowerCase");
let result = document.getElementById("resulTextbox");

let button = document.getElementById("ShowResult");
button.addEventListener("click", ShowResult);

function ShowResult() {
    if (textBox.value > 100) return;
    if (textBox.value == 0) return;
    let length = textBox.value;
    result.value = RandomStringPart1(length);
}

function RandomStringPart1(length) {
    let result = '';
    let randomNumeric = '0123456789';
    let randomAlphabetUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomAlphabetLowercase = 'abcdefghijklmnopqrstuvwxyz';
   
    if (checkbox1.checked) {
        result += randomNumeric;
    }
    if (checkbox2.checked) {
        result += randomAlphabetUppercase;
    }
    if (checkbox3.checked) {
        result += randomAlphabetLowercase;
    }
    if (result == '') return 'Выберите чекбокс';
    return RandomStringPart2(result,length);        
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
