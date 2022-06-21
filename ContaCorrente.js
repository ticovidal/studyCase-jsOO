import {Conta} from "./Conta.js";
export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(agencia, cliente, saldo){
        super(agencia, cliente, saldo);
        ContaCorrente.numeroDeContas += 1;
    }
    sacar(valor){
        let taxa = 1;
        this._sacar(valor, taxa);
    }
}