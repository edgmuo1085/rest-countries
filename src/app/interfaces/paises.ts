import { Currencies, Languages } from "./index";

export interface Paises {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: Currencies[];
    languages: Languages[];
    flag: string;
    borders: string[];
}