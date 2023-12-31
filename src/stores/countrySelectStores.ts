import { writable, type Writable } from 'svelte/store';

export const visibleCountries: Writable<Array<CountryListElement>> = writable();

export const allCountries: Writable<Array<CountryListElement>> = writable();

export const countrySelectScroll: Writable<number> = writable(0);

export const countrySelectState: Writable<CountrySelectState> = writable('collapsed');

export const countrySelectSearch: Writable<string> = writable('');