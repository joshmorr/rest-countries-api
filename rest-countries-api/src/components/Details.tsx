import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Country, { Currency, Language } from '../models/types';
import { getCountryByCode, getCountriesByCodes } from '../services/countries';
import { formatPopulation } from '../utils';
import './Details.css';

export default function Details() {
  const [country, setCountry] = useState<Country>();
  const [borderCountries, setBorderCountries] = useState<Country[]>();
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      params.code && getCountryByCode(params.code).then(response => {
        setCountry(response.data);
        getCountriesByCodes(response.data.borders).then(response => {
          setBorderCountries(response.data);
          console.log(response.data);
        })
      });
    }
    fetchCountry();
  }, [params]);

  const formatList = function(list: Currency[] | Language[]) {
    let str = '';
    list.forEach(el => {
      str += el.name + ', ';
    }) 
    str = str.substring(0, str.length - 2);
    return str;
  }

  const handleBackClick = function() {
    navigate('/');
  }

  return (
    <div> {country && 
      <div className="details">
        <button className="back-button" onClick={handleBackClick}>Back</button>
          <div className="grid-container">
            <img className="flag" src={country.flags.svg} alt="flag"/>
            <div className="info">
              <div className="country-name">{country.name}</div>
              <div className="facts-box">
                <div>
                  <div className="fact"><span className="fact-title">Native Name: </span>{country.nativeName}</div>
                  <div className="fact"><span>Population: </span>{formatPopulation(country.population)}</div>
                  <div className="fact"><span>Region: </span>{country.region}</div>
                  <div className="fact"><span>Sub Region: </span>{country.subregion}</div>
                  <div className="fact"><span>Capital: </span>{country.capital}</div>
                </div>
                <div className="right-facts">
                  <div className="fact"><span className="fact-title">Top Level Domain: </span>{country.topLevelDomain}</div>
                  <div className="fact"><span className="fact-title">Currencies: </span>
                    {country.currencies && formatList(country.currencies)}
                  </div>
                  <div className="fact"><span className="fact-title">Languages: </span>
                    {country.languages && formatList(country.languages)}
                  </div>
                </div>
              </div>
              <div className="border-countries fact"><span className="fact-title">Border Countries:</span>
                {borderCountries && borderCountries.map(country => {
                  return(
                    <button>{country.name}</button>
                  )
                })}
              </div>
            </div>
          </div>
      </div>
       }
    </div>
  )
} 