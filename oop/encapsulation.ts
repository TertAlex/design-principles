class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log('Insufficient balance');
        } else {
            this.balance -= amount;
        }
    }
}