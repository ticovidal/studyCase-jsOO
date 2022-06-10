import {Cliente} from "./Cliente.js";
export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    
    _cliente;
    _saldo = 0;

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
    constructor(agencia, cliente){
        console.log(cliente instanceof Cliente);
        this.agencia = agencia;
        this.cliente = cliente;
        console.log(cliente);
        console.log(typeof cliente);
        ContaCorrente.numeroDeContas += 1;
    }
    
    sacar(valor){
        if (this.saldo <= valor){
            console.log("Operação Inválida. Valor menor do que o saldo");
            return;
        }
        this.saldo -= valor;
        console.log("Saque de R$"+valor+" realizado com sucesso. Seu saldo atual é de R$"+this.saldo);
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