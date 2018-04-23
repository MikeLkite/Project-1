// When the user clicks the button, run the compare function
document.getElementById('hitbutton').onclick = compare;

function compare() {

  // Get the value stored in #a
  var a = document.getElementById('userinput').value;
  a = parseFloat(a);

  // Get the value stored in #b
  var b = document.getElementById('rngout').value;
  b = parseFloat(b);

  // Set up a variable to store the comparison operator
  var comparison;

  // TODO: Set `comparison` string based on relationship between a and b
  if(a > b) {
    comparison = 'higher';
  } else if(a < b) {
    comparison = 'lower';
  } else {
    comparison = 'CORRECT';
  }

  // Print `comparison` string on the page
  document.getElementById('feedback').innerHTML = comparison;

}
