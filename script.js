
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
function getPasswordOptions() {

  var length = parseInt(
    prompt('How many characters do you want the password to have?')
  );

 
  if (isNaN(length) === true) {
    alert('Password length must be a number');
    return;
  }

  
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  
  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return;
  }

 
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including the special characters.'
  );

  
  var hasNumericCharacters = confirm(
    'Click OK to confirm including the numeric characters.'
  );

  
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including the lowercase characters.'
  );

 
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including the uppercase characters.'
  );

 
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('You have to select at least one character type');
    return;
  }

 
 




















































// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
