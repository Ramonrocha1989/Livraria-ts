export default class Autor {
    private _nome: string;
    private _dateNasc: Date;

    constructor(nome: string, dateNasc: Date) {
        this._nome = nome;
        this._dateNasc = dateNasc;
    }

    public get nome():string{
        return this._nome
    }

    public get dateNasc():Date{
        return this._dateNasc;
    }


}