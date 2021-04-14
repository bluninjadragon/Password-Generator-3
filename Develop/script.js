// Assignment Code
// points variable to the button "generate password"
let generateBtn = document.querySelector("#generate");

//create array that stores final password

let password = []


// stores user response to: 1.) create a password 2.) length of password
// 3.) lower case, upper case, numeric, and/or special characters

//prompt to create password
let createPass = prompt("Would you like to create a new password?", "Yes/No?")

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(); {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
