import prompt from "prompt-sync";
import Autor from "./autor";
import Capitulo from "./Capitulo";
import Livraria from "./Livraria";
import Livro from "./Livro";

let tec = prompt();
let opcao = -1;
let livraria = new Livraria();

while (opcao != 9) {
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

    switch (opcao) {
        case 1:
            cadastrarLivro();
            break;
        case 2:
            break;
        case 3:
            listarAcervo();
            break;
        case 4:
            resetarLivraria()
            break;
        case 5:
            modificarAcervo()
            break;
        case 6:
            listarCapitulos();
            break;
    }


}

function cadastrarLivro() {
    let capitulo = [];
    let autor = [];
    let numeroCap = tec("Informe a quantidade de capítulos: ");
    for(let i = 0; i < Number(numeroCap); i++){
        console.log("Capítulo " + (i + 1) + " de " + numeroCap + ":\n");
        let titulo = tec("Informe o título do capítulo: ");
        let texto = tec("Informe o texto do capítulo: ");
        capitulo.push(new Capitulo(titulo, texto));
    }
    let numeroAut = tec("Informe a quantidade de autores: ");

    for(let i = 0; i < Number(numeroAut); i++){
        console.log("Autor " + (i + 1) + " de " + numeroAut + ":\n");
        let nome = tec("Informe o nome do autor: ");
        let dtNascimento = tec("Informe a data de nascimento do autor: ");
        autor.push(new Autor(nome, new Date(dtNascimento)));
    }

    let tituloLivro = tec("Informe o título do livro: ");
    let isbn = tec("Informe o ISBN: ");
    livraria.cadastrarLivro(new Livro(tituloLivro,isbn) ,autor,capitulo);
    console.log("Livro inserido com sucesso!");
    
}

function listarAcervo() {
    let i = 0;
    for(let livro of livraria.livros){
        i++;
        console.log("Livro: " + i + " - " + livro.titulo + "\n");
    }
}

function listarCapitulos(){
    listarAcervo();
    let id = Number(tec("Informe o livro: "));
    let livro = livraria.livros[id - 1];
    /*for(let capitulo of livraria.livros){
        console.log("Capitulo: " + capitulo.capitulos[0].titulo);
    }*/
    for(let i = 0; i < livraria.livros[id - 1].capitulos.length; i++){
        console.log("Capitulo: " + (i + 1) + ": " + livraria.livros[id - 1].capitulos[i].titulo);
    }
}

function adicionarCapitulo(livro : Livro){
    let titulo = tec("Informe o título do capítulo: ");
    let texto = tec("Informe o texto do capítulo: ");
    livro.adicionarCapitulo(titulo, texto);
}

function adicionarAutor(livro : Livro){
    let nome = tec("Informe o nome do autor: ");
    let dtNascimento = tec("Informe a data de nascimento do autor: ");
    livro.adicionarAutor(new Autor(nome, new Date(dtNascimento)));
}

function modificarAcervo(){
    listarAcervo();
    let id = Number(tec("Informe o livro: "));
    let livro = livraria.livros[id - 1];
    console.log('+================================================================+');
    console.log('|                    Livraria Jalee                              |');
    console.log('|________________________________________________________________|');
    console.log('| 1. Inserir novo capítulo                                       |');
    console.log('| 2. Inserir novo autor                                          |');
    console.log('|________________________________________________________________|');
    let opc = Number(tec("Informe uma opção: "));
    switch (opc) {
        case 1:
            adicionarCapitulo(livro);
            break;
        case 2:
            adicionarAutor(livro);
            break;
        
    }
}

function resetarLivraria() {
    livraria = new Livraria()
}

