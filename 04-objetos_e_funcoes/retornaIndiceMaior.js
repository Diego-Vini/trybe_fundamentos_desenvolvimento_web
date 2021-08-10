/*
Crie uma função que receba um array de inteiros e retorne o índice do maiorvalor.
*/
let arrayDeNumeros = [2, 3, 6, 7, 10, 1]

function verificaMaiorIndice (numeros) {
  let indiceMaior = 0;
  for(let indiceNumeros in arrayDeNumeros) {
  if(arrayDeNumeros[indiceMaior] < arrayDeNumeros[indiceNumeros]){
    indiceMaior = indiceNumeros
   }
  }
  return indiceMaior
}


console.log(verificaMaiorIndice(arrayDeNumeros));