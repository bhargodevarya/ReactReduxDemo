import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducer/app-reducer';

/**
Store brings together Actions and Reducers.
Redux has a single store for the entire app.
Actions decide what needs to change in the store,
and Reducers decide how that change needs to happen.
Redux's createStore(reducer) creates a store.
It has the following functions:
getState() //used by the container components
dispatch(action) //used by the container components
subscribe(listener) //used by the container components on componentDidMount
subscribe(listener) returns a func to unsubscibe // to use create an anonymous function and call

**/
//TODO try <Provider> from react-redux
let store = createStore(reducer);
ReactDom.render(<App store={store}/>, document.getElementById('app'));
