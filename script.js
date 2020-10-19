// Assignment Code
// Arrays created for each character that could be icluded in the password These characters include numbers, symbols and both upper and lower case letters.
// Array for each potential number  
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array for each potential uppercase character
let upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Array for each potential lowercase character
let lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//  Array for each potential symbol character
let symbols = [
  "s",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
//This is an empty array where the above arrays can be placed if the user based upon user preferences. 
let basket = [];

//This is the generate password fuction that includes multiple variables, conditional statements and a for loop.  This function is run in the below write password function.  
function generatePassword() {
  // Variable that lets the user choose the length of their password via prompt.
  let UserCharNumber = prompt(
    "How many characters would you like your password to be? Please enter a number between 8 and 128"
  );
  // Conditional statement to ensure that the value entered by the user has to fall within the above mentioned parameters.  
  if (UserCharNumber < 8 || UserCharNumber > 129) {
    return;
    // If the password is in the approved parameters, then the user is met with the following boolean prompts.
  } else {
    // Asks the user to confirm if they would like to use upper case characters.
    let ConfirmUpper = confirm("Would you like to use upper case characters?");
    // Asks the user to confirm if they would like to use lower case characters.
    let ConfirmLower = confirm("Would you like to use lower case characters?");
    // Asks the user to confirm if they would like to use number characters.
    let ConfirmNumbers = confirm("Would you like to use number characters?");
    // Asks the user to confirm if they would like to use symbol characters.
    let ConfirmSymbols = confirm("Would you like to use symbol Characters?");

    // As a password must contain characters, this conditional statemnt makes sure that at least one character type is seleceted to generate a password.
    if (
      ConfirmUpper === false &&
      ConfirmLower === false &&
      ConfirmNumbers === false &&
      ConfirmSymbols === false
    ) {
      alert("Please select at least one character type!");
    }
    // Concats the upper case character array into the basket array.
    if (ConfirmUpper === true) {
      basket = basket.concat(upper);
    }
    // Concats the lower case character array into the basket array.
    if (ConfirmLower === true) {
      basket = basket.concat(lower);
    }
    // Concats the numbers array into the basket array.
    if (ConfirmNumbers === true) {
      basket = basket.concat(numbers);
    }
    // Concats the symbols array into the basket array. 
    if (ConfirmSymbols === true) {
      basket = basket.concat(symbols);
    }

  }

  // Empty array for the array of characters that will become the password
  let newPassword = [];
  // For loop to select x random index's from the basket array that is determined by the UserCharNumber
  for (i = 0; i < UserCharNumber; i++) {
    newPassword =
  // The above variable is created and is equal to this fuction, which takes the combined arrays in the basket array, and selects random stings and numbers.  
      newPassword + basket[Math.floor(Math.random() * basket.length)];
  }
  // returns the above function
  return newPassword;


}
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
