import React from "react";

const CarData = ({ handleNameChange }) => {
    return (
        <section>
        <h2>Dane pojazdu</h2>
        <label htmlFor="company">Nazwa zakładu ubezpieczeń:</label>
        <input type="text" name="company" onChange={handleNameChange} />

        <label htmlFor="brand">Marka pojazdu:</label>
        <input type="text" name="brand" onChange={handleNameChange} />


        <label htmlFor="registrationNumber">Numer rejestracyjny:</label>
      <input
        type="text"
        name="registrationNumber"
        onChange={handleNameChange}
      />
        <label htmlFor="insuranceNumber">Numer polisy:</label>
        <input
          type="text"
          name="insuranceNumber"
          onChange={handleNameChange}
        />

        <label htmlFor="date">Data sporządzenia dokumentu:</label>
        <input type="date" name="date" onChange={handleNameChange} />

        <label htmlFor="town">Miejscowość sporządzenia dokumentu:</label>
        <input type="text" name="town" onChange={handleNameChange} />
      </section>
    )
};

export default CarData;