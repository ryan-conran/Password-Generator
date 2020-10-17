// Assignment Code
let finalPassowrd = "";

let numbers = [0,1,2,3,4,5,6,7,8,9];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let symbols = ["\s","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
let basket = [];

let UserCharNumber = prompt("How many characters would you like your password to be?");

let ConfirmUpper = confirm("Would you like to use upper case characters?");
let ConfirmLower = confirm("Would you like to use lower case characters?");
let ConfirmNumbers = confirm("Would you like to use number characters?");
let ConfirmSymbols = confirm("Would you like to use symbol Characters?");

let passwordEl = document.querySelector("#password")



if (ConfirmUpper === true) {
  finalPassowrd = finalPassowrd.concat(pullFromArray(upper))
  passwordEl.textContent = finalPassowrd;
}


function pullFromArray (arr) {
  return arr[Math.floor(Math.random() * arr.length)];

}
  for (let i = 0; i < UserCharNumber; i++) {
    



    // if (UserCharNumber < 8 || UserCharNumber > 129) {
    //   UserCharNumber = prompt("Please enter a value betweeb 8 and 128");
    //   UserCharNumber = parseInt(UserCharNumber);
    // } else {

    // }

      // let UserCharUpper = confirm("Would you like to Use upper case characters?");
      // if (UserCharUpper === true) {
    
      //     console.log(Uppers);
      // } else {

      // }


      // let UserCharUpper = confirm("Would you like to Use upper case characters?");
      // if (UserCharUpper === true) {
    
      //     console.log(Uppers);
      // }


      // else () {

      //   UserCharNumber = prompt("Please enter a value betweeb 8 and 128");
      //   UserCharNumber = parseInt(UserCharNumber);
      //   let UserCharUpper = confirm("Would you like to Use upper case characters?");
      //   if (UserCharUpper === true) {
      
      //       console.log(Uppers);
      //   }

      }
    

    
    
    
    
    
    
    
    
    






    let generateBtn = document.querySelector("#generate");

    //

    // Write password to the #password input
    function writePassword() {
      let password = generatePassword();
      let passwordText = document.querySelector("#password");

      
      passwordText.value = password;
    }

generatePassword(){
  while(finalPassowrd < UserCharNumber){
    //add  to final password
  }
 
}




  // basket.push(random)



// console.log(basket);



// function generatePassword() {
//   let UserCharNumber = prompt(
//     "How many characters would you like your password to be?"
//   );
//   UserCharNumber = parseInt(UserCharNumber);

//   if (UserCharNumber < 8 || UserCharNumber > 129) {
//     return;
//     // UserCharNumber = prompt("Please enter a value between 8 and 128");
//     // UserCharNumber = parseInt(UserCharNumber);
//   }

  // let numbers = [0,1,2,3,4,5,6,7,8,9];

  // let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  // let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  // let symbols = ["\s","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

  // let basket = [numbers,upper,lower,symbols];

  // console.log(basket);


  // let UserCharUpper = confirm(
  //   "Would you like to Use upper case characters?"
  // );
  // if (UserCharUpper === true) {
  // basket.concat(Upper);
  // }
  // else (UserCharUpper === false) {
  
  // }

  // let UserCharLower = confirm(
  //   "Would you like to use lower case characters?"
  // );
  // if (UserCharLower === true) {
  // basket.concat(lower);
  // }
  // else (UserCharUpper === false) {

  // }

  // let CharNumbers = confirm(
  //   "Would you like to use numbers?"
  // );
  // if (CharNumbers === true) {
  // basket.concat(numbers);
  // }
  // else (CharNumbers === false) {

  // }

  // let UserCharSymbol = confirm(
  //   "Would you like to use symbols?"
  // );
  // if (UserCharSymbol === true) {
  // basket.concat(symbols);
  // }
  // else (UserCharSymbol === false) {

  // }

//   return "password";
// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
