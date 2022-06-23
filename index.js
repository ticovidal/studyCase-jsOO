import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./conta/ContaCorrente.js";
import {ContaPoupanca} from "./conta/ContaPoupanca.js";
import {Gerente} from "./funcionarios/Gerente.js";
import {Diretor} from "./funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao/SistemaAutenticacao.js";

const conta01 = new ContaCorrente(1001, new Cliente("Ricardo", 1234567890, 1212121212), 0);

const conta02 = new ContaPoupanca(1001, new Cliente("Alice", 92345678901, 2121212121), 500);


conta01.depositar(100);
conta02.depositar(200);
conta01.transeferir(50, conta02);
console.log("Conta 1:"+conta01);
console.log("Conta 2:"+conta02);
console.log("Número de contas:"+ContaCorrente.numeroDeContas);
console.log("");

const gerente = new Gerente("Ricardo", 1234567890, 10000);
const diretor = new Diretor("Alice", 1023456789, 50000);

const estaLogado = SistemaAutenticacao.login(gerente, 12345);
console.log("Login:"+estaLogado);
gerente.cadastrarSenha(12345);
const estaLogado2 = SistemaAutenticacao.login(gerente, 12345);
console.log("Login:"+estaLogado2);