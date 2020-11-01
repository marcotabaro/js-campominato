/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita terMINa, altrimenti si continua chiedendo all'utente un altro numero.
La partita terMINa quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al terMINe della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

//dichiarazione variabili
var MIN = 1;
var MAX = 100;
var randomTot = 16;
var arrayPc=[];
var arrayUser=[];
var pcNum;
var message;
var userNum;
var difficulties = 100;
var points = 0;
var inputDiff = document.getElementById('inputDiff');



//Bottone avvia
btnAvvia.addEventListener('click', function (){

  //Scelta della difficoltà
  switch (inputDiff.value) {
    case 'easy':
    MAX = 100;
    break;
    case 'medium':
    MAX = 80;
    break;
    case 'hard':
    MAX = 50;
    break;
  }

// //Creazione campo composto da n.'MAX' quadratini
// var wrapper = document.getElementById('wrapper');
// var square = "<div class='square'></div>";
// for (var cont=0; cont < MAX; cont++){
//   wrapper.innerHTML += square;
// }
//push Randomnumbers(1/100) into arrayPc with 16 unique numbers
  while (arrayPc.length < randomTot){
    pcNum = randomNumber(MIN, MAX);
    console.log('Numero generato randomicamente: ', pcNum);
    isInArray(arrayPc, pcNum);
  }
  
  var inputUserNum = document.getElementById('inputUserNum');
  userNum = parseInt(inputUserNum.value);
  if ((userNum > MAX) || (userNum < MIN) || (isNaN(userNum)) ){
    alert('Non hai inserito un valore valido, per favore inserisci un numero da ' + MIN + ' a  ' + MAX);
    console.log(userNum);
  }

//push numeri inseriti in array con check e vittoria
   else if (arrayUser.length < (MAX - randomTot) -1 ){ parseInt(inputUserNum.value);

    isInTheArrays(arrayUser, userNum, arrayPc);
  document.getElementById('punteggio').innerHTML = 'points: ' + points;
  points +=10;
  console.log('Numero inserito: ', userNum);
  console.log('array UTENTE con 16 numeri differenti', arrayUser);
} else {
  alert("Complimenti, hai vinto!");
}
})

console.log('array PC con 16 numeri differenti', arrayPc);
