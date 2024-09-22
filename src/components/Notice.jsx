const Notice = () => {
    return (
        <>
        <fieldset class="insurance-form">
          <legend>Zaznacz i uzupełnij tylko jedno z oświadczeń</legend>
          <div>
            <input type="radio" name="notice-choice" />
            <label htmlFor="perm-one">
              Oświadczam że wypowiadam umowę ubezpieczenia z ostatnim dniem
              okresu na jaki została zwarta (żeby moja polisa nie przedłużyła
              się na kolejny okres ubezpieczenia - podstawa prawna: art 26
              ustawy *)
            </label>
          </div>
          <hr />
          <div>
            <input type="radio" name="notice-choice" />
            <label htmlFor="perm-two">
              Oświadczam że wypowiadam umowę z dniem{" "}
              <span>
                {" "}
                <input type="date"></input>{" "}
              </span>
              , umowę ubezpieczenia w firmie ........ ponieważ zawarłem na okres
              od dnia .... do dnia .... ubezpieczenie na mój pojazd w fimire
              ....
            </label>
          </div>
          <hr />
          <div>
            <input type="radio" name="notice-choice" />
            <label htmlFor="perm-three">
              Oświadczam że wypowiadam umowę ubezpieczenia z dniem{" "}
              <span>
                {" "}
                <input type="date"></input>{" "}
              </span>{" "}
              (jeśli kupiłem samochód z ubezpieczeniem - Podstawa prawna: art.
              31 ustawy *, umowę wypowiedzieć może jedynie nabywca pojazdu)
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
}

export default Notice;