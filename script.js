// variable to declare special charaters
var specialCharacters = [
  "@",
  "%",
  "+",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// variable to declare numeric charaters
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// variable to declare uppercase letters
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// variable to declare lowercase letters
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// variable to declare availabe characters
var allAvailableCharacters = [];
// function to obtain user password options
function passwordOptions() {
  var passwordLength = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  // conditional statement to determine if user input is a number
  if (isNaN(passwordLength) === true) {
    alert("value must be given as a number.");
    return;
  }
  // conditional statement to keep password length inside criteria options
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password must be between 8 and 128 characters.");
    return;
  }
  var addSpecialCharacters = confirm("click ok add special characters. ");
  var addNumericCharacters = confirm("click ok to add numbers");
  var addUpperCase = confirm("click ok to add uppercase letters");
  var addLowerCase = confirm("click ok to add lowercase letters");
  // conditonal statement to make the user select an option
  if (
    addSpecialCharacters === false &&
    addNumericCharacters === false &&
    addUpperCase === false &&
    addLowerCase === false
  ) {
    alert("you must select one of the criteria.");
    return;
  }
  // for loop to include special character options
  if (addSpecialCharacters) {
    for (let i = 0; i < specialCharacters.length; i++) {
      const element = specialCharacters[i];
      allAvailableCharacters[allAvailableCharacters.length] = element;
    }
  }
  // for loop to include numeric character options
  if (addNumericCharacters) {
    for (let i = 0; i < numericCharacters.length; i++) {
      const element = numericCharacters[i];
      allAvailableCharacters[allAvailableCharacters.length] = element;
    }
  }
  // for loop to include uppercase options
  if (addUpperCase) {
    for (let i = 0; i < upperCaseLetters.length; i++) {
      const element = upperCaseLetters[i];
      allAvailableCharacters[allAvailableCharacters.length] = element;
    }
  }
  // for loop to incluse lowercase options
  if (addLowerCase) {
    for (let i = 0; i < lowerCaseLetters.length; i++) {
      const element = lowerCaseLetters[i];
      allAvailableCharacters[allAvailableCharacters.length] = element;
    }
  }
  var password = "";
  // for loop to add available characters to the random character array
  for (let i = 0; i < passwordLength; i++) {
    var randomCharacter =
      allAvailableCharacters[
        Math.floor(Math.random() * allAvailableCharacters.length)
      ];
    password += randomCharacter;
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordOptions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
