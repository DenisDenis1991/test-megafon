import { useEffect } from 'react';
import './style/App.scss';
import MENU from './const';
import {useDispatch} from 'react-redux'
import { setMenu } from './store/data.slice';
import MainList from './components/main-list';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setMenu(MENU))
  },[]);

  return (
    <main>
      <div className='wrapper'>
        <h1 className='main-heading'>faq</h1>
        <MainList />
      </div>
    </main>
  );
}

export default App;
