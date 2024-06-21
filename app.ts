import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const peopleAcount: PeopleAccount = new PeopleAccount (1,'Rafael', 1);
console.log(peopleAcount.deposit);

const companyAcount: CompanyAccount = new CompanyAccount ('Diego', 1);
console.log(companyAcount.deposit);


