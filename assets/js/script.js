var generateBtn = document.querySelector("#generate");


//Character sets
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var specialCharacters = "!@#$%^&*()"

function generatePassword() {

  // password length
  var getCharacterAmount = function() {
    var characterAmount = "";
    while (characterAmount === "" || characterAmount === null || characterAmount < 8 || characterAmount > 128) {
        characterAmount = prompt("How many characters would you like in your password? Enter any value between 8 and 128.");
    }
    return characterAmount;
  }

  // character type selection prompt
  var acceptedCharacterAmount = getCharacterAmount();
  
  window.alert("Please select your preferences for character types in your password. You must choose at least one type.")

  var useLowercase = window.confirm("Would you like to include lowercase letters in your password? (Ok = Yes; Cancel = No");
  
  var useUppercase = window.confirm("Would you like to include uppercase letters in your password? (Ok = Yes; Cancel = No");
  
  var useSpecialCharacters = window.confirm("Would you like to include special characters in your password? (Ok = Yes; Cancel = No");
  
  var useNumbers = window.confirm("Would you like to include numbers in your password? (Ok = Yes; Cancel = No");

  if (useNumbers === false && useLowercase === false && useUppercase === false && useSpecialCharacters === false) {
    window.alert("You must chose at least one character type! Click 'Generate Password' to try again!");
  }
  
  // Confirm password specifications
  window.alert("Your password will be " + acceptedCharacterAmount + " characters long, and includes the following character types: " + " Lowercase: " + useLowercase + 
  ". Uppercase: " + useUppercase + ". Special Characters: " + useSpecialCharacters + ". Numbers: " + useNumbers + ". Press 'OK' if correct.");

  //allowed characters based on user's input
  var allowedCharacters = '';
    if (useLowercase) {
      allowedCharacters += lowercase;
    }
    if (useUppercase) {
      allowedCharacters += uppercase;
    }
    if (useSpecialCharacters) {
      allowedCharacters += specialCharacters;
    }
    if (useNumbers) {
      allowedCharacters += numbers;
    };
  
  var password = '';
  var length = parseInt(acceptedCharacterAmount);
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters[random]
  }
  return password;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);