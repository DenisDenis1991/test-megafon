import SubMenu from "./sub-menu";
import { useState } from "react";
import { useSpring, animated } from 'react-spring';

const MainItem = (el) => { 
  const [isActive, setIsActive] = useState(false);

  const itemAnimation = useSpring({
    opacity: isActive ? 1 : 0,
    height: isActive ? 'auto' : 0,
    overflow: 'hidden',
  });
  console.log()
   return (
    <li className="main-list__item" tabIndex={1}>
      <div onClick={() => setIsActive(!isActive)} className={`${!isActive? 'main-list__wrapper' : ' main-list__wrapper main-list__wrapper--active'}`}>
        <h3 className='main-list__heading'>{el.el.heading}</h3>
        {!isActive? 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.04695 7L12 12.9924L17.9531 7L20 9.00378L12 17L4 9.00378L6.04695 7Z" fill="#333333"/>
          </svg>
        :
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.04695 17L12 11.0076L17.9531 17L20 14.9962L12 7L4 14.9962L6.04695 17Z" fill="#333333"/>
          </svg>
        }
      </div>
      <animated.div style={itemAnimation}>
        {isActive && el.el.subMenu !== undefined ? 
          <SubMenu item = {el.el.subMenu}/>
        : null
        }
      </animated.div>
    </li>
  )
}
export default MainItem;