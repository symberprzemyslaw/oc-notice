import { useState } from 'preact/hooks';
import './app.css';

import * as pdfFonts from "./vfs_fontes";
import pdfMake from "pdfmake/build/pdfmake.min";
pdfMake.vfs = pdfFonts.default; 


pdfMake.fonts = {

    OpenSansEmoji: {
      normal: 'OpenSansEmoji.ttf',
    },
    Roboto: {
      normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
      bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
      italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
      bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
    }
 } 


export function App() {
  const [nameData, setNameData] = useState([
    { name: "Imię", value: 'John' },
    { name: "Nazwisko", value: '' },
    { name: "Pesel", value: '' },
    { name: "Regon", value: '' },
    { name: "Regon", value: '' },
    { name: "Email", value: '' },
    { name: "Data", value: '' },
    { name: "Agencja", value: '' },


  ]);
  const handleNameChange = (event) => {
    const newNameData = nameData.map((item) => {
      if (item.name === event.target.name) {
        return { ...item, value: event.target.value };
      }
      return item;
    });
    setNameData(newNameData);
  };

function generatePDF(event) {
  document.querySelector('.modal').style.display = 'flex';
    event.preventDefault();
    const docDefinition = {

      

      content: [
        { columns: [
          { width: '*', text: 'Logo', alignment: 'left',  margin: [0, 0, 0, 20] },
          { width: '*', text: 'Logo', alignment: 'center', margin: [0, 0, 0, 20] },
          { width: '*', text: 'Logo', alignment: 'right', margin: [0, 0, 0, 20] },
        ]},
        {
              text: 'WYPOWIEDZENIE UMOWY UBEZPIECZENIA OC POJAZDÓW MECHANICZNYCH',
              fontSize: 12,
              bold: true,
              alignment: 'center',
              margin: [0, 0, 0, 20],
        },
        { text: 'Imię i nazwisko klienta / Pesel lub Regon/ telefon', margin: [0, 0, 0, 10] },
        { text: 'adres', margin: [0, 0, 0, 10] },
        { text: 'numer rejestracyjny i marka pojazdu', margin: [0, 0, 0, 10] },
        { text: 'numer polisy adres email', margin: [0, 0, 0, 10] },
        {
          text: 'ZAZNACZ I UZUPEŁNIJ TYLKO JEDNO Z OŚWIADCZEŃ',
          fontSize: 12,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        { text: [  {text: 1 ? ' ☑' : ' ☐' , font: 'OpenSansEmoji', margin: [0,0,0,10]} ,'Oświadczam że wypowiadam umowę ubezpieczenia z ostatnim dniem okresu na jaki została zwarta (żeby moja polisa nie przedłużyła się na kolejny okres ubezpieczenia - podstawa prawna: art 26 ustawy *)' ], margin: [0, 0, 0, 10] },
        { text: [  {text: 1 ? ' ☑' : ' ☐' , font: 'OpenSansEmoji'} , 'Oświadczam że wypowiadam umowę z dniem , umowę ubezpieczenia w firmie ........ ponieważ zawarłem na okres od dnia .... do dnia .... ubezpieczenie na mój pojazd w frmie ....'], margin: [0, 0, 0, 10] },
        { text: [  {text: 1 ? ' ☑' : ' ☐' , font: 'OpenSansEmoji'} , 'Oświadczam że wypowiadam umowę ubezpieczenia z ostatnim dniem okresu na jaki została zwarta (żeby moja polisa nie przedłużyła się na kolejny okres ubezpieczenia - podstawa prawna: art 26 ustawy *)' ], margin: [0, 0, 0, 10] },
        { text: `* Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym i Polski Biurze Ubezpieczycieli Komunikacyjnych`, margin: [0, 0, 0, 10] },
        { text: `_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _`, margin: [0, 0, 0, 10] },
        { text: `Potwierdzenie przyjęcia oświadczenia przez Agenta:`, margin: [0, 0, 0, 10] },
        { text: `Data przyjęcia dokumentu:`, margin: [0, 0, 0, 10] },
        { text: `Podpis, pieczęć Agenta:`, margin: [0, 0, 0, 10] },
        { text: `Informujemy, że twoja umowa zostanie zakończona z dniem podanym w treści oświadczenia a jeśli ta data nie zostanie wpisana, z datą przyjęcia dokumentu`, margin: [0, 0, 0, 20] },

    ]};
    pdfMake.createPdf(docDefinition).download(`Formularz APK-${nameData[1].value} ${nameData[0].value}.pdf`);
    document.querySelector('.modal').style.display = 'none';
  }

  return (
    <div class="wrapper">
      <div className="modal"><p>Proszę czekać...</p></div>
      <h1>Formularz APK</h1>
      <form id="pdf-form" onSubmit={generatePDF}>
        <div className="names">
          <label htmlFor="Imię">Imię:</label> 
          <input type='text' name='Imię'  onChange={handleNameChange} placeholder='Jan'/>
          <label htmlFor="Imię">Nazwisko:</label> 
          <input type='text' name='Nazwisko'  onChange={handleNameChange} placeholder='Kowalski'/>
          <label htmlFor="Pesel">Pesel:</label>
          <input type='text' name='Pesel'  onChange={handleNameChange} placeholder='12345678901'/>
          <label htmlFor="Regon">Regon:</label>
          <input type='text' name='Regon'  onChange={handleNameChange} placeholder='123456789'/>
          <label htmlFor="Email">Email:</label>
          <input type='text' name='Email'  onChange={handleNameChange}/>
          <label htmlFor="Data">Data:</label>
          <input type='date' name='Data'  onChange={handleNameChange}/>

        </div>
        <fieldset class="insurance-form">
          <legend>Zaznacz i uzupełnij tylko jedno z oświadczeń:</legend>
            <div>
              <input type='radio' name='notice-choice' />
              <label htmlFor='perm-one'>Oświadczam że wypowiadam umowę ubezpieczenia z ostatnim dniem okresu na jaki została zwarta (żeby moja polisa nie przedłużyła się na kolejny okres ubezpieczenia - podstawa prawna: art 26 ustawy *)</label>

            </div>
            <div>
              <input type='radio' name='notice-choice'/>
              <label htmlFor='perm-two'>Oświadczam że wypowiadam umowę z dniem <span> <input type='date'></input> </span>, umowę ubezpieczenia w firmie ........ poniważ zawarłem na okres od dnia .... do dnia .... ubezpieczenie na mój pojazd w fimire ....</label>
            </div>
            <div>
              <input type='radio' name='notice-choice' />
              <label htmlFor='perm-three'>Oświadczam że wypowiadam umowę ubezpieczenia z dniem  <span> <input type='date'></input> </span> (jeśli kupiłem samochód z ubezpieczeniem - Podstawa prawna: art. 31 ustawy *, umowę wypowiedzieć może jedynie nabywca pojazdu)</label>
            </div>
        </fieldset>
        <p>* Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych, Ubezpieczeniowym Funduszu Gwarancyjnym i Polski Biurtze Ubezpieczycieli komunikacyjnych </p>
        <button type="submit">
          Generuj PDF
        </button>
      </form>
    </div>
  );
}

export default App;
