import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const contaCorrenteRicardo = new ContaCorrente(1001, new Cliente("Ricardo", 1234567890, 1212121212));

const contaCorrenteAlice = new ContaCorrente(1001, new Cliente("Alice", 92345678901, 2121212121));

contaCorrenteRicardo.depositar(100);
contaCorrenteAlice.depositar(200);
contaCorrenteRicardo.transeferir(50, contaCorrenteAlice);
console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
console.log(ContaCorrente.numeroDeContas);