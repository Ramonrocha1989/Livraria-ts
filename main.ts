import * as prompt from "prompt-sync";

let tec = prompt();
let opcao = -1;


while(opcao != 0){
    console.log('+================================================================+');
    console.log('|                    Livraria Jalee                              |');
    console.log('|________________________________________________________________|');
    console.log('| 1. Cadastrar novo livro                                        |');
    console.log('| 2. Remover livro do acervo                                     |');
    console.log('| 3. Listar acervo                                               |');
    console.log('| 4. Resetar livraria                                            |');
    console.log('| 5. Modificar livro no acervo                                   |');
    console.log('| 6. Listar capítulos do livro                                   |');
    console.log('| 9. Sair                                                        |');
    console.log('|________________________________________________________________|');

    opcao = parseInt(tec('Ecolha uma opção: '));

    /*switch(opcao){
        case 1: console.log(partida.darTiro());
            break;
        case 2: console.log(partida.tomarTiro());
            break;
    }*/
    

}