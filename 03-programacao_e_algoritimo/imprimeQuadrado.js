// Dado um valor n > 1
const n = 5;
// Imprime a mesma quantidade de caracteres na linha e na coluna

//Imprimindo a coluna

let inputLine = '';
let symbol = '*';
for (let indexColunm = 0; indexColunm < n; indexColunm += 1){ 
  inputLine = inputLine + symbol
};

for(let indexLine = 0; indexLine < n; indexLine += 1){
  console.log(inputLine)
}