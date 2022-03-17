export const NoteReducer = (state = [], action) => {
  switch (action.type) {
    case '@note/created':
      return [...state, action.payload];
    case '@note/toggle_important':
      const { id } = action.payload;
      return state.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            important: !note.important,
          };
        }
        return note;
      });
    default:
      break;
  }
  return state;
};
