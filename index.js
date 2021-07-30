class Account {

  constructor() {
    // this.username = username;
    this.transactions = [];
  }
  get balance() {
    // Calculate the balance using the transaction objects.
    let balance = 0;
    for (let t of this.transactions) {
    	balance += t.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

const t3 = new Withdrawal(70.00, myAccount);
t3.commit();
console.log('Ending Balance:', myAccount.balance);

// class Account {

//   constructor() {
//     // this.username = username;
//     this.transactions = [];
//   }
//   get balance() {
//     // Calculate the balance using the transaction objects.
//     let balance = 0;
//     for (let t of this.transactions) {
//     	balance += t.value;
//     }
//     return balance;
//   }

//   addTransaction(transaction) {
//     this.transactions.push(transaction);
//   }

// }

// class Transaction {

//   constructor(amount, account) {
//     this.amount  = amount;
//     this.account = account;
//   }

//   commit() {
//     // Keep track of the time of the transaction
//     this.time = new Date();
//     // Add the transaction to the account
//     this.account.addTransaction(this);
//   }

// }

// class Deposit extends Transaction {

//   get value() {
//     return this.amount
//   }

// }

// class Withdrawal extends Transaction {

//   get value() {
//     return -this.amount;
//   }

// }

// // DRIVER CODE BELOW

// const myAccount = new Account('billybob');

// console.log('Starting Balance:', myAccount.balance);

// const t1 = new Deposit(120.00, myAccount);
// t1.commit();

// const t2 = new Withdrawal(50.00, myAccount);
// t2.commit();

// const t3 = new Withdrawal(70.00, myAccount);
// t3.commit();
// console.log('Ending Balance:', myAccount.balance);
