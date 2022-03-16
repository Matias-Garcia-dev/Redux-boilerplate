export const NoteReducer = (state = [], action) => {
  if (action.type === '@note/created') {
    return state.concat(action.payload);
  }
  return state;
};
