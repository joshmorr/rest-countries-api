import React from 'react';
import './CountryCard.css';
import usa from './usa.svg'

export default function CountryCard() {
  return (
    <div className="card">
      <img className="flag" src={usa} alt="usa"/>
      <div className="info">
        <h4 className="country-name">United States of America</h4>
        <div className="info-line"><span>Population: </span>323,947,000</div>
        <div className="info-line"><span>Region: </span>Americas</div>
        <div className="info-line"><span>Capital: </span>Washington, D.C.</div>
      </div>
    </div>
  )
}