//function for random number between a MIN and a MAX included
function randomNumber(MIN, MAX) {
  MIN = Math.ceil(MIN);
  MAX = Math.floor(MAX);
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

//Function that check if there is the same value inside an array, if not add the element in the array
function isInArray(array, number) {
    if (!array.includes(number)) {
        array.push(number);
    } else {
        console.log(number,  ' already exists');
    }
}

//Function that check if there is the same value inside 2 different arrays, if not add the element in the first array
function isInTheArrays(array, number, array2) {
    if (!array.includes(number)) {
      if (!array2.includes(number)) {
        array.push(number);
      } else {
        alert('HAI PERSO!');
        points = 0;
        array.length = 0;
        array2.length = 0;
      }
    } else if (array.includes(number)) {
        alert('Hai già inserito il numero ' + number);
    }
}
