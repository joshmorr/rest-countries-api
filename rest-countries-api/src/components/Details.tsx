import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Country from '../models/types';
import { getCountryByCode } from '../services/countries';

export default function Details() {
  const [country, setCountry] = useState(null);
  let params = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      params.code && getCountryByCode(params.code).then(response => {
        setCountry(response.data);
        console.log(response.data);
      });
    }
    fetchCountry();
  }, [params]);

  return (
    <div>
      {params.code}
    </div>
  )
}