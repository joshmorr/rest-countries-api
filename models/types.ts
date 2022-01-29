interface Flags {
    png: string,
    svg: string
}

interface Currency {
    code: string,
    name: string,
    symbol: string
}

interface Language {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string,
}

export interface Country {
    currencies: Currency[],
    languages: Language[],
    name: string,
    nativeName: string,
    topLevelDomain: string[],
    capital: string,
    borders: string[],
    region: string,
    subregion: string,
}