class Acount {
    name: string
    acountNumber: number

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
}

const acount: Acount = new Acount('Diego', 1);
console.log(acount);

const newAcount: Acount = new Acount('Rafael', 2);
newAcount.requestLoan();