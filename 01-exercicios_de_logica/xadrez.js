/*
- Exercicio base
 Escreva um programa que receba o nome de uma peça de xadrez e retorne os 
 movimentos que ela faz.
 Acrecentei:
 - Template string
 - Função que converte a primeira letra para maiusculo
*/

const pecaXadrez = 'x';

function alteraPrimeiraLetra(str) {
   const newStr = str[0].toUpperCase() + str.substr(1);
   return newStr;
}

switch (pecaXadrez.toLowerCase()) {
    case 'torre': 
        console.log(`${alteraPrimeiraLetra(pecaXadrez)} movimenta-se somente na 
        horizontal ou vertical.`)
        break;
    case 'bispo':
        console.log(`${alteraPrimeiraLetra(pecaXadrez)}, movimenta-se somente na
         diagonal`)
        break;
    case 'dama':
        console.log(`${alteraPrimeiraLetra(pecaXadrez)}, movimenta se na 
        horizontal, vertical ou diagonal`)
        break;
    case 'rei':
        console.log(`${alteraPrimeiraLetra(pecaXadrez)}, movimenta-se em qualquer
        direção com limite de uma casa`)
        break;
    case 'peao':
        console.log(`${alteraPrimeiraLetra(pecaXadrez)}, somente pode mover-se 
        adjacente a sua posição anterior`)
        break;
    case 'cavalo':
        console.log(`${alteraPrimeiraLetra(pecaXadrez)}, movimenta-se em forma 
        de L`)
        break
    default:
        console.log(`${alteraPrimeiraLetra(pecaXadrez)}, não é uma peça valida`)
        break;
}

