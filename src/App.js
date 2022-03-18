import { useSelector } from 'react-redux';
import { NewNote } from './components/NewNote';
import { Note } from './components/Note';

const App = ({ store }) => {
  const state = useSelector((state) => state.notes);
  const filterSelected = (value) => {
    console.log(value);
  };

  return (
    <div>
      <NewNote></NewNote>
      <div>
        all
        <input
          type='radio'
          name='filter'
          onChange={() => filterSelected('all')}
        />
        {'    '}
        important
        <input
          type='radio'
          name='filter'
          onChange={() => filterSelected('important')}
        />
        {'   '}
        not important
        <input
          type='radio'
          name='filter'
          onChange={() => filterSelected('not important')}
        />
      </div>
      <Note state={state}></Note>
    </div>
  );
};

export default App;
