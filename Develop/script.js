// Assignment Code
 
// points variable to the button "generate password"
let generateBtn = document.querySelector("#generate");
//create array that stores final password

let lowerCase = []
let upperCase = []
let specialChar = []
let allChars = lowerCase.concat(upperCase).concat(specialChar);
let passwordLength = prompt("How long would you like your password to be between 8-128 characters? Choose a number");
let password = []

// stores user response to: 2.) length of password
// 3.) lower case, upper case, numeric, and/or special characters
function specialCharPrompt() {
  let specialCharYesNo = confirm("Would you like your password to have at least one special character?");
if (specialCharYesNo === true) {
    specialChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
} else {
  specialChar = [];
}}

function lowercasePrompt() {
  let lowerCaseYesNo = confirm("Would you like your password to have at least one lowercase letter?");
if (lowerCaseYesNo === true) {
    lowerCase = ' !\"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'.split('');
} else {
  lowerCase = [];
}}

function uppercasePrompt() {
  let upperCaseYesNo = confirm("Would you like your password to have at least one uppercase letter?");
if (upperCaseYesNo === true) {
    upperCase = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
} else {
  upperCase = [];
}}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //code suggested from instructor during office hours on 4/15

  function getRandom(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  
  password.push(getRandom(lowerCase));
  password.push(getRandom(upperCase));
  password.push(getRandom(specialChars));
  
  for (i = 0; i < passwordLength - 3; i++) {
    password.push(getRandom(allChars));
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

