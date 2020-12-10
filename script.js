// added list of numeric charactors
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// added list of numeric charactors
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
//added list of lower case charactors
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
// added list of upper case charactors
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

 
  var withSpecialCharacters = confirm(
    'Click OK to confirm including the special characters.'
  );

  
  var withNumericCharacters = confirm(
    'Click OK to confirm including the numeric characters.'
  );

  
  var withLowerCasedCharacters = confirm(
    'Click OK to confirm including the lowercase characters.'
  );

 
  var withUpperCasedCharacters = confirm(
    'Click OK to confirm including the uppercase characters.'
  );

 
  if (
    withSpecialCharacters === false &&
    withNumericCharacters === false &&
    withLowerCasedCharacters === false &&
    withUpperCasedCharacters === false
  ) {
    alert('You have to select at least one character type');
    return;
  }

  var passwordOptions = {
    length: length,
    withSpecialCharacters: withSpecialCharacters,
    withNumericCharacters: withNumericCharacters,
    withLowerCasedCharacters: withLowerCasedCharacters,
    withUpperCasedCharacters: withUpperCasedCharacters
  };

  return passwordOptions;
}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  
  var possibleCharacters = [];


  var guaranteedCharacters = [];

 
  if (options.withSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.withNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

 
  if (options.withLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

 
  if (options.withUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

 
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

 
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

 
  return result.join('');
}

var generateBtn = document.querySelector('#generate');


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


generateBtn.addEventListener('click', writePassword);




 
 




















































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
