console.log('\nLoops');

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
const idadeComprador = 17;
const destino = "Rio de Janeiro";
const estaAcompanhado = false;
let temPassagemComprada = false;

const listaDeDestinos = new Array('Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
console.log(`\nDestinos possíveis`, listaDeDestinos);

if (idadeComprador >= 18 && estaAcompanhado) {
    console.log(`Comprador é maior de idade`)
    listaDeDestinos.splice(3, 1);
    temPassagemComprada = true;
    console.log(listaDeDestinos);
} else {
    console.log(`Comprador é menor de idade e está desacompanhado`);
}

console.log('Hora do embarque\n');
let podeComprar = false;
if(idadeComprador>=18 && passagemComprada){
    podeComprar = true;
    console.log(`Boa viagem\n`);
} else{
    console.log('Não pode embarcar\n');
}

// While
let contador = 0;
let destinoExiste = false;
while (contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        console.log("Destino existe");
        break;
    } else {
        console.log("Destino não existe");
    }
    contador++;
}

// For
for (let cont=0;cont<3;cont+=1  ) {
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
        console.log("Destino existe");
        break;
    }
}

if(podeComprar && destinoExiste){
    console.log("Boa viagem")
}