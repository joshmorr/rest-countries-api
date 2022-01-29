import axios from 'axios';

const baseUrl = 'https://restcountries.com/v2/';
const field = '?fields=name,nativeName,population,region,subregion,capital,flags,languages,currencies,topLevelDomain,borders'

export const getCountriesByName = (name: string) => {
    return axios.get(baseUrl + 'name/' + name + field);
}
