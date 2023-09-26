const AbstractManager = require("./AbstractManager");

class ExpensesManager extends AbstractManager {
  constructor() {
    super({ table: "expenses" });
  }

  insert(expenses) {
    return this.database.query(
      `insert into ${this.table} (wording, amout) values (?, ?)`,
      [expenses.wording, expenses.amout]
    );
  }

  update(expenses) {
    return this.database.query(
      `update ${this.table} set wording = ?, amout = ? where id = ?`,
      [expenses.wording, expenses.amout, expenses.id]
    );
  }
}

module.exports = ExpensesManager;
