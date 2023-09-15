import SubMenu from "./sub-menu";
import { useState } from "react";

const MainItem = (el) => { 

  const [isActive, setIsActive] = useState(false);
   return (
    <li key={el.heading} className="main-list">
      <div onClick={() => setIsActive(!isActive)} className='main-list__wrapper'>
        <h3 className='main-list__heading'>{el.el.heading}</h3>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.04695 7L12 12.9924L17.9531 7L20 9.00378L12 17L4 9.00378L6.04695 7Z" fill="#333333"/>
        </svg>
      </div>
      {isActive? 
        <SubMenu item = {el.el.subMenu}/>
      : null
    }
    </li>
  )
}
export default MainItem;