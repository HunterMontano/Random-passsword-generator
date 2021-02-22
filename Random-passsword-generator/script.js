// Assignment Code

var generateBtn = document.querySelector("#generate");
const specialCharacters = "!@#$%^&*()";

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Prompts after you click generate password

function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");
  var numbers = confirm("Do you want numbers in your password?");
  var lower = confirm("Do you want lowercases in your password?");
  var upper = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");

  // minimum count for numbers, lower, upper, & special
  
  var minimumCount = 0;


  // empty minimums for numbers, lower, upper, & special

  var minimumNumbers = "";
  var minimumLower = "";
  var minimumUpper = "";
  var minimumSpecial = "";


  // Generator functions
 
  var functionArray = [
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    function getLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    function getUpper() {
      return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
  ];

  // Checks to make sure user selected ok 
  
  if (numbers === true) {
    minimumNumbers = functionArray[0];
    minimumCount++;

  }
  if (lower === true) {
    minimumLower = functionArray[1];
    minimumCount++;

  }
  if (upper === true) {
    minimumUpper = functionArray[2];
    minimumCount++;

  }
  if (special === true) {
    minimumSpecial = functionArray[3];
    minimumCount++;

  }

  // empty string variable  for the for loop 
  
  var randomPasswordGenerated = "";

  // loop getting characters
  
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += functionArray[randomNumberPicked]()

  }

  // characters are added 
  
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLower;
  randomPasswordGenerated += minimumUpper;
  randomPasswordGenerated += minimumSpecial;

  return randomPasswordGenerated;
}