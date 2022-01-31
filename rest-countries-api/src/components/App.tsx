import React, { useEffect, useState } from 'react';
import './App.css';
import CountryCard from './CountryCard';
import { useGetCountriesByNameQuery } from '../services/countries';

export default function App() {
  const [name, setName] = useState('');
  const { data, error, isLoading, } = useGetCountriesByNameQuery(name);

  const handleNameSearchChange = (e: any) => {
    setName(e.target.value);
  }

  return (
    <div className="app">
      <div className="header">
        <h3 className="title">Where in the world?</h3>
      </div>
      <div className="main">
        <div className="toolbar">
          <form>
            <input
              className="search-bar"
              type="text"
              placeholder="Search for a country..."
              value={name}
              onChange={handleNameSearchChange} />
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
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            data.map ? data.map(country => {
              return (
                <div className="grid-item">
                  <CountryCard country={country} />
                </div>
              )
            }) : <>No countries found</>
          ) : null}
        </div>
      </div>
    </div>
  );
}
