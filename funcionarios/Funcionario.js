export class Funcionario{
    get nome(){
        return this._nome;
    }
    get cpf(){
        return this._nome;
    }
    get salario(){
        return this._nome;
    }
    get bonificacao(){
        return this._nome;
    }
    constructor(nome, cpf, salario){
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 0;
        this._senha;
    }
    autenticar(senha){
        return this._senha === senha;
    }
    cadastrarSenha(senhaCadastrada){
        this._senha = senhaCadastrada;
    }
    
}