import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducer/app-reducer';

let store = createStore(reducer);
ReactDom.render(<App store={store}/>, document.getElementById('app'));
