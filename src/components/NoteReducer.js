const intialState = [
  {
    content: 'welcome to my boilerplate',
    important: true,
    id: 1,
  },
  {
    content: ' Matias Garcia',
    important: false,
    id: 2,
  },
];

export const noteReducer = (state = intialState, action) => {
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

const generateID = () => Math.floor(Math.random() * 99999) + 1;
export const createNote = (content) => {
  return {
    type: '@note/created',
    payload: {
      content,
      important: false,
      id: generateID(),
    },
  };
};
