//function for random number between a MIN and a MAX included
function randomNumber(MIN, MAX) {
  MIN = Math.ceil(MIN);
  MAX = Math.floor(MAX);
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

//Function that check if there is the same value inside an array, if not add the element in the array
function Doppleganger(array, number) {
    if (array.indexOf(number) === -1) {
        array.push(number);
    } else if (array.indexOf(number) > -1) {
        console.log(number,  ' already exists');
    }
}

function DopplegangerUser(array, number, array2) {
    if (array.indexOf(number) === -1){
      if (array2.indexOf(number) === -1) {
        array.push(number);
      } else {
        alert('HAI PERSO!');
      }
    } else if (array.indexOf(number) > -1) {
        alert('Hai già inserito il numero ' + number);
    }
}
