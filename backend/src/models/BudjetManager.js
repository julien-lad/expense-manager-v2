const AbstractManager = require("./AbstractManager");

class BudjetManager extends AbstractManager {
  constructor() {
    super({ table: "budjet" });
  }

  insert(budjet) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      budjet.title,
    ]);
  }

  update(budjet) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [budjet.budjet, budjet.id]
    );
  }
}

module.exports = BudjetManager;
