//Mikes Casino

var higher = 0;
var lower = 0;
var counter = 0;

//Generates random number and puts it on page
window.onload = function() {
    document.getElementById("rngout").innerHTML = Math.floor(Math.random() * 11);;
}

//compare RNG and user defined number on clicking hit me button
document.getElementById('submit').onclick = compare;

function compare() {

  var a =  document.getElementById("rngout").innerHTML
  a = parseFloat(a);

  var b = document.getElementById("usernum").value;
  b = parseFloat(b);

  var comparison;

  if(a > b) {
    comparison = 'HIGHER';
  } else if(a < b) {
    comparison = 'LOWER';
  } else {
    comparison = 'CORRECT';
  }

//output to bottommenu rngbox
document.getElementById('comparison').innerHTML = comparison;
}

//count how many times a button is clicked
