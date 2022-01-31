import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Country from '../models/types';

const baseUrl = 'https://restcountries.com/v2/';
const fields = '?fields=name,nativeName,population,region,subregion,capital,flags,languages,currencies,topLevelDomain,borders'

export const countriesApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCountriesByName: builder.query<Country[], string>({
            query: (name) => name ? `name/${name}/${fields}` : `all${fields}`,
        }),
    }),
})

export const { useGetCountriesByNameQuery } = countriesApi;