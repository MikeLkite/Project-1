//Mikes Casino
var counter = 0;
var randomNumber = Math.floor(Math.random() * 11);

//compare RNG and user defined number on clicking hit me button
document.getElementById('submit').onclick = compare;

function compare() {

  var userInput = document.getElementById("usernum").value;
  userInput = parseInt(userInput, 10);

  var comparison;

  if(randomNumber > userInput) {
    comparison = 'Too low';
  } else if(randomNumber < userInput) {
    comparison = 'Too High';
  } else {
    comparison = 'CORRECT!';
  }

  counter ++;
  //Update the tries
  document.getElementById('tries_result').innerHTML = counter;

  //output to bottommenu rngbox
  document.getElementById('comparison').innerHTML = comparison;

  var trysText = counter > 1 ? 'tries' : 'try';

  if ( comparison === 'CORRECT!' ) alert( 'Well done sonny!  You won the game, and did it in only ' + counter + ' ' + trysText );
}
