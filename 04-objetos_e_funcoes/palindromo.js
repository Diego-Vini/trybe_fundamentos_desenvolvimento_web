/*
 - Validar se uma string é um palíndromo
*/
function verificaPalindromo(str) {
  arrayStr = str.split('');
  reverteStr = arrayStr.reverse(); 
  novaStr = reverteStr.join('');
  if(str === novaStr){
    console.log(true)
  } else {
    console.log(false)
  }
}

verificaPalindromo('osso');
