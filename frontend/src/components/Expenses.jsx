import "./Expenses.css";
import React, { useState, useEffect } from "react";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5050"
          }/expenses`
        );
        if (response.status === 200) {
          const data = await response.json();
          console.warn(data);
          setExpenses(data);
        } else {
          console.error("Erreur lors de la récupération des données");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchExpenses();
  }, []);

  const handleEdit = (index) => {
    // Vous pouvez utiliser l'index de l'élément au lieu de l'objet editedExpense
    const updatedExpenses = [...expenses]; // Créez une copie du tableau
    // Mettez à jour les valeurs si nécessaire
    // Par exemple, vous pouvez réinitialiser le champ wording pour cet élément
    updatedExpenses[index] = { ...updatedExpenses[index], wording: "" };
    setExpenses(updatedExpenses);
  };

  const handleSave = async (index) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5050"
        }/expenses/${expenses[index].id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(expenses[index]),
        }
      );
      if (response.status === 204) {
        console.warn("Données mises à jour avec succès !");
      } else {
        console.error("Erreur lors de la mise à jour des données");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données:", error);
    }
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = { ...updatedExpenses[index], [name]: value };
    setExpenses(updatedExpenses);
  };

  return (
    <>
      <h2 className="expenses-h2">Your expenses</h2>
      <div className="expenses-bloc">
        {expenses.map((expense, index) => (
          <div key={expense.id}>
            <form onSubmit={() => handleSave(index)}>
              <label htmlFor="wording">Wording:</label>
              <input
                className="amount-input"
                id="wording"
                type="text"
                name="wording"
                value={expense.wording}
                onChange={(e) => handleChange(e, index)}
              />
              <label htmlFor="amount">Amount:</label>
              <input
                className="amount-input"
                id="amount"
                type="text"
                name="amout"
                value={expense.amout}
                onChange={(e) => handleChange(e, index)}
              />
              <button type="button" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button type="submit">Save</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
