window.onload = function() {
    document.getElementById("rngout").innerHTML = Math.floor(Math.random() * 11);;
}

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

   document.getElementById('comparison').innerHTML = comparison;

}
