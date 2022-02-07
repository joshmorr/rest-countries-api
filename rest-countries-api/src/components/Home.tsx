import React, { useState, useEffect } from 'react';
import './Home.css';
import Card from './Card';
import Country from '../models/types';
import { getCountriesByName } from '../services/countries';

export default function Home() {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      getCountriesByName(name).then(response => {
        setCountries(response.data);
      });
    }
    fetchCountries();
  }, [name])

  const filterByRegion = (countries: Country[], region: string): Country[] => {
    return countries.filter(country => {
      return country.region === region;
    })
  }

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  }

  const handleRegionChange = (e: any) => {
    setRegion(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <div className="home">
      <div className="toolbar">
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search for a country..."
            value={name}
            onChange={handleNameChange} />
        </form>
        <select className="region-select" value={region} onChange={handleRegionChange}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="grid-container">
        {
          countries.map && countries.filter(country => {
            if (region === '') {
              return true;
            }
            return (country as Country).region === region;
          }).map(country => {
            return (
              <div className="grid-item">
                <Card country={country} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
