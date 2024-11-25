import React from "react";

const CarData = ({ handleNameChange, nameData }) => {
    return (
        <section>
        <h2>Dane pojazdu</h2>
        <label htmlFor="company">Nazwa zakładu ubezpieczeń:</label>
        <input placeholder="AXA, Warta, Unio, Link4" type="text" name="company" onChange={handleNameChange} value={nameData.company} />
        
        <label htmlFor="brand">Marka pojazdu:</label>
        <input placeholder="VW, AUDI, BMW, Seat" type="text" name="brand" onChange={handleNameChange}         value={nameData.brand}/>


        <label htmlFor="registrationNumber">Numer rejestracyjny:</label>
      <input
        type="text"
        name="registrationNumber"
        placeholder="WY 12345"
        onChange={handleNameChange}
        value={nameData.registrationNumber}
      />
        <label htmlFor="insuranceNumber">Numer polisy:</label>
        <input
          type="text"
          name="insuranceNumber"
          placeholder="AXA 123456789"
          onChange={handleNameChange}
          value={nameData.insuranceNumber}
        />

        <label htmlFor="date">Data sporządzenia dokumentu:</label>
        <input type="date" name="date" onChange={handleNameChange}
        value={nameData.date}
        placeholder="dd-mm-rrrr"
        />

        <label htmlFor="town">Miejscowość sporządzenia dokumentu:</label>
        <input type="text" placeholder="Kraków, Warszawa, Gdańsk" name="town" onChange={handleNameChange} value={nameData.town} />
      </section>
    )
};

export default CarData;