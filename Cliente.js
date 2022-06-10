export class Cliente{
    nome;
    
    _cpf;
    _rg;

    get cpf(){
        return this._cpf;
    }
    get rg(){
        return this._cpf;
    }

    constructor(nome, cpf, rg){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }
}