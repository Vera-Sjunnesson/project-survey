import React, { useState } from 'react';
import { Background } from './styles/Background';

const Location = ({
  isabelleTheme,
  continent,
  setContinent,
  country,
  setCountry,
  counter,
  setCounter
}) => {
  const [error, setError] = useState(false);

  const nextStepContinent = () => {
    if (continent === '') {
      setError(true)
    } else {
      setCounter(counter + 1);
    }
  }

  const nextStepCountry = () => {
    if (country === '') {
      setError(true)
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <Background counter={counter}>
      <div className="survey-wrapper location">
        {isabelleTheme ? (
          <form>
            <h3>
              <span>
                In what continent do you want your Isabelle Huppert film to be set?
              </span>
            </h3>
            {error && (<p>* Please select an option</p>)}
            <label htmlFor="continent">
              <select
                id="continent"
                aria-label="Drop down menu to select a continent"
                onChange={(event) => setContinent(event.target.value)}
                value={continent}>
                <option value="" disabled>Select continent</option>
                <option value="an European">Europe</option>
                <option value="an Asian">Asia</option>
                <option value="an African">Africa</option>
                <option value="an undecided">Any continent</option>
              </select>
            </label>
            <button
              type="button"
              onClick={nextStepContinent}
              aria-label="Next button">
            Next
            </button>
          </form>
        ) : (
          <form>
            <h3><span>Where do you want your film to be set?</span></h3>
            {error && (<p>* Please select an option</p>)}
            <label htmlFor="country">
              <select
                id="country"
                aria-label="Drop down menu to select a country"
                onChange={(event) => setCountry(event.target.value)}
                value={country}>
                <option value="" disabled>Select genre</option>
                <option value="in Iran">Iran</option>
                <option value="in Austria">Austria</option>
                <option value="in Belgium">Belgium</option>
                <option value="in the UK">the UK</option>
                <option value="in Taiwan">Taiwan</option>
                <option value="in Australia">Australia</option>
                <option value="anywhere in the world">Anywhere in the world</option>
              </select>
            </label>
            <button
              type="button"
              onClick={nextStepCountry}
              aria-label="Next button">
              Next
            </button>
          </form>
        )}
      </div>
    </Background>
  );
};

export default Location