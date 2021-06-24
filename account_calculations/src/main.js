import Accounts from './accounts.js';

const current = [
  { name: 'Chase', balance: 2000, type: 'checking', dateOpened: 111111, },
  { name: 'Wells', balance: 2000, type: 'savings', dateOpened: 111111, },
];

const prev = [
  { name: 'Chase', balance: -1000, type: 'checking', dateOpened: 111111, },
  { name: 'Truist', balance: 2000, type: 'savings', dateOpened: 111112, },
];

const accounts = new Accounts();
current.forEach(account => {
  accounts.add({ ...account, tag: 'current' });
});
prev.forEach(account => {
  accounts.add({ ...account, tag: 'prev' });
});

// Print all recurring account names and their balances
console.log('Recurring Accounts');
accounts.getRecurringAccounts()
  .forEach(account => { console.log(account.toString()); });

// Print all current account names and their balances
console.log('New Accounts');
accounts.getAccountsByBalanceTag('current')
  .forEach(account => { console.log(account.toString()); });

console.log('Expired Accounts');
// Print all prev account names and their balances
accounts.getAccountsByBalanceTag('prev')
  .forEach(account => { console.log(account.toString()); });
