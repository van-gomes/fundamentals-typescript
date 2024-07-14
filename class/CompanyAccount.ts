import { Account } from "./Account";

export class CompanyAccount extends Account {

    constructor(name: string, accountNumber: number, balance: number, status: boolean) {
        super(name, accountNumber, balance, status)
    }

    getLoan = (borrowed: number): void => {
        if (this.validateStatus()) {
            this.setBalance(borrowed);
            console.log(`Você pediu um empréstimo de: ${borrowed} e seu novo saldo é de: ` + this.getBalance());
        }
    }

    deposit = (): void => {
        console.log('A empresa depositou');
    }
}
