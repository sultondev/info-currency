import React from 'react';
import { useRecoilState } from 'recoil';
import {
	allRatesData,
	firstCurrencyNameData,
	firstInputData,
	secondCurrencyNameData,
	secondInputData
} from '../../recoil/atom';

// Styles
import './ConvertorForm.style.sass';

function rmFloutNums(arg, leng) {
	return Number.parseFloat(arg).toFixed(leng);
}

const ConvertorForm = (props) => {
	const { rates } = props;
	const [ allRates ] = useRecoilState(allRatesData);
	const [ firstInputValue, setFirstInputValue ] = useRecoilState(firstInputData);
	const [ secondInputValue, setSecondInputValue ] = useRecoilState(secondInputData);
	const [ firstCurrencyName, setFirstCurrencyName ] = useRecoilState(firstCurrencyNameData);
	const [ secondCurrencyName, setSecondCurrencyName ] = useRecoilState(secondCurrencyNameData);

	function checkCurrencyValue(firstArg, _inputID, inputValue = '', secondArg) {
		const currencyResult = parseInt(inputValue) / rates[firstArg] * rates[secondArg];
		if (_inputID === 1 && inputValue !== '') {
			setSecondInputValue(rmFloutNums(currencyResult, 2));
		} else if (_inputID === 2 && inputValue !== '') {
			setFirstInputValue(rmFloutNums(currencyResult, 2));
		} else {
			setFirstInputValue('');
			setSecondInputValue('');
		}
	}

	return (
		<section className="convertor">
			<div className="container">
				<form action="#" className="convertor-form">
					<div className="convertor-first">
						<label htmlFor="input-1">
							<input
								type="number"
								name="currency-input-1"
								id="input-1"
								value={firstInputValue}
								placeholder="Enter a number"
								className="convertor-first__input"
								onChange={(e) => {
									setFirstInputValue(e.target.value);
									checkCurrencyValue(
										firstCurrencyName,
										1,
										e.target.value,
										secondCurrencyName
									);
								}}
							/>
						</label>
						{/* Second input value */}
						<select
							name="currency-select-1"
							id="select-1"
							className="convertor-first__select"
							onChange={(e) => {
								setFirstCurrencyName(e.target.value);
								checkCurrencyValue(
									e.target.value,
									1,
									firstInputValue,
									secondCurrencyName
								);
								console.log(e.target.value);
							}}
						>
							<optgroup>
								{allRates.map((item) => {
									return (
										<option value={item} key={item}>
											{item}
										</option>
									);
								})}
							</optgroup>
						</select>
					</div>

					<div className="convertor-second">
						<label htmlFor="input-2">
							<input
								type="number"
								name="currency-input-2"
								id="input-2"
								value={secondInputValue}
								placeholder="Enter a number"
								className="convertor-second__input"
								onChange={(e) => {
									setSecondInputValue(e.target.value);
									checkCurrencyValue(
										secondCurrencyName,
										2,
										e.target.value,
										firstCurrencyName
									);
								}}
							/>
						</label>
						<select
							name="currency-select-2"
							id="select-2"
							className="convertor-second__select"
							onChange={(e) => {
								setSecondCurrencyName(e.target.value);
								checkCurrencyValue(
									firstCurrencyName,
									1,
									firstInputValue,
									e.target.value
								);
							}}
						>
							<optgroup>
								{allRates.map((item) => {
									return (
										<option value={item} key={item}>
											{item}
										</option>
									);
								})}
							</optgroup>
						</select>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ConvertorForm;
