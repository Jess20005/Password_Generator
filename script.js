// Write password to the #password input
function writePassword() {

    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  

function generatePassword(){}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays to be selected from
// var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"; 
var lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var upperCaseChars = ["A","B","C","D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// structure the numeric chars as an array
var numbers = ["0,1,2,3,4,5,6,7,8,9"]; 
var specChar = ["$%&#$@*!_^+-/"];
var combinedChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0,1,2,3,4,5,6,7,8,9","$%&#$@*!_^+-"]

// convert the returned value of prompt to a number 

var passwordLength = prompt("How many characters would you like your password to contain?")

// check if passwordLength is lt 8 or gt 128, if it's not valid, you can alert the user "your password should ..."
// if statement to check if passwordLength is valid

if (passwordLength <8){
  alert("Password must be a minimun of 8 characters")
  prompt("How many characters would you like your password to contain?")
}
if (passwordLength >128){
  alert("Password max length is 128 characters")
  prompt("How many characters would you like your password to contain?")
};

// create variables for uppercase, numeric, specChars
var hasLowerCase = confirm ("Do you want to include lower case characters?");
var hasUpperCase=confirm ("Do you want to include upper case characters?");
var hasNumbers=confirm ("Do you want to include numbers?");
var hasSpecChar=confirm ("Do you want to include special characters?");


// combine the lower array with the combinedChars
if (hasLowerCase === true ) {
  lowerCaseChars+=combinedChars;
};
if (hasLowerCase === true ) {
  upperCaseChars+=combinedChars;
};
if (hasLowerCase === true ) {
  numbers+=combinedChars;
};
if (hasLowerCase === true ) {
  specChar+=combinedChars;
};

// here you will end up with an array that contains all of the relevant characters
var randomPassword =[];


// pulling one random character out, do it passwordLenght times (with a loop)
for (var i =0; i<=passwordLength; i++){
var randomPassword = Math.floor(Math.random() * combinedChars.length);
// console.log(randomPassword, combinedChars[randomPassword]); // 5, "A"
}

randomPassword+=lowerCaseChars;
randomPassword+=upperCaseChars;
randomPassword+=numbers;
randomPassword+=specChar;


