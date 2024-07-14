import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { NexusAccount } from "./class/NexusAccount";

const peopleAcount: PeopleAccount = new PeopleAccount (1,'Rafael', 1, 150, true);
peopleAcount.setName('Isadora Chrispin');
peopleAcount.setBalance(100);
console.log(peopleAcount.deposit());
console.log(peopleAcount.getName());
console.log(peopleAcount.getBalance()); // Deve exibir 100

console.log('__________________________');

peopleAcount.setName('Magali Chrispin');
console.log(peopleAcount.withdraw(75));
console.log(peopleAcount.getName());
console.log(peopleAcount.getBalance()); // Deve exibir 25

// Tentativa de saque com saldo insuficiente
peopleAcount.withdraw(100); // Deve exibir mensagem de saldo insuficiente

// Tentativa de saque em conta inativa
//peopleAcount.setStatus(false);
//peopleAcount.withdraw(10); // Deve exibir mensagem de conta inativa

// Reativar conta e fazer depósito
peopleAcount.setStatus(true);
peopleAcount.setBalance(500);
console.log(peopleAcount.deposit());
console.log(peopleAcount.getBalance()); // Deve exibir 525

const companyAcount: CompanyAccount = new CompanyAccount ('Diego', 1, 100, true);
companyAcount.setName('Diego Valente');
console.log(companyAcount.getName());
console.log(companyAcount.deposit());

console.log('__________________________');

companyAcount.setName('Isabeli Fisher');
console.log(companyAcount.getLoan(900));
console.log(companyAcount.getName());
console.log(companyAcount.getBalance()); // Deve exibir 1.000

console.log('__________________________');

const nexusAcount: NexusAccount = new NexusAccount ('Conrad Fisher', 1, 20, true);
console.log(nexusAcount.getName());
console.log(nexusAcount.deposit(500));
console.log(nexusAcount.getBalance()); // Deve exibir 530

