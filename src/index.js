import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from '@reduxjs/toolkit';
import { NoteReducer } from './components/NoteReducer';
import { Provider, useSelector } from 'react-redux';

const store = createStore(NoteReducer);

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

const generateID = () => Math.floor(Math.random() * 99999) + 1;

const createNote = (content) => {
  return {
    type: '@note/created',
    payload: {
      content,
      important: false,
      id: generateID(),
    },
  };
};

const App = () => {
  const state = useSelector((state) => state);

  const addNote = (event) => {
    event.preventDefault();
    const { target } = event;
    const content = target.note.value;
    console.log(content);
    target.note.value = '';
    store.dispatch(createNote(content));
    console.log(state);
  };
  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' />
        <button>add</button>
      </form>
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
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

renderApp();
