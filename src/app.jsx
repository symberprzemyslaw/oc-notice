import { useState } from "preact/hooks";
import "./app.css";
import PersonalData from "./components/PersonalData";
import ContactData from "./components/ContactData";
import CarData from "./components/CarData";
import Notice from "./components/Notice";

import * as pdfFonts from "./vfs_fontes";
import pdfMake from "pdfmake/build/pdfmake.min";
pdfMake.vfs = pdfFonts.default;

pdfMake.fonts = {
  OpenSansEmoji: {
    normal: "OpenSansEmoji.ttf",
  },
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};

export function App() {
  const [nameData, setNameData] = useState({
    name: "Imię",
    surname: "Nazwisko",
    pesel: "Pesel",
    regon: "Regon",
    phone: "Telefon",
    email: "Email",
    adress: "Adres",
    registrationNumber: "Numer rejestracyjny",
    company: "Nazwa zakładu ubezpieczeń",
    city: "Miejscowość",
    brand: "Marka pojazdu",
    insuranceNumber: "Numer polisy",
    date: "Data",
  });
  const [state, setState] = useState(0);

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setNameData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function generatePDF(event) {
    document.querySelector(".modal").style.display = "flex";
    event.preventDefault();
    const docDefinition = {
      content: [
        {
          columns: [
            {
              width: "*",
              text: `${nameData.company}`,
              alignment: "left",
              margin: [0, 0, 0, 20],
            },
            {
              width: "*",
              text: "Logo",
              alignment: "center",
              margin: [0, 0, 0, 20],
            },
            {
              width: "*",
              text: `${nameData.town}, dnia ${nameData.date}`,
              alignment: "right",
              margin: [0, 0, 0, 20],
            },
          ],
        },
        {
          text: "WYPOWIEDZENIE UMOWY UBEZPIECZENIA OC POJAZDÓW MECHANICZNYCH",
          fontSize: 12,
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 20],
        },
        {
          text: `${nameData.name} ${nameData.surname} / ${
            nameData.pesel || nameData.regon
          } / ${nameData.phone}`,
          margin: [0, 0, 0, 10],
        },
        { text: `${nameData.adress}`, margin: [0, 0, 0, 10] },
        {
          text: `${nameData.registrationNumber} ${nameData.brand}`,
          margin: [0, 0, 0, 10],
        },
        {
          text: `${nameData.insuranceNumber} ${nameData.email}`,
          margin: [0, 0, 0, 10],
        },
        {
          text: "ZAZNACZ I UZUPEŁNIJ TYLKO JEDNO Z OŚWIADCZEŃ",
          fontSize: 12,
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 20],
        },
        {
          text: [
            {
              text: 0 ? " ☑ " : " ☐ ",
              font: "OpenSansEmoji",
              margin: [0, 0, 0, 10],
            },
            "Oświadczam że wypowiadam umowę ubezpieczenia z ostatnim dniem okresu na jaki została zwarta (żeby moja polisa nie przedłużyła się na kolejny okres ubezpieczenia - podstawa prawna: art 26 ustawy *)",
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: [
            { text: 1 ? " ☑ " : " ☐ ", font: "OpenSansEmoji" },
            "Oświadczam że wypowiadam umowę z dniem , umowę ubezpieczenia w firmie ........ ponieważ zawarłem na okres od dnia .... do dnia .... ubezpieczenie na mój pojazd w frmie ....",
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: [
            { text: 0 ? " ☑ " : " ☐ ", font: "OpenSansEmoji" },
            "Oświadczam że wypowiadam umowę ubezpieczenia z ostatnim dniem okresu na jaki została zwarta (żeby moja polisa nie przedłużyła się na kolejny okres ubezpieczenia - podstawa prawna: art 26 ustawy *)",
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: `Podpis klienta`,
          alignment: "right",
          italics: true,
          margin: [50, 0, 0, 50],
        },
        {
          text: `* Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym i Polski Biurze Ubezpieczycieli Komunikacyjnych`,
          fontSize: 10,
          margin: [0, 0, 0, 10],
        },
        {
          text: `_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _`,
          margin: [0, 0, 0, 10],
        },
        {
          text: `Potwierdzenie przyjęcia oświadczenia przez Agenta:`,
          margin: [0, 0, 0, 10],
        },
        {
          columns: [
            {
              width: "*",
              text: "Data:",
              alignment: "left",
              margin: [0, 0, 0, 40],
            },
            {
              width: "*",
              text: "Podpis, pieczęć Agenta:",
              alignment: "right",
              margin: [0, 0, 0, 40],
            },
          ],
        },
        {
          text: `Informujemy, że twoja umowa zostanie zakończona z dniem podanym w treści oświadczenia a jeśli ta data nie zostanie wpisana, z datą przyjęcia dokumentu`,
          fontSize: 10,
          margin: [0, 0, 0, 20],
        },
      ],
    };
    pdfMake
      .createPdf(docDefinition)
      .download(`Formularz APK-${nameData.name} ${nameData.surname}.pdf`);
    document.querySelector(".modal").style.display = "none";
  }

  return (
    <div class="wrapper">
      <div className="modal">
        <p>Proszę czekać...</p>
      </div>
      <h1>Wypowiedzenie OC</h1>
      <form id="pdf-form" onSubmit={generatePDF}>
        <div className="meter">
          <img src={`src/assets/meter/meter-${state + 1}.svg`} alt="" />
        </div>
         {state === 0 ? <PersonalData handleNameChange={handleNameChange} /> : null}
         {state === 1 ? <ContactData handleNameChange={handleNameChange} /> : null}
         {state === 2 ? <CarData handleNameChange={handleNameChange} /> : null}
         {state === 3 ? <Notice handleNameChange={handleNameChange} /> : null}

        <div className="buttons">
          { state ? <button
            type="button"
            onClick={() => setState(state - 1)}
            disabled={state === 0}
            className="back"
          >Cofnij </button> : null}
          { state !== 3 ? <button
            type="button"
            onClick={() => setState(state + 1)}
            disabled={state === 3}
            className="next"
          >Dalej </button> : null}
        </div>

        { state === 3 ? <button type="submit" >Generuj PDF</button> : null}
      </form>
    </div>
  );
}

export default App;
