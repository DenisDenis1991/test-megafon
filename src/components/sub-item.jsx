import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import Answer from './answer';
const SubItem = ({item}) => {
  const [isActive, setIsActive] = useState(false);
  const itemAnimation = useSpring({
    opacity: isActive ? 1 : 0,
    height: isActive ? 'auto' : 0,
    delay: 200,
    overflow: 'hidden',
  });
  return (
    <li className="sub-list__item" tabIndex={1}>
      <div onClick={() => setIsActive(!isActive)} className="sub-list__wrapper">
        <span className="sub-list__text">вопрос</span>
        <h3 className="sub-list__heading">{item.question}</h3>
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
        {isActive ?
          <Answer item={item} />
          : null
        }
      </animated.div>  
    </li>
  )
}

export default SubItem