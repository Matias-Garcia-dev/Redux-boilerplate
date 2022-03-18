import { useSelector } from 'react-redux';
import { NewNote } from './components/NewNote';
import { Note } from './components/Note';

const App = ({ store }) => {
  const state = useSelector((state) => state);

  return (
    <div>
      <NewNote></NewNote>
      <Note state={state}></Note>
    </div>
  );
};

export default App;
