import MainItem from "./main-item";
import {useSelector} from 'react-redux'

const MainList = () => {
  const menu = useSelector((state) => state.reducer.points)
  return (
    <ul className="main-list"> 
      {menu.map((el) => <MainItem key={el.heading} el={el} />)}
    </ul>
  );
}
  

export default MainList;