import { Account } from "./Account";

export class NexusAccount extends Account {

    constructor(name: string, accountNumber: number, balance: number, status: boolean) {
        super(name, accountNumber, balance, status)
    }

    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            amount += 10;
            this.setBalance(amount);
            console.log(`Você depositou ${amount}. Novo saldo: ` +  this.getBalance());
        } else {
            console.log('Conta inativa. Depósito não permitido.');
        }
    };
}