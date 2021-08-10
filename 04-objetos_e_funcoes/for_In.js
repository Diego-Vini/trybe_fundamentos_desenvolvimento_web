let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info_1 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
  };

  console.log(`Bem vinda, ${info.personagem}`);

  info['recorrente'] = 'Não';
  info_1['recorrente'] = 'Não';

  console.table(info);

  for (let infos in info) {
    console.log(infos)
  };

console.log('----------------------');

  for (let infos in info) {
    console.log(info[infos])
  };

console.log(`${info.personagem} e ${info_1.personagem}`);

console.log(`${info_1.personagem} e ${info_1.origem}`);

console.log(`${info.nota} e ${info_1.nota}`);

if (info.recorrente === 'Sim' && info_1.recorrente ==='Sim') {
  console.log('Ambos recorrentes')
} else if (info.recorrente != 'Sim' && info_1.recorrente === 'Sim') {
  console.log(`${info.personagem} não é recorrente`)
} else if (info.recorrente === 'Sim' && info_1.recorrente != 'Sim') {
    console.log(`${info_1.personagem} não é recorrente`)
} else {
console.log('Ambos não recorrentes')
}