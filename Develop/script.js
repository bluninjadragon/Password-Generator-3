// Assignment Code
 
// points variable to the button "generate password"
let generateBtn = document.querySelector("#generate");
//create array that stores final password. Prompt variables start off as blank, and are defined after the prompt
//is answered in prompt functions

let lowerCase = [];
let upperCase = [];
let specialChar = [];
let passwordLength = 0
let passwordRemainingLength = 0;

//combine all possibilities in one array
let allChars = ' !\"#$%&\'()*+,-./:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

//this password will be pushed into the empty array
//after function picks from guaranteed+randomized choices in an array
let password = [];

function passwordLengthPrompt() {
  passwordLength = prompt("How long would you like your password to be between 8-128 characters? Choose a number");
  if (passwordLength < 8) {
    alert("Your password must be at least 8 characters long");
    passwordLengthPrompt();
  } else if (passwordLength > 128) {
    alert("Your password must be less than 128 characters long");
    passwordLengthPrompt();
  }
}

// stores user response to: special characters
function specialCharPrompt() {
  let specialCharYesNo = confirm("Would you like your password to have at least one special character?");
if (specialCharYesNo === true) {
    specialChar = ' !\"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'.split('');
    passwordRemainingLength ++;
} else {
  specialChar = [];
}}

// stores user response to: lower case


function lowercasePrompt() {
  let lowerCaseYesNo = confirm("Would you like your password to have at least one lowercase letter?");
if (lowerCaseYesNo === true) {
    lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
    passwordRemainingLength ++;
} else {
  lowerCase = [];
}}

// stores user response to: upper case


function uppercasePrompt() {
  let upperCaseYesNo = confirm("Would you like your password to have at least one uppercase letter?");
if (upperCaseYesNo === true) {
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    passwordRemainingLength ++;
} else {
  upperCase = [];
}}

//the following two functions are code hints suggested from instructor during office hours on 4/15
//function that takes a random index from any array defined in prompts

function getRandom(arr) {
    
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function generatePassword() {
//call prompts
  passwordLengthPrompt()
  specialCharPrompt()
  lowercasePrompt()
  uppercasePrompt()
//push "guaranteed" characters to empty password array
  
  password.push(getRandom(lowerCase));
  password.push(getRandom(upperCase));
  password.push(getRandom(specialChar));

//selects the rest of the characters indiscriminately
//passwordLength - passwordRemainingLength is to offset anything that was selected due to the prompts
  for (i = 0; i < passwordLength - passwordRemainingLength; i++) {
    password.push(getRandom(allChars));
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  //reset the remaining length in case user decides to generate another password
  passwordRemainingLength = 0;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

