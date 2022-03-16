import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from '@reduxjs/toolkit';
import { NoteReducer } from './components/NoteReducer';

const store = createStore(NoteReducer);

store.dispatch({
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
});

const App = () => {
  const state = store.getState();
  return (
    <ul>
      {state.map((note) => {
        return (
          <li key={note.id}>
            {note.content}{' '}
            <strong> {note.important ? 'important' : 'not important'}</strong>
          </li>
        );
      })}
    </ul>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();

store.subscrubre(renderApp);
