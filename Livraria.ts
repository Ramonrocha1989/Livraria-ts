export default class Livraria{

    private _titulo: string;
    private _texto: string;

    constructor(titulo: string, texto: string){
        this._titulo = titulo;
        this._texto = texto;
        
    }
    public get titulo(): string{
        return this._titulo;
    }

    public get texto(): string{
        return this._texto;
    }


}