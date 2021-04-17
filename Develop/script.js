// Assignment Code
 
// points variable to the button "generate password"
let generateBtn = document.querySelector("#generate");
//create array that stores final password

let lowerCase = 'abcdefghijklmnopqrstuvwxyz0123456789'.split(
  ''
);
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
);
let specialChars = ' !\"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'.split(
  ''
);
let allChars = lowerCase.concat(upperCase).concat(specialChars);
let passwordLength = prompt("How long would you like your password to be between 8-128 characters? Choose a number");
let password = [];

// stores user response to: 1.) create a password 2.) length of password
// 3.) lower case, upper case, numeric, and/or special characters

let r = confirm("hi")

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(); {
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

