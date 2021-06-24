class Account {
  name = '';
  balances = [];
  
  constructor(name) {
    this.name = name;
  }
  
  /**
   * Balances are objects containing a value and a tag
   * @param {Number} balance
   * @param {String} tag
   */
  addBalanceDetails({ balance, tag }) {
    this.balances.push({ balance, tag });
  }
  
  /**
    * Determine if this account reccurrs or stops after one balance report
    * @return {Boolean}
    */
  isRecurring() {
    return this.balances.length > 1;
  }
  
  /**
    * Determine if any of the balance details belong to a given tag
    * Account will be calculated as exclusively containing a tag
    * @param {String} tag
    * @return {Boolean}
    */
  isTaggedAs(tag) {
    return this.balances
      .reduce((acc, { tag: t }) => {
        if (t === tag) {
          return acc += 1;
        }
        return acc -= 1;
      },0) > 0;
  }
  
  /**
   * Get the running balance of the account
   * @return {Number}
   */
  getCurrentBalance() {
    return this.balances.reduce((accumulator, { balance, tag }) => {
      return accumulator += balance;
    }, 0);
  }
  
  /**
   * Converts Account to "{Name}: {RunningBalance}"
   * @return {String}
   */
  toString() {
    return `${this.name}: ${this.getCurrentBalance()}`;
  }
}
