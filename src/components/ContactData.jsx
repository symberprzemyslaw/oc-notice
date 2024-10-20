import React from 'react';

const ContactData = ({ handleNameChange, nameData }) => {
  return (
    <section>
      <h2>Dane kontaktowe</h2>
      <p>Jeśli Ubezpieczającym była firma, podaj adres firmowy.</p>

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleNameChange}
        placeholder="example@example.com"
        value={nameData.email}
        
      />

      <label htmlFor="phone">Telefon:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        onChange={handleNameChange}
        placeholder="+48 123 456 789"
        value={nameData.phone}
        
      />

      <label htmlFor="adress">Miejscowość:</label>
      <input
        type="text"
        id="adressCity"
        name="adressCity"
        onChange={handleNameChange}
        placeholder="Twoja miejscowość"
        value={nameData.adressCity}
      />
      <label htmlFor="adress">Kod pocztowy:</label>
      <input
        type="text"
        id="adressZip"
        name="adressZip"
        onChange={handleNameChange}
        placeholder="12-345"
        value={nameData.adressZip}
      />
      <label htmlFor="adress">Ulica i numer domu:</label>
      <input
        type="text"
        id="adressStreet"
        name="adressStreet"
        onChange={handleNameChange}
        placeholder="Twoja ulica 123/4"
        value={nameData.adressStreet}
      />
    </section>
  );
};

export default ContactData;
