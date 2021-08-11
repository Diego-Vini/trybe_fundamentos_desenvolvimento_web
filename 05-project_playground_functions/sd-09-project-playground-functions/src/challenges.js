// Desafio 1
function compareTrue(boolean1, boolean2) {
  if(boolean1 && boolean2) {
    return true
  } else {
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ')
}

// Desafio 4
function concatName(arrayStr) {
  return arrayStr[arrayStr.length - 1] + ', ' +  arrayStr[0] + ' .'
}

// Desafio 5
function footballPoints(wins, ties) {
  const pointsForWins = 3;
  const pointsForTies = 1;
  let totPoints = (pointsForWins * wins) + (pointsForTies * ties);
  return totPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let countNumbers = 0
  let repeat = 0
  let higherNumber = 0
  for(let number in arrayNumbers) {
    let x = arrayNumbers[number]
    for(let toCompare in arrayNumbers){
      if(x === arrayNumbers[toCompare]){
        countNumbers += 1
      }
    }
    if(x > higherNumber){
      higherNumber = x
      repeat = countNumbers
    }
    countNumbers = 0
  }
  return repeat
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distCat1ToMouse = mouse - cat1;
  let distCat2ToMouse = mouse - cat2;
  if(distCat1ToMouse === distCat2ToMouse){
    return 'os gatos trombam e o rato foge'
  } else if (distCat1ToMouse < distCat2ToMouse){
    return 'cat1'
  } else {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
