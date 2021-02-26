// Assignment Code

var generateBtn = document.querySelector("#generate");
const specialCharacters = ["!", "@" ,"#","$","%","^","&","*","(", ")", "😎", "🐱‍🚀"];
var length =document.getElementById("length");
var numbers = document.getElementById("numbers");
var lower =  document.getElementById("lower");
var upper = document.getElementById("upper");
 var special = document.getElementById("symbols");
 var passwordLength

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", () => {
  passwordLength = length.value
  console.log(numbers.value)
  console.log(lower.value)
  writePassword()
});

// Prompts after you click generate password

function generatePassword() {

  // minimum count for numbers, lower, upper, & special

  var minimumCount = 0;


  // empty minimums for numbers, lower, upper, & special

  var minimumNumbers = [];
  var minimumLower = [];
  var minimumUpper = [];
  var minimumSpecial = [];

  var passOptions = []
  // Generator functions

 
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    }

    function getLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    }

    function getUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    }
  

  // Checks to make sure user selected ok 

  if (numbers.value === "on") {
   for (let i = 0; i < 10; i++) {
     passOptions.push(getNumbers())
   }
  }
 
  if (lower.value === "on") {
   for (let i = 0; i < 25; i++) {
     passOptions.push(getLower())
     
   }
  }
  if (upper.value === "on") {
    for (let i = 0; i < 25; i++) {
      passOptions.push(getUpper())
      
    }

  }
  if (special.value === "on") {
    for (let i = 0; i < specialCharacters.length; i++) {
      passOptions.push(specialCharacters[i])
      
    }
  }
 console.log(passOptions)
  // empty string variable  for the for loop 

  var randomPasswordGenerated = [];

  // loop getting characters

  for (let i = 0; i < passwordLength; i++) {
    randomPasswordGenerated.push(passOptions[(Math.floor(Math.random() * passOptions.length))])

  }

  // characters are added 

  // randomPasswordGenerated += minimumNumbers;
  // randomPasswordGenerated += minimumLower;
  // randomPasswordGenerated += minimumUpper;
  // randomPasswordGenerated += minimumSpecial;

  return randomPasswordGenerated.join("");
}