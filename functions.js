//function for random number between a min and a max included
function randomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) +min;
}

//Function that check if there is the same value inside an array, if not add the element in the array
function Doppleganger(arrayPc, numPc) {
    if (arrayPc.indexOf(numPc) === -1) {
        numPc.push(arrayPc);
    } else if (arrayPc.indexOf(numPc) > -1) {
        console.log('The number already exists');
    }
}
