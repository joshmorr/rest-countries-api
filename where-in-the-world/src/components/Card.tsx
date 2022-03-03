import React from 'react';
import { useNavigate } from "react-router-dom";
import './Card.css';
import Country from '../models/types';
import { formatPopulation } from '../utils';

interface CardProps {
  country: Country
}

export default function Card({country}: CardProps) {
  let navigate = useNavigate();

  const handleClick = function() {
    navigate(`/${country.alpha3Code.toLowerCase()}`);
  } 

  return (
    <div className="card" onClick={handleClick}>
      <div className="flag-box">
        <img className="flag" src={country.flags.svg} alt="flag"/>
      </div>
      <div className="info">
        <h4 className="country-name">{country.name}</h4>
        <div className="info-line"><span>Population: </span>{formatPopulation(country.population)}</div>
        <div className="info-line"><span>Region: </span>{country.region}</div>
        <div className="info-line"><span>Capital: </span>{country.capital}</div>
      </div>
    </div>
  )
}