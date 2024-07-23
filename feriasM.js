const prompt = require('prompt-sync')({ sigint: true });
let Atividades = [];
let Dia = [];

function checkData() {
    if (isNaN(data)) {
        console.log('data invalida, por favor insira uma data válida');
    } else {
        Atividades.push(acao);
        Dia.push(data);
        console.log('atividade adicionada com sucesso. Insira outra atividade ou digite sair');
    }
}

function listar() {
    console.log(`\no seu nome é ${nome}, e aqui estão suas atividades: \n`);

    Atividades.forEach((acao, index) => {
        console.log(index + 1 + '. ' + acao + ' foi realizada no dia ' + Dia[index]);
    });
}

function adicionar() {
    acao = prompt('o que você fez nas férias?');
    data = Number(prompt('Que dia?'));
}

function atualizar(){

}


function remover(dias) {
    const i = dias.findIndex(dia => dia.dias === dia);
    if (i !== -1) {
        dias.splice(i, 1);
        console.log("Atividade do Dia Removida");
    } else {
        console.log("Dia Nao Encontrado !");
    }
}

module.exports = { checkData, listar, adicionar, remover};