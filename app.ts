abstract class Acount {
    name: string
    acountNumber: number
    balance: number = 0

    constructor(name: string, acountNumber: number) {
        this.name = name
        this.acountNumber = acountNumber
    }

    deposit = () => {
        console.log('Você depositou');
    }

    withdraw = () => {
        console.log('Você sacou');
    }

    requestLoan = () => {
        console.log('Você solicitou empréstimo')
    }

    getBalance = () => {
        console.log(this.balance);
    }
}

class PeopleAcount extends Acount {
    doc_id: number

    constructor(doc_id: number, name: string, acountNumber: number) {
        super(name, acountNumber)
        this.doc_id = doc_id
    }
}

/* 
const acount: Acount = new Acount('Diego', 1);
console.log(acount);

const newAcount: Acount = new Acount('Rafael', 2);
newAcount.requestLoan();

const acountAdmin: Admin = new Admin('Rafael', 2);
console.log(acountAdmin);
*/

