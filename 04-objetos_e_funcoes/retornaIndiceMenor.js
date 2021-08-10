/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
*/
let arrayDeNumeros = [2, 4, 6, 7, 10, 0, -3]

function verificaMenorIndice (numeros) {
  let indiceMenor = 0;
  for(let indiceNumeros in arrayDeNumeros) {
  if(arrayDeNumeros[indiceMenor] > arrayDeNumeros[indiceNumeros]){
    indiceMenor = indiceNumeros
   }
  }
  return indiceMenor
}


console.log(verificaMenorIndice(arrayDeNumeros));