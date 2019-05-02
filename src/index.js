import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
//importing bootstrap and fontawesome modules
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown, faPhone, faPlus, faMinus, faExclamation, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

require('dotenv').config();

library.add(
    faCartArrowDown,
    faPhone,
    faPlus,
    faMinus,
    faExclamation,
    faExclamationTriangle
);

    
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
