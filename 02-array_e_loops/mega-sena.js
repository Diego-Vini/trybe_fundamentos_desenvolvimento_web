let megaSena = [];

// const primeiroNumero = Math.ceil(Math.random() * 60);
// const segundoNumero = Math.ceil(Math.random() * 60);
// const terceiroNumero = Math.ceil(Math.random() * 60);
// const quartoNumero = Math.ceil(Math.random() * 60);
// const quintoNumero = Math.ceil(Math.random() * 60);
// const sextoNumero = Math.ceil(Math.random() * 60);

// megaSena.push(primeiroNumero);
// megaSena.push(segundoNumero);
// megaSena.push(terceiroNumero);
// megaSena.push(quartoNumero);
// megaSena.push(quintoNumero);
// megaSena.push(sextoNumero);

for (let indexSorteio = 0; indexSorteio < 6; indexSorteio += 1) {
    megaSena.push(Math.ceil(Math.random() * 60))
  }

const meuJogo = [6, 7, 8, 20, 12, 30];

let numeroDeAcertos = 0

/*for(let index = 0; index < megaSena.length; index += 1)*/ 
for(const index of megaSena){
/*for (let indexMeuJogo = 0; indexMeuJogo < meuJogo.length; indexMeuJogo += 1)*/
  for (indexMeuJogo of meuJogo){
    if(index === indexMeuJogo) {
      numeroDeAcertos += 1;
    }
  };
};
console.log(`Os numeros sorteados na mega sena são: ${megaSena}`);
console.log(`Os numeros do seu jogo são: ${meuJogo}`);
console.log(`O numero de acertos foi: ${numeroDeAcertos}`);
    