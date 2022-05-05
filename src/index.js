import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './components/App/App.component';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>
);
