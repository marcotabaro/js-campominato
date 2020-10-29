/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

//dichiarazione variabili
var min = 1;
var max = 100;
var randomTot = 16;
var arrayPc=[];
var arrayUser=[];
var pcNum;
var userNum = parseInt(document.getElementById('inputUserNum').value);

//push Randomnumbers(1/100) into arrayPc with 16 unique numbers
while (arrayPc.length < randomTot){
  pcNum = randomNumber(min, max);
  console.log('Numero generato randomicamente: ', pcNum);
  Doppleganger(arrayPc, pcNum);
}

// while (arrayUser.length < (max - randomTot)){
// }

btnAvvia.addEventListener('click', function (){
  Doppleganger(arrayUser, userNum.value);
  console.log('Numero inserito: ', userNum);
  console.log('array UTENTE con 16 numeri differenti', arrayUser);
})

console.log('array PC con 16 numeri differenti', arrayPc);
