import React from 'react';

// Styles
import './CurrencyList.style.sass';

export const CurrencyList = (props) => {
	const { allRates, rates } = props;
	let i = 0;
	console.log(allRates);
	return (
		<div className="container">
			<ul className="currency-list">
				{allRates.map((item) => {
					return (
						<li className="currency-list__item" key={item + i++}>
							<p>{item}</p>

							<p>{rates[item]}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CurrencyList;
