const Notice = ({
  noticeChoice,
  setNoticeChoice,
  handleNoticeDataChange,
  noticeData,
}) => {
  return (
    <>
      <fieldset class="insurance-form">
        <legend>Zaznacz i uzupełnij tylko jedno z oświadczeń</legend>
        <div>
          <input
            type="radio"
            name="notice-choice"
            checked={noticeChoice === 0}
            value={0}
            onInput={(e) => setNoticeChoice(Number(e.target.value))}
          />
          <label htmlFor="perm-one">
            Oświadczam, że wypowiadam umowę ubezpieczenia z ostatnim dniem
            okresu, na jaki została zwarta{" "}
            <em>
              (żeby moja polisa nie przedłużyła się na kolejny okres
              ubezpieczenia - podstawa prawna: art 26 ustawy *).
            </em>
          </label>
        </div>
        <hr />
        <div>
          <input
            type="radio"
            name="notice-choice"
            value={1}
            checked={noticeChoice === 1}
            onInput={(e) => setNoticeChoice(Number(e.target.value))}
          />
          <label htmlFor="perm-two">
            Oświadczam, że z dniem
            <span>
              <input
                type="date"
                id="noticeDate"
                name="noticeDate"
                value={noticeData.noticeDate}
                onInput={handleNoticeDataChange}
              ></input>{" "}
            </span>
            wypowiadam umowę ubezpieczenia w firmie,{" "}
            <span>
              <input
                type="text"
                id="companyFrom"
                name="companyFrom"
                value={noticeData.companyFrom}
                onInput={handleNoticeDataChange}
                placeholder="AXA"
              />
            </span>{" "}
            ponieważ zawarłem na okres od dnia{" "}
            <span>
              <input
                type="date"
                id="companyPeriodStart"
                name="companyPeriodStart"
                value={noticeData.companyPeriodStart}
                onInput={handleNoticeDataChange}
              />
            </span>{" "}
            do dnia{" "}
            <span>
              <input
                type="date"
                id="companyPeriodEnd"
                name="companyPeriodEnd"
                value={noticeData.companyPeriodEnd}
                onInput={handleNoticeDataChange}
              />
            </span>{" "}
            ubezpieczenie na mój pojazd w firmie
            <span>
              <input
                type="text"
                id="companyTo"
                name="companyTo"
                value={noticeData.companyTo}
                onInput={handleNoticeDataChange}
                placeholder="AXA"
              />
            </span>
            W przypadku kiedy, gdy przysluguje mi zwrot składki, proszę o
            przekazanie jej na następujący nr rachunku bankowego:
            <span>
              <input
                type="text"
                id="bankAccount"
                name="bankAccount"
                value={noticeData.bankAccount}
                onInput={handleNoticeDataChange}
                placeholder="00 0000 0000 0000 0000 0000 0000"
              />
            </span>
          </label>
        </div>
        <hr />
        <div>
          <input
            type="radio"
            name="notice-choice"
            value={2}
            checked={noticeChoice === 2}
            onInput={(e) => setNoticeChoice(Number(e.target.value))}
          />
          <label htmlFor="perm-three">
            Oświadczam, że wypowiadam umowę ubezpieczenia z dniem{" "}
            <span>
              {" "}
              <input
                type="date"
                id="datePermThree"
                name="datePermThree"
                value={noticeData.datePermThree}
                onInput={handleNoticeDataChange}
                placeholder="AXA"
              ></input>{" "}
            </span>{" "}
            <em>
              (jeśli kupiłem samochód z ubezpieczeniem - Podstawa prawna: art. 31
              ustawy *, umowę wypowiedzieć może jedynie nabywca pojazdu)
            </em>
          </label>
        </div>
      </fieldset>
      <p className="ustawa">
        * Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych,
        Ubezpieczeniowym Funduszu Gwarancyjnym i Polski Biurze Ubezpieczycieli
        komunikacyjnych{" "}
      </p>
    </>
  );
};

export default Notice;
