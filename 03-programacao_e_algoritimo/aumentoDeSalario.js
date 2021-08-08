/*
Salário Percentual de Reajuste:
0 - 400            15%
400.01 - 800.00    12%
800.01 - 1200.00   10%
1200.01 - 2000.00  7%¨
Acima de 2000.00   4%
*/

let salarios = [400.00, 800.01, 2000.00, 250.00, 455.00, 1300.00, 3000.00]

let faixaPercentual_15 = 0.15;
let faixaPercentual_12 = 0.12;
let faixaPercentual_10 = 0.10;
let faixaPercentual_7 = 0.07;
let faixaPercentual_4 = 0.04;

for (let salario of salarios) {
  let novoSalario = 0;
  let faixaPercentual = 0;
  let salarioAtual = salario;

  if(salarioAtual <= 400) {
      novoSalario = salarioAtual + (salarioAtual * faixaPercentual_15);
      faixaPercentual = faixaPercentual_15 * 100;
  } else if (salarioAtual <= 800) {
      novoSalario = salarioAtual + (salarioAtual * faixaPercentual_12)
      faixaPercentual = faixaPercentual_12 * 100;
  } else if (salarioAtual <= 1200) {
      novoSalario = salarioAtual + (salarioAtual * faixaPercentual_10)
      faixaPercentual = faixaPercentual_10 * 100;
  } else if (salarioAtual <= 2000) {
      novoSalario = salarioAtual + (salarioAtual * faixaPercentual_7)
      faixaPercentual = faixaPercentual_7 * 100;
  } else {
      novoSalario = salarioAtual + (salarioAtual * faixaPercentual_4)
      faixaPercentual = faixaPercentual_4 * 100;
  }
  console.log(`Novo salário: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${(novoSalario - salarioAtual).toFixed(2)}`)
  console.log(faixaPercentual.toFixed(2), '%')
  console.log('---------------------------')
}

