import React from 'react';

const ContactData = ({ handleNameChange }) => {
  return (
    <section>
      <h2>Dane kontaktowe</h2>

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleNameChange}
        placeholder="example@example.com"
      />

      <label htmlFor="telefon">Telefon:</label>
      <input
        type="text"
        id="telefon"
        name="telefon"
        onChange={handleNameChange}
        placeholder="+48 123 456 789"
      />

      <label htmlFor="adres">Adres:</label>
      <input
        type="text"
        id="adres"
        name="adres"
        onChange={handleNameChange}
        placeholder="Twoja ulica 123"
      />
    </section>
  );
};

export default ContactData;
