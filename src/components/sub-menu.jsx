import { useState } from 'react';
import Answer from './answer';

const SubMenu = ({item}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ul className="main-list__sub-list sub-list">
      {item.map((item) => { 
        return (
          <li className="sub-list__item" key={item.id}>
            <div onClick={() => setIsActive(!isActive)} className="sub-list__wrapper">
              <span className="sub-list__text">вопрос</span>
              <h3 className="sub-list__heading">{item.question}</h3>
            </div>
            {isActive? 
              <Answer item={item} />
              : null
            }
          </li>            
        )
      })}
    </ul>
  )
}

export default SubMenu;