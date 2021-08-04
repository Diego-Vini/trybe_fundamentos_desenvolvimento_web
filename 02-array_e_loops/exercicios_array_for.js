let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele 
//contidos com a função console.log() ;
console.log('======Resolução exercicio 1======');
for (number of numbers){
  console.log(number);
};

// Para o segundo exercício, some todos os valores contidos no array e 
// imprima o resultado
console.log('======Resolução exercicio 2======');

let sumNumbers = 0;

for (number of numbers) {
  sumNumbers = sumNumbers + number;
}

console.log(`A soma dos numeros é: ${sumNumbers}`);

//Para o terceiro exercício, calcule e imprima a média aritmética dos 
//valores contidos no array;
console.log('======Resolução exercicio 3======');

let avarageNumbers = 0;

for(number of numbers) {
  avarageNumbers = sumNumbers / numbers.length;
};

console.log(`A média dos numeros é ${avarageNumbers}`);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20"
// . Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log('======Resolução exercicio 4======');
console.log(avarageNumbers > 20 ? 'Valor maior que 20' :
'Valor menor ou igual a 20');

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log('======Resolução exercicio 5======');

let highestValue = 0;
for(number of numbers) {
  if (highestValue < number) {
    highestValue = number
  }
};

console.log(highestValue);

// Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log('======Resolução exercicio 6======');
let oddNumbers = 0;
for(number in numbers) {
  if (number % 2 != 0){
    oddNumbers = oddNumbers += 1;
  }
};

console.log(`A quantidade de numeros pares é: ${oddNumbers}`);

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log('======Resolução exercicio 7======');
let lowerValue = oddNumbers;
for(number of numbers) {
    if (lowerValue > number) {
    lowerValue = number
  }
};

console.log(lowerValue);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
console.log('======Resolução exercicio 8======');

for(let index = 0; index <= 25; index += 1){
  console.log(index)
};

// Utilizando o array criado no exercício anterior imprima o resultado da divisão 
// de cada um dos elementos por 2

console.log('======Resolução exercicio 9======');
let result;
for(let index = 0; index <= 25; index += 1){
    result = index / 2;
    console.log(`${index} / 2 = ${result}`)
  };
  
//entender o que está acontencedo no código abaixo
//imprima seus valores
  for (let index = 2; index < numbers.length; index += 1) {
      //index = 2 - numbers.length = 10
    for (let secondIndex = 1; secondIndex < index; secondIndex += 1) {
      //secondIndex = 1 - index = 2
      if (numbers[index] < numbers[secondIndex]) {
        //numbers[index] = 3 - numbers[secondIndex] = 9
        let position = numbers[index];
        //position = 3
        numbers[index] = numbers[secondIndex];
        // numbers[index] = 1
        numbers[secondIndex] = position;
        // numbers[secondIndex] = 3
      }
    }
  }
console.log('======Resolução exercicio Bonus 1======');

console.log(`O código compara numeros e inverte a posição se o numero da
posição 1 for menor que o numero na posição 2`)

console.log(numbers);
//Ordene o array numbers em ordem decrescente e imprima seus valores;

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
    //index = 1 - numbers.length = 10
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    //secondIndex = 0 - index = 1
    if (numbers[index] > numbers[secondIndex]) {
      //numbers[index] = 9 - numbers[secondIndex] = 5
      let position = numbers[index];
      //position = 9
      numbers[index] = numbers[secondIndex];
      // numbers[index] = 0
      numbers[secondIndex] = position;
      // numbers[secondIndex] = 9
    }
  }
}
console.log('======Resolução exercicio Bonus 2======');

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = []
for (let index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length) {
      newNumbers.push(numbers[index] * numbers[index + 1])
    }else{
      newNumbers.push(numbers[index] * 2)
    }
     
  };

console.log('======Resolução exercicio Bonus 2======');

console.log(newNumbers);
