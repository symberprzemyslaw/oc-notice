import React from 'react';

const PersonalData = ({ handleNameChange }) => {
  return (
    <section>
      <h2>Dane osobowe</h2>

      <label htmlFor="name">Imię:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleNameChange}
        placeholder="Jan"
      />

      <label htmlFor="surname">Nazwisko:</label>
      <input
        type="text"
        id="surname"
        name="surname"
        onChange={handleNameChange}
        placeholder="Kowalski"
      />

      <label htmlFor="pesel">Pesel:</label>
      <input
        type="text"
        id="pesel"
        name="pesel"
        onChange={handleNameChange}
        placeholder="12345678901"
      />

      <label htmlFor="regon">Regon:</label>
      <input
        type="text"
        id="regon"
        name="regon"
        onChange={handleNameChange}
        placeholder="123456789"
      />
    </section>
  );
};

export default PersonalData;
