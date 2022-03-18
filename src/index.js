import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from '@reduxjs/toolkit';
import { noteReducer } from './components/NoteReducer';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(noteReducer);

/* store.dispatch({
  type: '@note/created',
  payload: {
    content: 'testing redix in this app',
    important: true,
    id: 1,
  },
});

store.dispatch({
  type: '@note/created',
  payload: {
    content: 'Test 2 ',
    important: false,
    id: 2,
  },
}); */

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.getElementById('root')
  );
};

renderApp();
