import React from 'react';
import './CountryCard.css';
import Country from '../models/types';
import usa from './usa.svg'

interface CountryCardProps {
  country: Country
}

function formatPopulation(population: number): string {
  return new Intl.NumberFormat().format(population);
}

export default function CountryCard({country}: CountryCardProps) {
  return (
    <div className="card">
      <img className="flag" src={country.flags.svg} alt="usa"/>
      <div className="info">
        <h4 className="country-name">{country.name}</h4>
        <div className="info-line"><span>Population: </span>{formatPopulation(country.population)}</div>
        <div className="info-line"><span>Region: </span>{country.region}</div>
        <div className="info-line"><span>Capital: </span>{country.capital}</div>
      </div>
    </div>
  )
}