import {Conta} from "./Conta.js";
export class ContaPoupanca extends Conta{
    constructor(agencia, cliente, saldoInicial){
        super(agencia, cliente, saldoInicial);
    }
    sacar(valor){
        let taxa = 0;
        this._sacar(valor, taxa);
    }
}