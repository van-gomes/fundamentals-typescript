import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const peopleAcount: PeopleAccount = new PeopleAccount (1,'Rafael', 1);
console.log(peopleAcount.deposit());
peopleAcount.setName('Isadora Chrispin');
console.log(peopleAcount.getName());

const companyAcount: CompanyAccount = new CompanyAccount ('Diego', 1);
companyAcount.setName('Diego Valente');
console.log(companyAcount.getName());
console.log(companyAcount.deposit());


