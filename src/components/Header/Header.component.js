/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// Style files
import './Header.style.sass';
// Media files
import Logo from '../../assets/img/logo.svg';

const Header = (props) => {
	const { baseCurrency, rates } = props;
	return (
		<header className="header" id="header">
			<div className="container">
				<div className="header-wrapper">
					<div className="header-logo">
						<img src={Logo} alt="Web Site Logo" className="header-logo__img" />
						<h1 className="header-logo__name">INFO Currency</h1>
					</div>
					<div className="header-currency">
						<h2 className="header-currency__base">{baseCurrency.base}</h2>
						<p className="header-currency__symbol">=</p>
						<div className="header-rates">
							<p className="header-rates__label">USD : {rates.USD}</p>
							<p className="header-rates__label">EUR : {rates.EUR}</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
