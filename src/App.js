import { useEffect } from 'react';
import './App.css';
import FetchedUsers from './components/FetchedUsers';
import { getUsers } from './redux/users/usersSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div className="App">
      <FetchedUsers />
    </div>
  );
}

export default App;
