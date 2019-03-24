import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';

// connect tp devtools and get code trace
const store = createStore(
    reducer,
    compose(
        // applyMiddleware(''),
        /* preloadedState, */
        // code for chrome dev tool exension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
    )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
