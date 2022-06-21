import {Cliente} from "./Cliente.js";
export class Conta{
    static numeroDeContas = 0;
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    set saldo(novoValor){
        if(typeof novoValor === "number"){
            this._saldo = novoValor;
        }
    }
    get saldo(){
        return this._saldo;
    }
    get taxa(){
        return this._taxa;
    }
    constructor(agencia, cliente, saldo){
        if(this.constructor == Conta){
            throw new Error("proibido instanciar Conta diretamente");
        }
        console.log(cliente instanceof Cliente);
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldo;
        console.log(cliente);
        console.log(typeof cliente);
    }
    sacar(valor){
        let taxa = 0;
        this._sacar(valor, taxa);
    }
    _sacar(valor, taxa){
        let totalDoSaque = (taxa/100+1)*valor;
        if (this.saldo <= totalDoSaque){
            console.log("Operação Inválida. Valor menor do que o saldo");
            return;
        }
        this.saldo -= totalDoSaque;
        console.log("Saque de R$"+valor+"+ taxa de "+taxa+"%. Saque total de R$"+totalDoSaque+" realizado com sucesso. Seu saldo atual é de R$"+this.saldo);
        return this.saldo;

    }

    depositar(valor){        
        if(valor <= 0){
            console.log("Operação Inválida. Sem valor ou negativo");
            return;
        }
        this.saldo += valor;
        console.log("Depósito de R$"+valor+" realizado com sucesso. Seu saldo atual é de R$"+this.saldo);
        return this.saldo;
    }
    transeferir(valor, contaDestino){        
        if(valor > this.saldo){
            console.log("Operação Inválida. Sem valor ou negativo");
            return;
        }
        if(contaDestino == false){
            console.log("Operação Inválida. Conta de destino inexistente");
            return;
        }
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);   
    }
}