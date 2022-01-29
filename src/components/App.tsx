import React from 'react';
import './App.css';
import CountryCard from './CountryCard';

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <h3 className="title">Where in the world?</h3>
      </div>
      <div className="main">
        <div className="toolbar">
          <form>
            <input className="search-bar" type="text" placeholder="Search for a country..." />
          </form>
          <select className="region-select" name="cars" id="cars">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <CountryCard />
          </div>
          <div className="grid-item">
            <CountryCard />
          </div>
          <div className="grid-item">
            <CountryCard />
          </div>
          <div className="grid-item">
            <CountryCard />
          </div>
          <div className="grid-item">
            <CountryCard />
          </div>
          <div className="grid-item">
            <CountryCard />
          </div>
          <div className="grid-item">
            <CountryCard />
          </div>
          <div className="grid-item">
            <CountryCard />
          </div>
        </div>
      </div>

    </div>
  );
}
