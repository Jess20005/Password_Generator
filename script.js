// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
console.log(writePassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
   //setting variables
    var password ="";
    var lowerCaseChars = ["abcdefghijklmnopqrstuvwxyz"];
    var upperCaseChars = ["ABCDEFGHIJKLMNOPQRSTUZWXYZ"];
    var numbers = ["0123456789"];
    var specChar = ["$%&#$@*!_^+-/"];
    var combinedChars = "";
    
    // converting the returned value to a number 
    var passwordLength = (prompt("How many characters would you like your password to contain?"));
    var passwordLength = parseInt (passwordLength);

  // creating if statement to check if passwordLength is valid and adding prompt if invalid
  if (passwordLength <8){
    alert("Password must be a minimun of 8 characters");
    generatePassword();
  }
  if (passwordLength >128){
    alert("Password max length is 128 characters");
    generatePassword();
  };
  
  // creating variables for each selection choice
    var hasLowerCase = confirm ("Click OK to include lower case characters?");
    var hasUpperCase = confirm ("Click OK to include upper case characters?");
    var hasNumbers = confirm ("Click OK to include numbers?");
    var hasSpecChar = confirm ("Click OK to include special characters?");
  
  
  // combinding each array selection with the combinedChars
        if (hasLowerCase === true ) {
          combinedChars+=lowerCaseChars;
        };
        if (hasUpperCase === true ) {
        combinedChars+=upperCaseChars;
        };
        if (hasNumbers === true ) {
          combinedChars+=numbers;
        };
        if (hasSpecChar === true ) {
          combinedChars+=specChar;
        };

// setting an array that contains all of the relevant characters
  randomPassword =[];

// random selector picking characters with a loop)
  for (var i =0; i<=passwordLength; i++){
    var randomPassword = Math.floor(Math.random() * combinedChars.length);}
    // console.log(randomPassword, combinedChars[randomPassword]); // 5, "A"
    alert("Your secure password is" + combinedChars);
    generatePassword()};
  }