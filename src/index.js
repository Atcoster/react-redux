import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './store/store';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('root');

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	rootEl
);

serviceWorker.unregister();
