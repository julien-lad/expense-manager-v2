const AbstractManager = require("./AbstractManager");

class BudjetManager extends AbstractManager {
  constructor() {
    super({ table: "budjet" });
  }

  insert(budjet) {
    return this.database.query(
      `insert into ${this.table} (budjet) values (?)`,
      [budjet.budjet]
    );
  }

  update(budjet) {
    return this.database.query(
      `update ${this.table} set budjet = ? where id = ?`,
      [budjet.budjet, budjet.id]
    );
  }
}

module.exports = BudjetManager;
