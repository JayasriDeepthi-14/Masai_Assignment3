// Question 1: Closure-Based Counter Implementation

// TASK 1: Implement the createCounter() function.
function createCounter() {
  let count = 0; 
  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    },
    display: function () {
      console.log("Current count:", count);
    }
  };
}

// TASK 2: Explain how closures are being used to encapsulate the counter variable.
/*
Closures allow the inner functions (increment, decrement, display)
to access the 'count' variable even after createCounter() has finished execution.

The variable 'count' remains private because:
- It is defined inside createCounter()
- It is not returned directly
- Only the returned functions can modify or read it

So closures protect 'count' from being changed directly by external code.
*/

/*
TASK 3: What happens if multiple counters are created?

Each call to createCounter() creates a NEW independent closure.
This means each counter has its own separate 'count' variable.

Example below shows this behavior.
*/

// Example Usage
const counter1 = createCounter();
counter1.increment(); 
counter1.increment();
const counter2 = createCounter();
counter2.increment(); 
counter2.decrement(); 

// counter1 and counter2 DO NOT share the same count value.

// Question 2: Simulating Private Variables with Closures

// TASK 1: Implement createBankAccount() using closures.
function createBankAccount() {
  let balance = 0;                   
  let transactionHistory = [];       
  return {
    deposit: function (amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        transactionHistory.push(`Failed withdrawal: ${amount}`);
      } else {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      }
    },
    checkBalance: function () {
      console.log(`Current Balance: ${balance}`);
      return balance;
    },
    getHistory: function () {
      console.log("Transaction History:", transactionHistory);
      return transactionHistory;
    }
  };
}

// TASK 2: How does closure keep 'balance' private?
/*
- The variable 'balance' is declared inside createBankAccount().
- It is NOT returned or exposed directly.
- Only the inner functions (deposit, withdraw, checkBalance, getHistory)
  have access to balance due to closure.
- Outside code cannot access balance:
      const account = createBankAccount();
      console.log(account.balance); // undefined
  This happens because closure protects 'balance' from external access.
*/

// TASK 3: Adding transactionHistory using closure
/*
- 'transactionHistory' is another private variable inside createBankAccount().
- It cannot be accessed directly from outside.
- But since inner functions form a closure, they can update and read it.

This allows the account to track all actions safely:

Example:
  account.deposit(500)
  account.withdraw(200)
  account.getHistory()  -> ["Deposited: 500", "Withdrawn: 200"]

Closures preserve the variables even after createBankAccount() finishes execution.
They remain alive as long as the returned object is being used.
*/

// Example Usage:
const account = createBankAccount();
account.deposit(500);      
account.withdraw(200);      
account.withdraw(400);     
account.checkBalance();     
account.getHistory();       
console.log(account.balance); 