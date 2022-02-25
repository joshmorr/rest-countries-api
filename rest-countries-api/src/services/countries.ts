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

export const getCountriesByCodes = (codes: string[]) => {
    let url = baseUrl + 'alpha?codes=';
    codes.forEach((code) => url += code.toLowerCase() + ',');
    url = url.substring(0, url.length - 1);
    return axios.get(url);
}