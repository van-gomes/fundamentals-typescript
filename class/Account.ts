export abstract class Account {
    private name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number, balance: number, status: boolean) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.status = status;
    }

    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            this.balance += amount;
            console.log(`Você depositou ${amount}. Novo saldo: ${this.balance}`);
        } else {
            console.log('Conta inativa. Depósito não permitido.');
        }
    };

    withdraw = (amount: number): void => {
        if (this.validateStatus() && this.balance > amount) {
            this.balance -= amount;
            console.log(`Você sacou ${amount}. Novo saldo: ${this.balance}`);
        } else if (!this.validateStatus()) {
            console.log('Conta inativa. Saque não permitido.');
        } else {
            console.log('Saldo insuficiente.');
        }
    };
    
    requestLoan = (): void => {
        console.log('Você solicitou um empréstimo');
    };

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error('Conta inativa!');
    };

    getBalance = (): number => {
        console.log(this.balance);
        return this.balance;
    };

    setBalance = (amount: number): void => {
        this.balance += amount;
        console.log(`Saldo atualizado com sucesso: ${this.balance}`)
    };

    getName = (): string => {
        return this.name;
    };

    setName = (name: string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso');
    };

    getStatus = (): boolean => {
        return this.status;
    };

    setStatus = (status: boolean): void => {
        this.status = status;
        console.log(`O status da sua conta é: ${this.status}`);
    };    
}
