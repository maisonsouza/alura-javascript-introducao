console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array('Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
// Adicionando um item na lista
listaDeDestinos.push('Curitiba');
console.log(`Destinos possíveis`);
console.log(salvador, saoPaulo,rioDeJaneiro);
console.log(`Destinos com array ${listaDeDestinos}`);

listaDeDestinos.splice(3,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[0]);

