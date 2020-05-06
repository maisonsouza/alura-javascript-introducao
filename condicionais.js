console.log('Trabalhando com condicionais');

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
const idadeComprador = 17;
const estaAcompanhado = false;
const passagemComprada = false;

const listaDeDestinos = new Array('Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
console.log(`Destinos possíveis`, listaDeDestinos);
// if (idadeComprador >= 18) {
//     console.log(`Comprador é maior de idade`)
//     listaDeDestinos.splice(3, 1);
//     console.log(listaDeDestinos);
// } else if (estaAcompanhado) {
//     console.log("É menor mas tá companhado");
//     listaDeDestinos.splice(3, 1);
//     console.log(listaDeDestinos);
// } else {
//     console.log(`Comprador é menor de idade e está desacompanhado`);
// }

if (idadeComprador >= 18 && estaAcompanhado) {
    console.log(`Comprador é maior de idade`)
    listaDeDestinos.splice(3, 1);
    console.log(listaDeDestinos);
} else {
    console.log(`Comprador é menor de idade e está desacompanhado`);
}

console.log('Hora do embarque\n');
if(idadeComprador>=18 && passagemComprada){
    console.log(`Boa viagem\n`);
} else{
    console.log('Não pode embarcar\n');
}

