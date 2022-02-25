interface Flags {
    png: string,
    svg: string
}

export interface Currency {
    code: string,
    name: string,
    symbol: string
}

export interface Language {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string,
}

export default interface Country {
    currencies: Currency[],
    languages: Language[],
    name: string,
    nativeName: string,
    topLevelDomain: string[],
    capital: string,
    borders: string[],
    region: string,
    subregion: string,
    flags: Flags,
    population: number,
    alpha3Code: string
}