import { Currencies, Languages } from './index';

export interface Paises {
  name: Name;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Currencies[];
  languages: Languages[];
  flags: Flags;
  borders: string[];
  fifa: string;
}

export interface Name {
  common: string;
  nativeName: any;
  official: string;
}

export interface Flags {
  png: string;
  svg: string;
}
