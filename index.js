import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const conta01 = new ContaCorrente(1001, new Cliente("Ricardo", 1234567890, 1212121212), 0);

const conta02 = new ContaPoupanca(1001, new Cliente("Alice", 92345678901, 2121212121), 500);

conta01.depositar(100);
conta02.depositar(200);
conta01.transeferir(50, conta02);
console.log(conta01);
console.log(conta02);
console.log(ContaCorrente.numeroDeContas);