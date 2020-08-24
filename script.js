var lowBox = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upBox = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numBox = ["1","2","3","4","5","6","7","8","9","0"]
var spcBox = ["!","@","#","$","%","^","&","*","?","~"]
var allChars = [lowBox, upBox, numBox, spcBox]

function getRandomLow() {
    return lowBox[Math.floor(Math.random() * lowBox.length)]
}
function getRandomUp() {
    return upBox[Math.floor(Math.random() * upBox.length)]
}
function getRandomNum() {
    return numBox[Math.floor(Math.random() * numBox.length)]
}
function getRandomSpc() {
    return spcBox[Math.floor(Math.random() * spcBox.length)]
}

var passwordEl = document.getElementById("password");
var lowerEl = document.getElementById("lowBox");
var upperEl = document.getElementById("upBox");
var numberEl = document.getElementById("numBox");
var specialEl = document.getElementById("spcBox");
var charactersEl = document.getElementById("characters");
var createEl = document.getElementById("createBtn");




const randomGen = {
    lower: getRandomLow,
    upper: getRandomUp,
    number: getRandomNum,
    special: getRandomSpc,
};

// Add event listener

createEl.addEventListener("click", () => {
    var incLower = lowerEl.checked;
    var incUpper = upperEl.checked;
    var incNumber = numberEl.checked;
    var incSpecial = specialEl.checked;
    var length = charactersEl.value;

    passwordEl.innerText = generatePassword(
        incLower,
        incUpper,
        incNumber,
        incSpecial,
        length,
    );
});

// Generate password
function generatePassword(lower, upper, number, special, length) {
    let generatedPassword = "";

    var typesCount = lower + upper + number + special;

    var typesArr = [{ lower }, { upper }, { number }, { special }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return "";
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            var rand = Object.keys(type)[0];
            generatedPassword += randomGen[rand]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);
    console.log(generatedPassword.slice(0, length))

    return finalPassword; 
}














console.log(getRandomNum());






function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}