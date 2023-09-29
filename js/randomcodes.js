// function to generate random codes
function generateCode() {
  var code = " "; /* Initialize null value */
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  //Generate multiple random characters multiple times using loop

  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }
  return code;
}
document.getElementById("codes").innerHTML = generateCode();
// Disable button
function disableButton() {
  document.getElementById("submit").disabled = true;
}
disableButton();
