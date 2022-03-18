import React from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from './NoteReducer';

export const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (event) => {
    event.preventDefault();
    const { target } = event;
    const content = target.note.value;
    console.log(content);
    target.note.value = '';
    dispatch(createNote(content));
  };
  return (
    <form onSubmit={addNote}>
      <input name='note' />
      <button style={{ cursor: 'pointer' }}>add</button>
    </form>
  );
};
