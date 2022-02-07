import axios from 'axios';

const baseUrl = 'https://restcountries.com/v2/';

export const getCountriesByName = (name: string) => {
    if (name === '') {
        return axios.get(baseUrl + 'all');
    }
    return axios.get(baseUrl + 'name/' + name);
}

export const getCountryByCode = (code: string) => {
    return axios.get(baseUrl + 'alpha/' + code);
}