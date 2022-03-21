import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import { noteReducer } from './components/NoteReducer';
import { Provider } from 'react-redux';
import App from './App';
import { filterReducer } from './components/filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});
const store = createStore(reducer, composeWithDevTools());

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.getElementById('root')
  );
};

renderApp();
