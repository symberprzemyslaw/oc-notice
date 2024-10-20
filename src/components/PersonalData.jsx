import React from "react";

const PersonalData = ({ handleNameChange, nameData }) => {
  return (
    <section>
      <h2>Dane osobowe</h2>
      <p>
      Jeśli Ubezpieczającym na polisie była firma (inna niż jednoosobowa działalność gospodarcza), uzupełnij pola: nazwa firmy, NIP lub REGON.
      </p>
      <p>
      Jeśli ubezpieczałeś pojazd jako jednoosobowa działalność gospodarcza, wypełnij pola: imię, nazwisko, NIP lub REGON, PESEL.
      </p>
      <p>
      Jeśli ubezpieczałeś pojazd jako osoba fizyczna, uzupełnij tylko pola:
      imię, nazwisko, PESEL.
      </p>
      <label htmlFor="name">Imię:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleNameChange}
        placeholder="Jan"
        value={nameData.name}
      />

      <label htmlFor="surname">Nazwisko:</label>
      <input
        type="text"
        id="surname"
        name="surname"
        onChange={handleNameChange}
        placeholder="Kowalski"
        value={nameData.surname}
      />

      <label htmlFor="pesel">Pesel:</label>
      <input
        type="text"
        id="pesel"
        name="pesel"
        onChange={handleNameChange}
        placeholder="12345678901"
        value={nameData.pesel}
      />
      <label htmlFor="companyName">Nazwa firmy:</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        onChange={handleNameChange}
        placeholder="Twoja firma"
        value={nameData.companyName}
      />

      <label htmlFor="nip">NIP:</label>
      <input
        type="text"
        id="nip"
        name="nip"
        onChange={handleNameChange}
        placeholder="123456789"
        value={nameData.nip}
      />
      <label htmlFor="regon">REGON :</label>
      <input
        type="text"
        id="regon"
        name="regon"
        onChange={handleNameChange}
        placeholder="123456789"
        value={nameData.regon}
      />
    </section>
  );
};

export default PersonalData;
