export const NoteReducer = (state = [], action) => {
  if (action.type === '@note/created') {
    return [...state, action.payload];
  }
  return state;
};
