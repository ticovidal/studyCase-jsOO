export class Cliente{
    get cpf(){
        return this._cpf;
    }
    get rg(){
        return this._cpf;
    }

    constructor(nome, cpf, rg, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._senha;
    }
    
    autenticar(senha){
        return this._senha === senha;
    }
}