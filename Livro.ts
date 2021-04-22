import Autor from "./autor";
import Capitulo from "./Capitulo";

export default class Livro{

    private _titulo: string;
    private _isbn: string;
    private _capitulo : Capitulo[]
    private _autor : Autor[]

    constructor(titulo: string, isbn: string){
        this._titulo = titulo;
        this._isbn = isbn;
        this._autor = [];
        this._capitulo = [];
    }
    
    public get capitulos(): Capitulo[]{
        return this._capitulo;
    }

    public set capitulos(capitulo: Capitulo[]){
        this._capitulo = capitulo;
    }

    public get autores(): Autor[]{
        return this._autor;
    }

    public set autores(autor: Autor[]){
        this._autor = autor;
    }

    public get isnb(): string{
        return this._isbn;
    }

    public set isnb(isnb: string){
        this._isbn = isnb;
    }

    public get titulo(): string{
        return this._titulo;
    }

    public set titulo(titulo: string){
        this._titulo = titulo;
    }

    public adicionarCapitulo(titulo: string, texto: string): number{
        if(this._capitulo.length < 100){
            return this._capitulo.push(new Capitulo(titulo,texto));
        }else{
            return -1;
        }
    }

    public removeCapitulo(capitulo: Capitulo): number{
        let index = this._capitulo.indexOf(capitulo);
        if(index != -1){
            this._capitulo.splice(index,1);
        }
        return index;
    }

    public adicionarAutor(autor: Autor): number{
        if(this._autor.length < 6){
            return this._autor.push(autor);
            
        }else{
            return -1;
       }
        
        
    }

    public removeAutor(autor: Autor): number{
        let index = this._autor.indexOf(autor);
        if(index != -1){
            this._autor.splice(index,1);
        }
        return index;
    }


}