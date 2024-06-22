export abstract class Account {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (): void => {
        if(this.validateStatus()) {
            console.log('Você depositou');
        }
    }

    withdraw = (): void => {
        console.log('Você sacou');
    }

    requestLoan = (): void => {
        console.log('Você solicitou um empréstimo');
    }

    getBalance = (): void => {
        console.log(this.balance);
    }

    setName = (name: string): void => {
        this.name = name;
        console.log("Nome alterado com sucesso");
    }

    getName = (): string => {
        return this.name;
    }

    validateStatus = (): boolean => {
        if(this.status) {
            return this.status;
        }

        throw new Error();
    }
}