import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './actions&reducers/store';
import App from './App';
import './App.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
