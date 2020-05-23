// Assignment Code
var generateBtn = document.querySelector("#generate");
​
alert(generateBtn);
​
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
​
  var passwordText = document.querySelector("#password");
​
  passwordText.value = password;
​
}
​
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
​
// Write Password Function
function generatePassword() {
  var passwordLength= prompt("Enter the password length (Enter a number between 8-128)");
  var passwordLengthBad = true;