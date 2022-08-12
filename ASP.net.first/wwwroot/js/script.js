//let checkbox1 = document.querySelector("id.digit");
let textBox = document.getElementById("textbox");
let checkbox1 = document.getElementById("digit");
let checkbox2 = document.getElementById("upperCase");
let checkbox3 = document.getElementById("lowerCase");
let result = document.getElementById("resulTextbox");
let button = document.getElementById("generate");

//console.log(textBox.value);
//console.log(checkbox1);
//console.log(checkbox2);
//console.log(checkbox3);

button.addEventListener("click", Generate);

function Generate() {
    if (textBox.value > 100) return;
    let randoString = makeid(textBox.value);
    result.value = randoString;
}

function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
