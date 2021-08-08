let tamanhoDoArray = 3;
let valorMinimo = 7;
let valorMaximo = 36;

let numerosAleatorios = [];

for (let index = 0; index < tamanhoDoArray; index += 1) {
  let numeroAleatorio = Math.floor(Math.random() * (valorMaximo - valorMinimo)) + valorMinimo
  numerosAleatorios.push(numeroAleatorio);
}

let result = 0;

for(let numeroAleatorio of numerosAleatorios) {
  if(numeroAleatorio % 2 === 1) {
    result += numeroAleatorio
  }
}

console.log(numerosAleatorios)
console.log('A soma dos numeros impares é: ', result)