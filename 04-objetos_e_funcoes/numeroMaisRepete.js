/*
    Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
*/

let numeros = [2, 4, 3, 4, 2, 4, 5, 8, 4, 2];

let primeiraSomaDosNumeros = 0;
let valor = 0;
let maiorNumero = 0

for (numero in numeros) {
  let primeiroIndice = numeros[numero];
  for(comparaNumero in numeros){
    if(primeiroIndice === numeros[comparaNumero]) {
      primeiraSomaDosNumeros += 1
    }
}
    if(primeiraSomaDosNumeros > valor) {
    valor = primeiraSomaDosNumeros
    maiorNumero = numero 
  }
  primeiraSomaDosNumeros = 0 
}

console.log(numeros[maiorNumero])