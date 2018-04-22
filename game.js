window.onload = function() {
    document.getElementById("rngout").innerHTML = Math.floor(Math.random() * 11);;
}

function diceroll()
  {
    var x = .input ;
    document.getElementById("feedback").innerHTML = (x > 8);
}
