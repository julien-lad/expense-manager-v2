import "./Budjet.css";
import React, { useState, useEffect } from "react";

export default function Counter() {
  const [budjet, setBudjet] = useState({ budjet: "" });

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5050"
          }/budjet/1`
        );
        if (response.status === 200) {
          const data = await response.json();
          setBudjet(data);
        } else {
          console.error("Erreur lors de la récupération des données");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchBudget();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5050"
        }/budjet/1`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(budjet),
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudjet((prevBudjet) => ({
      ...prevBudjet,
      [name]: value,
    }));
  };

  return (
    <>
      <h2 className="budjet-h2">Budjet</h2>
      <div className="budjet-bloc">
        <form onSubmit={handleSubmit}>
          <label htmlFor="budjet">Our budjet :</label>
          <input
            id="budjet"
            type="text"
            name="budjet"
            value={budjet.budjet}
            onChange={handleChange}
          />
          <button type="submit">✔️</button>
        </form>
        <div className="rest">
          <label htmlFor="rest">Rest :</label>
          <input id="rest" type="text" name="rest" value={budjet.budjet} />
        </div>
      </div>
    </>
  );
}
