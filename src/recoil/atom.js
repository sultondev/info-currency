import { atom } from 'recoil';
import { RATES_CONSTANT } from '../constants/allrates.constant';

export const allRatesData = atom({
	key: 'allRatesData',
	default: RATES_CONSTANT
});

export const firstInputData = atom({
	key: 'firstInputData',
	default: ''
});

export const secondInputData = atom({
	key: 'secondInputData',
	default: ''
});

export const firstCurrencyNameData = atom({
	key: 'firstCurrencyNameData',
	default: 'AED'
});

export const secondCurrencyNameData = atom({
	key: 'secondCurrencyNameData',
	default: 'AED'
});
