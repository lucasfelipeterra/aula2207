const prompt = require('prompt-sync')({ sigint: true });
const { checkData, listar, adicionar } = require('./feriasM.js');


nome = prompt('qual o seu nome?');

while (true) {
    console.log(`selecione a opção desejada:\n1 - adicionar atividade\n2 - listar atividades\n3 - atualizar atividade\n4 - remover atividade `);
    opcao = Number(prompt());

    switch (opcao) {
        case 1:
            adicionar();
            checkData(data);
            break;
        case 2:
            listar();
            // process.exit();
            break;
        case 3:
            atualizar();
            break;
            case 4:
                removerHandler();
                break;
        default:
            console.log('opção invalida');
            break;
    }
}



function removerHandler() {
    const dias = prompt("dia a ser removido: ");
    removerHandler(dias);
}