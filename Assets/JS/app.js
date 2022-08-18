// Assignment Code
var generateBtn = document.querySelector("#generate");

// Here we are creating password object.
var pwdCriteria = {

  // This is the property for length of password
  pwdLength: 0,

  //This is an array used to store lowercase letters.
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  // This is an array used to store uppercase letters.
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  // This is an array used to store numbers.
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  // This is an array used to store characters. 
  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}

// Write password to the #password input on index.html
function writePassword() {
  // This calls upon the generatePassword function
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// This adds an event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // This function stores the password to be generated and returned 
  var result = "";

  //These are variables to collect input from user prompts
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  // This initializes characters
  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  // This checks the password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters would you like your password to be? \nPassword must be between 8 and 128 characters.");

    // This signifies what ill happen if user presses cancel
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      // This function checks to see if a user has entered an integer. 
      if (!isFinite(passwordLength)) {
        alert("Sorry, that's not a number! Try again!");
        return "Your secure password";
      }
      else {
        // This function checks whether the password meets length criteria
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Your password must be between 8 and 128 characters. Try again!");
          return "Your secure password";
        }
        else {

          // Displays the prompts for criteria. 
          showPrompts();

          
          while (pwdCriteria.pwdLength < passwordLength) {
            // This is an if statement to ensure the user selects at least one of the criteria.
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("Make sure that you select at least one criteria of lowercase, uppercase, numbers or special characters. Try again!")
              showPrompts();
            }
            else {
              // This function shows that if the user selected a lowercase letter and there is still room to add characters, then it will
              // randomly grab a number from the array and add it to the end of result 
              if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdCriteria.pwdLength++;
              }

              // This function shows that if the user selected a special character and there is still room to add characters, then it will
              // randomly grab a number from the array and add it to the end of result              
              if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdCriteria.pwdLength++;
              }

              // This function shows that if the user selected an uppercase letter and there is still room to add characters, then it will
              // randomly grab a number from the array and add it to the end of result 
              if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
                var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdCriteria.pwdLength++;
              }
              // This function shows that if the user selected a number and there is still room to add characters, then it will
              // randomly grab a number from the array and add it to the end of result 
              if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
                var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdCriteria.pwdLength++;
              }
            }
          }
        }
      }
    }

    // This function returns the generated password back to the calling function.
    return result;

    // This is an internal function to prompt the user for criteria
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters in your password?");
      upperCase = confirm("Do you want to use upper case letters in your password?");
      numbers = confirm("Do you want to use numbers in your password?");
      specialChar = confirm("Do you want to use any special characters in your password?");
    }
  }
}