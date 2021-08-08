// Posição da rainha

let posicaoDaRainhaNaLinha = 4;
let posicaoDaRainhaNaColuna = 4;


// Posição da peça oponente

let posicaoDoOponenteNaLinha = 3;
let posicaoDoOponenteNaColuna = 5;

// Identificar se o ataque foi bem sucedido

let sucessoNoAtaque = false;

// Identificar se a peça do oponente está na mesma linha

if (posicaoDaRainhaNaLinha === posicaoDoOponenteNaLinha) {
  sucessoNoAtaque = true;
};

//Identificar se a peça do oponente esta na mesma coluna

if (posicaoDaRainhaNaColuna === posicaoDoOponenteNaColuna) {
  sucessoNoAtaque = true;
};

// Identificar se a peça do oponente está na diagonal inferior esquerda
for(let index = 1; index < 8; index += 1) {
  let posicaoAtualDaRainhaNaLinha = posicaoDaRainhaNaLinha - index;
  let posicaoAtualDaRainhaNaColuna = posicaoDaRainhaNaColuna - index;

  if (posicaoAtualDaRainhaNaColuna === 0 || posicaoAtualDaRainhaNaLinha === 0) {
      break;
  }

  if (posicaoAtualDaRainhaNaColuna === posicaoDoOponenteNaColuna
    && posicaoAtualDaRainhaNaLinha === posicaoDoOponenteNaLinha){
        console.log('Ataque bem sucedido na diagonal esquerda inferior')
        sucessoNoAtaque = true;
    }
};

// Identificar se a peça do oponente está na diagonal superior esquerda
for(let index = 1; index < 8; index += 1) {
    let posicaoAtualDaRainhaNaLinha = posicaoDaRainhaNaLinha + index;
    let posicaoAtualDaRainhaNaColuna = posicaoDaRainhaNaColuna - index;
  
    if (posicaoAtualDaRainhaNaColuna === 0 || posicaoAtualDaRainhaNaLinha > 8) {
        break;
    }
  
    if (posicaoAtualDaRainhaNaColuna === posicaoDoOponenteNaColuna
      && posicaoAtualDaRainhaNaLinha === posicaoDoOponenteNaLinha){
          console.log('Ataque bem sucedido na diagonal esquerda superior')
          sucessoNoAtaque = true;
      }
  };

// Identificar se a peça do oponente está na diagonal inferior diereita

for(let index = 1; index < 8; index += 1) {
    let posicaoAtualDaRainhaNaLinha = posicaoDaRainhaNaLinha + index;
    let posicaoAtualDaRainhaNaColuna = posicaoDaRainhaNaColuna + index;
  
    if (posicaoAtualDaRainhaNaColuna > 8 || posicaoAtualDaRainhaNaLinha > 8) {
        break;
    }
  
    if (posicaoAtualDaRainhaNaColuna === posicaoDoOponenteNaColuna
      && posicaoAtualDaRainhaNaLinha === posicaoDoOponenteNaLinha){
          console.log('Ataque bem sucedido na diagonal direita superior')
          sucessoNoAtaque = true;
      }
  };

// Identificar se a peça do oponente está na diagonal inferior direita

for(let index = 1; index < 8; index += 1) {
    let posicaoAtualDaRainhaNaLinha = posicaoDaRainhaNaLinha - index;
    let posicaoAtualDaRainhaNaColuna = posicaoDaRainhaNaColuna + index;
  
    if (posicaoAtualDaRainhaNaColuna > 8 || posicaoAtualDaRainhaNaLinha === 0) {
        break;
    }
  
    if (posicaoAtualDaRainhaNaColuna === posicaoDoOponenteNaColuna
      && posicaoAtualDaRainhaNaLinha === posicaoDoOponenteNaLinha){
          console.log('Ataque bem sucedido na diagonal direita inferior')
          sucessoNoAtaque = true;
      }
  };

console.log('Ataque executado com sucesso?', sucessoNoAtaque);
