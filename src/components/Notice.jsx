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
            Oświadczam, że wypowiadam umowę ubezpieczenia z&nbsp;ostatnim dniem
            okresu, na jaki została zwarta.{" "}
            <br />
            <em>
              (Żeby moja polisa nie przedłużyła się na kolejny okres
              ubezpieczenia - podstawa prawna: art. 28 ustawy *).
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
            r. wypowiadam umowę ubezpieczenia w firmie,{" "}
            <span>
              <input
                type="text"
                id="companyFrom"
                name="companyFrom"
                value={noticeData.companyFrom}
                onInput={handleNoticeDataChange}
                placeholder="AXA, Warta, Unio, Link4"
              />
            </span>{" "}
            ,ponieważ zawarłem na okres od dnia{" "}
            <span>
              <input
                type="date"
                id="companyPeriodStart"
                name="companyPeriodStart"
                value={noticeData.companyPeriodStart}
                onInput={handleNoticeDataChange}
              />
            </span>{" "}
            r. do dnia{" "}
            <span>
              <input
                type="date"
                id="companyPeriodEnd"
                name="companyPeriodEnd"
                value={noticeData.companyPeriodEnd}
                onInput={handleNoticeDataChange}
              />
            </span>{" "}
            r. ubezpieczenie na mój pojazd w firmie
            <span>
              <input
                type="text"
                id="companyTo"
                name="companyTo"
                value={noticeData.companyTo}
                onInput={handleNoticeDataChange}
                placeholder="AXA, Warta, Unio, Link4"
              />
            </span>.
            W przypadku gdy przysługuje mi zwrot składki, proszę o
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
            .
            <br />
            <em>(Jeśli mam podwójne ubezpieczenie OC - podstawa prawna: art. 28a ustawy *. Dotyczy tylko umowy wznowionej z ustawy)</em>
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
            Oświadczam, że wypowiadam umowę ubezpieczenia z&nbsp;dniem{" "}
            <span>
              {" "}
              <input
                type="date"
                id="datePermThree"
                name="datePermThree"
                value={noticeData.datePermThree}
                onInput={handleNoticeDataChange}
                placeholder="AXA, Warta, Unio, Link4"
              ></input>{" "}
            </span>{" "}
            r.{" "}
            <br />
            <em>
              (Jeśli kupiłem samochód z ubezpieczeniem - podstawa prawna: art. 31
              ustawy *, umowę wypowiedzieć może jedynie nabywca pojazdu)
            </em>
          </label>
        </div>
      </fieldset>
      <p className="ustawa">
        * Ustawa z dnia 22 maja 2003 r. o ubezpieczeniach obowiązkowych,
        Ubezpieczeniowym Funduszu Gwarancyjnym i Polskim Biurze Ubezpieczycieli
        Komunikacyjnych{" "}
      </p>
    </>
  );
};

export default Notice;
