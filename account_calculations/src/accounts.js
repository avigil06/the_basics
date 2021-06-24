import Account from './account.js';

class Accounts {
  accounts = [];
  
  /**
   * Add an account by it's balance details
   * @param {String} name
   * @param {String} type
   * @param {Number} dateOpened
   * @param {Object} details - additional account details
   */
  add({
    name,
    type,
    dateOpened,
    ...details
   }) {
    const accountKey = `${name}-${type}-${dateOpened}`;
    const account = this.find(accountKey) || new Account(name);
    account.addBalanceDetails(details);
    this.accounts[accountKey] = account;
  }
  
  /**
   * Find an account by it's key
   * @param {String} accountKey - account keys are compositional keys of name-type-dateOpened
   * @return {Account}
   */
  find(accountKey) {
    return this.accounts[accountKey];
  }
  
  /**
   * Get all accounts flagged as recurring
   * @return {Account[]}
   */
  getRecurringAccounts() {
    const accountKeys = Object.keys(this.accounts);
    return accountKeys
      .filter(accountKey => this.accounts[accountKey].isRecurring())
      .map(accountKey => this.accounts[accountKey]);
  }
  
  /**
   * Get all accounts which only contain a given tag
   * @param {String} tag
   * @return {Account[]}
   */
  getAccountsByBalanceTag(tag) {
    const accountKeys = Object.keys(this.accounts);
    return accountKeys
      .filter(accountKey => this.accounts[accountKey].isTaggedAs(tag))
      .map(accountKey => this.accounts[accountKey]);
  }
}
