import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';
import ListProducts from './components/ListProducts';
import { updateUserInfo } from './store/actions/userAction';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <ListProducts />

      <button onClick={() => {
        dispatch(updateUserInfo({
          username: 'SonPM',
          role: 'ADMIN'
        }))
      }}>UPDATE USER INFO</button>
    </div>
  );
}

export default App;
