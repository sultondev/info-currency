import React, { useEffect, useState } from 'react';

// State imports
import { useRecoilState } from 'recoil';
import { allRatesData } from '../../recoil/atom';

// Components
import Header from '../Header/Header.component';
import ConvertorForm from '../ConvertorForm/ConvertorForm.component';
import CurrencyList from '../CurrencyList/CurrencyList.component';

// Styles
import './App.style.sass';

// Media files
import TopImg from '../../assets/img/top-arrow.svg';

// Configuring
let currentDate = new Date().toISOString().split('T')[0];

// For more information please read the file README.md
function App() {
	const [ baseCurrency, setBaseCurrency ] = useState('');
	const [ allRates ] = useRecoilState(allRatesData);
	const [ rates, setRates ] = useState('');

	useEffect(() => {
		checkCurrency('UAH', allRates, currentDate).then((data) => {
			setBaseCurrency(data);
			setRates(data.rates);
		});
	}, []);

	return (
		<div className="app">
			<Header baseCurrency={baseCurrency} rates={rates} />
			<main className="main">
				<ConvertorForm rates={rates} />
				<CurrencyList allRates={allRates} rates={rates} />

				<div className="main-scroll">
					<a href="#header" className="main-scroll__btn">
						<img src={TopImg} alt="Go" className="main-scroll__img" />
					</a>
				</div>
			</main>
		</div>
	);
}

function checkCurrency(base, rates, date = 'latest') {
	return fetch(
		`https://api.exchangerate.host/${date}?base=${base}${rates
			? '&symbols=' + rates.join(',')
			: ''}`
	).then((response) => response.json());
}

export default App;
