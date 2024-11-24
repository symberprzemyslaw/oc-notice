import { useState } from "preact/hooks";
import "./app.css";
import logo from "./assets/logo.js";
import PersonalData from "./components/PersonalData";
import ContactData from "./components/ContactData";
import CarData from "./components/CarData";
import Notice from "./components/Notice";
import meter1 from "/meter-1.svg";
import meter2 from "/meter-2.svg";
import meter3 from "/meter-3.svg";
import meter4 from "/meter-4.svg";

const meters = [meter1, meter2, meter3, meter4];

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
  const dotted = ".".repeat(100);
  const [nameData, setNameData] = useState({
    name: "",
    surname: "",
    companyName: "",
    pesel: "",
    nip: "",
    regon: "",
    phone: "",
    email: "",
    adressCity: "",
    adressZip: "",
    adressStreet: "",
    registrationNumber: "",
    company: "",
    town: "",
    brand: "",
    insuranceNumber: "",
    date: "",
  });
  const [noticeChoice, setNoticeChoice] = useState(3);
  const [noticeData, setNoticeData] = useState({
    noticeDate: "",
    companyFrom: "",
    companyTo: "",
    companyPeriodStart: "",
    companyPeriodEnd: "",
    bankAccount: "",

    datePermThree: "",
  });
  const [state, setState] = useState(0);

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setNameData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleNoticeDataChange = (event) => {
    const { name, value } = event.target;
    setNoticeData((prevState) => ({
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
              fontSize: 10,
            },
            {
              width: "*",
              image: `data:image/jpeg;base64,${logo}`,
              alignment: "center",
              fit: [80, 80],
              margin: [0, -30, 0, 20],
            },
            {
              width: "*",
              text: `${nameData.town} ${
                nameData.date
                  ? ", dnia " + nameData.date.split("-").reverse().join(".")
                  : ""
              } r.`,
              alignment: "right",
              margin: [0, 0, 0, 20],
              fontSize: 10,
            },
          ],
        },
        {
          columns: [
            {
              text: [
                { text: ".".repeat(40), fontSize: 12 },
                `\n nazwa zakładu ubezpieczeń`,
              ],
              width: "*",
              fontSize: 8,
              alignment: "left",
            },
            {
              text: [
                { text: ".".repeat(40), fontSize: 12 },
                `\n miejsce i data`,
              ],
              width: "*",
              fontSize: 8,
              alignment: "right",
              margin: nameData.town.length > 25 ? [0, 10, 0, 0] : [0, 0, 0, 0],
            },
          ],
          margin: [0, -40, 0, 20],
        },
        {
          text: "WYPOWIEDZENIE UMOWY UBEZPIECZENIA OC POJAZDÓW MECHANICZNYCH",
          fontSize: 14,
          bold: true,
          alignment: "center",
          margin: [0, 10, 0, 10],
        },
        // DANE KLIENTA
        {
          text: `${nameData.name + " " + nameData.surname} ${
            nameData.companyName
          } ${nameData.pesel} ${
            nameData.regon ? "NIP:" + nameData.regon : ""
          } ${nameData.nip ? "REGON:" + nameData.nip : ""} ${nameData.phone}`,
          noWrap: true,
          margin: [0, 0, 0, -2],
        },
        {
          text: [
            { text: dotted, fontSize: 12 },
            `\n imię i nazwisko / nazwa firmy / PESEL / NIP / REGON / numer telefonu`,
          ],
          fontSize: 8,
          margin: [0, 0, 0, 5],
        },
        {
          text: `${nameData.adressStreet} ${nameData.adressZip} ${nameData.adressCity}`,
          margin: [0, 0, 0, -2],
        },
        {
          text: [{ text: dotted, fontSize: 12 }, `\n adres`],
          fontSize: 8,
          margin: [0, 0, 0, 5],
        },
        {
          text: `${nameData.registrationNumber} ${nameData.brand}`,
          margin: [0, 0, 0, -2],
        },
        {
          text: [
            { text: dotted, fontSize: 12 },
            `\n numer rejestracyjny i marka pojazdu`,
          ],
          fontSize: 8,
          margin: [0, 0, 0, 5],
        },
        {
          text: `${nameData.insuranceNumber} ${nameData.email}`,
          margin: [0, 0, 0, -2],
        },
        {
          text: [
            { text: dotted, fontSize: 12 },
            `\n numer polisy / adres email`,
          ],
          fontSize: 8,
          margin: [0, 0, 0, 5],
        },
        {
          text: "ZAZNACZ I UZUPEŁNIJ TYLKO JEDNO Z OŚWIADCZEŃ",
          fontSize: 14,
          bold: true,
          alignment: "center",
          margin: [0, 20, 0, 20],
        },
        {
          text: [
            {
              text: noticeChoice === 0 ? " ☑ " : " ☐ ",
              font: "OpenSansEmoji",
              margin: [0, 0, 0, 10],
            },
            {
              text: "Oświadczam, że wypowiadam umowę ubezpieczenia z ostatnim dniem okresu, na jaki została zawarta.",
            },
            { text: ` (Żeby moja polisa nie przedłużyła się na kolejny okres ubezpieczenia - podstawa prawna: art. 28 ustawy * )`, italics: true },
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: [
            { text: noticeChoice === 1 ? " ☑ " : " ☐ ", font: "OpenSansEmoji" },
            `Oświadczam,że z dniem ${
              noticeData.noticeDate.split("-").reverse().join(".") + "r." ||
              ".".repeat(20)
            } wypowiadam umowę ubezpieczenia w firmie ${
              noticeData.companyFrom || ".".repeat(20)
            }, ponieważ zawarłem na okres od dnia ${
              noticeData.companyPeriodStart.split("-").reverse().join(".") + "r."  ||
              ".".repeat(20)
            } do dnia ${
              noticeData.companyPeriodEnd.split("-").reverse().join(".") + "r."  ||
              ".".repeat(20)
            } ubezpieczenie na mój pojazd w firmie ${
              noticeData.companyTo || ".".repeat(20)
            }. W przypadku, gdy przysługuje mi zwrot składki, proszę o przekzanie jej na następujacy rachunek bankowy: ${
              noticeData.bankAccount + "."|| ".".repeat(20)
            }`,
            { text: ` (Jeśli mam podwójne ubezpieczenie OC - podstawa prawna: art. 28a ustawy *. Dotyczy tylko umowy wznowionej \n z ustawy.`, italics: true },
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: [
            { text: noticeChoice === 2 ? " ☑ " : " ☐ ", font: "OpenSansEmoji" },
            {
              text: `Oświadczam, że wypowiadam umowę ubezpieczenia z dniem ${
                noticeData.datePermThree.split("-").reverse().join(".") + "r." ||
                ".".repeat(20)
              } `,
            },
            {
              text: `(Jeśli kupiłem samochód z ubezpieczeniem - podstawa prawna: art. 31 ustawy *. Umowę wypowiedzieć może jedynie nabywca pojazdu)`,
              italics: true,
            },
          ],
          margin: [0, 0, 0, 10],
        },
        [
          {
            text: ".".repeat(40),
            alignment: "right",
            margin: [0, 30, 0, 0],
          },
          ,
          {
            text: `podpis Klienta`,
            alignment: "right",
            margin: [35, 0, 0, 35],
            fontSize: 10,
          },
        ],
        {
          text: `* Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym \n i Polskim Biurze Ubezpieczycieli Komunikacyjnych.`,
          fontSize: 10,
          italics: true,
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
            [
              {
                text: ".".repeat(40),
              },
              {
                width: "*",
                text: "data",
                alignment: "left",
                margin: [0, 0, 0, 20],
                fontSize: 10,
              },
            ],
            [
              {
                text: ".".repeat(40),
                alignment: "right",
              },
              ,
              {
                width: "*",
                text: "podpis, pieczęć Agenta:",
                alignment: "right",
                margin: [0, 0, 0, 20],
                fontSize: 10,
              },
            ],
          ],
        },
        {
          text: `Informujemy, że Twoja umowa zostanie zakończona z dniem podanym w treści oświadczenia, a jeśli ta data nie zostanie wpisana, z datą przyjęcia dokumentu.`,
          fontSize: 10,
          margin: [0, 0, 0, 0],
        },
      ],
      background: [
        {
            text: 'Studio Polis',
            fontSize: 64,
            color: 'gray', 
            opacity: 0.1,  
            bold: true,
            alignment: 'center', 
            margin: [0, 550]  
        }
    ]

    };
    pdfMake
      .createPdf(docDefinition)
      .download(`Wypowiedzene OC-${nameData.name} ${nameData.surname}.pdf`);
    document.querySelector(".modal").style.display = "none";
  }

  return (
    <div class="wrapper">
      <div className="modal">
        <p>Proszę czekać...</p>
      </div>
      <h1>Wypowiedzenie OC</h1>
      <p>
        Jeśli chcesz wygenerować sam wzór wypowiedzenia OC, pozostaw pola puste
      </p>
      <form id="pdf-form" onSubmit={generatePDF}>
        <div className="meter">
          <img src={meters[state]} alt="" />
        </div>
        {state === 0 ? (
          <PersonalData
            handleNameChange={handleNameChange}
            nameData={nameData}
          />
        ) : null}
        {state === 1 ? (
          <ContactData
            handleNameChange={handleNameChange}
            nameData={nameData}
          />
        ) : null}
        {state === 2 ? (
          <CarData handleNameChange={handleNameChange} nameData={nameData} />
        ) : null}
        {state === 3 ? (
          <Notice
            handleNoticeDataChange={handleNoticeDataChange}
            noticeChoice={noticeChoice}
            setNoticeChoice={setNoticeChoice}
            noticeData={noticeData}
          />
        ) : null}
        {state === 3 ? (
          <button type="submit" onClick={() => console.log(noticeData)}>
            Generuj PDF
          </button>
        ) : null}
        <div className="buttons">
          {state ? (
            <button
              type="button"
              onClick={() => setState(state - 1)}
              disabled={state === 0}
              className="back"
            >
              Cofnij{" "}
            </button>
          ) : null}
          {state !== 3 ? (
            <button
              type="button"
              onClick={() => setState(state + 1)}
              disabled={state === 3}
              className="next"
            >
              Dalej{" "}
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default App;
