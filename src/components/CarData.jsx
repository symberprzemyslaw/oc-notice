import React from "react";

const CarData = ({ handleNameChange, nameData }) => {
    return (
        <section>
        <h2>Dane pojazdu</h2>
        <label htmlFor="company">Nazwa zakładu ubezpieczeń:</label>
        <input type="text" name="companyName" onChange={handleNameChange} value={nameData.companyName} />

        <label htmlFor="brand">Marka pojazdu:</label>
        <input type="text" name="brand" onChange={handleNameChange}         value={nameData.brand}/>


        <label htmlFor="registrationNumber">Numer rejestracyjny:</label>
      <input
        type="text"
        name="registrationNumber"
        onChange={handleNameChange}
        value={nameData.registrationNumber}
      />
        <label htmlFor="insuranceNumber">Numer polisy:</label>
        <input
          type="text"
          name="insuranceNumber"
          onChange={handleNameChange}
          value={nameData.insuranceNumber}
        />

        <label htmlFor="date">Data sporządzenia dokumentu:</label>
        <input type="date" name="date" onChange={handleNameChange}
        value={nameData.date}
        />

        <label htmlFor="town">Miejscowość sporządzenia dokumentu:</label>
        <input type="text" name="town" onChange={handleNameChange} value={nameData.town} />
      </section>
    )
};

export default CarData;