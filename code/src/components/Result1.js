import React from 'react';

const Result1 = ({
  isabelleTheme,
  continent,
  open,
  isabellefilms
}) => {
  const filteredIsabelleArray = isabelleTheme === 'Anything' ? isabellefilms.films : isabellefilms.films.filter((item) => item.themes.includes(isabelleTheme));

  const filteredContinentArray = continent === 'an undecided' ? filteredIsabelleArray : filteredIsabelleArray.filter((item) => item.continent_set === continent);

  const openArray = open === 'not open' ? filteredContinentArray : isabellefilms.films

  const i = Math.floor(Math.random() * openArray.length);

  return (
    <div className="container-result">
      <h2>Result</h2>
      <hr />
      {openArray.length !== 0 ? (
        <div className="result-box">
          <a
            href={openArray[i].url}
            target="_blank"
            rel="noreferrer">
            <img
              src={openArray[i].poster}
              alt="film poster with link"
              className="posterimg"
              aria-label="Film poster with link to IMDB" />
          </a>
          <div className="result-text">
            <h4>{openArray[i].name}</h4>
            <div className="result-details">
              <p>Directed by {openArray[i].director}</p>
              <p>{openArray[i].details}</p>
            </div>
            <p className="synopsis-paragraph">{openArray[i].synopsis}</p>
          </div>
        </div>
      ) : (
        <div className="result-nothing">
          <p>Sorry, there was no match.</p>
        </div>
      )}
    </div>
  );
}

export default Result1;