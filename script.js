// added list of numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// added list of numeric characters
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
//added list of lower case characters
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
// added list of upper case characters
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
// function to get password options from the user
function getPasswordOptions() {

  var length = parseInt(
    prompt('How many characters do you want the password to have?')
  );

  // if statement to alert if user doesn't submit a number
  if (isNaN(length) === true) {
    alert('Password length must be a number');
    return;
  }

  // alert for user to select atleast 8 characters
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // alert for user to keep selection under 129 characters
  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return;
  }

  // alert to confirm adding special charactors
  var withSpecialCharacters = confirm(
    'Click OK to confirm including the special characters.'
  );

  // alert to confirm adding numeric characters
  var withNumericCharacters = confirm(
    'Click OK to confirm including the numeric characters.'
  );

  // alert to confirm adding lowercase characters   
  var withLowerCasedCharacters = confirm(
    'Click OK to confirm including the lowercase characters.'
  );

  // alert to confirm adding uppercase characters
  var withUpperCasedCharacters = confirm(
    'Click OK to confirm including the uppercase characters.'
  );

// conditional statement to make sure user selects atleast one option
  if (
    withSpecialCharacters === false &&
    withNumericCharacters === false &&
    withLowerCasedCharacters === false &&
    withUpperCasedCharacters === false
  ) {
    alert('You have to select at least one character type');
    return;
  }
// object to store user info
  var passwordOptions = {
    length: length,
    withSpecialCharacters: withSpecialCharacters,
    withNumericCharacters: withNumericCharacters,
    withLowerCasedCharacters: withLowerCasedCharacters,
    withUpperCasedCharacters: withUpperCasedCharacters
  };

  return passwordOptions;
}

// function to generate the random characters from the array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// function to generate the password
function generatePassword() {
  var options = getPasswordOptions();

  var result = [];


  var possibleCharacters = [];


  var guaranteedCharacters = [];

// condition stetement to add special charaters to the array
  if (options.withSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
// condition statement to add numeric characters to the array
  if (options.withNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

// condition statement to add lowercase charaters to the array
  if (options.withLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
// condition statement to add uppercase charaters to the array

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

// adds password to the screen
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
