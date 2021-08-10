let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'fredericsonten']

let indice = 0;
let verificaNome

function maiorNome (nomes) {
  for (nome in nomes) {
    if(nomes[indice].length < nomes[nome].length) {
      indice = nome
      verificaNome = nomes[nome]
      }
    }
    return verificaNome
}

console.log(`O maior nome no array de nomes é ${maiorNome(nomes)}`)