import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Country from '../models/types';

const baseUrl = 'https://restcountries.com/v2/';

export const countriesApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCountriesByName: builder.query<Country[], string>({
            query: (name) => name ? `name/${name}` : `all`,
        }),
    }),
})

export const { useGetCountriesByNameQuery } = countriesApi;