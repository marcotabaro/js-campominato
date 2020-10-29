//function for random number between a min and a max included
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
        array.length = 0;
        array2.length = 0;
      }
    } else if (array.indexOf(number) > -1) {
        console.log(number,  ' already exists');
    }
}
