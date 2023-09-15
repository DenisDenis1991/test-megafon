import { useState, useEffect } from 'react';
import './style/App.scss';
import MENU from './const';
import {useDispatch, useSelector} from 'react-redux'
import { setMenu, setMinus } from './store/data.slice';
import MainList from './components/main-list';

function App() {

  const dispatch = useDispatch()
  const menu = useSelector((state) => state.reducer.points)
  useEffect(() => {
    
    dispatch(setMenu(MENU))
  },[]);

  // const menu = useSelector((state) => state.reducer.points)
  // const [headingValue, setHeadingValue] = useState(MENU)
  // const [isActive, setIsActive] = useState(true)



  // const plus = (currentMenuPoint, evt) => {
  //   const updateHeadingList = headingValue.map(el =>{
  //       if (el.heading === currentMenuPoint) {
  //         const newMenu = el.subMenu.map(item => {
  //           if (item.id === Number(evt)) {
  //             return({...item, value: item.value+1} )
  //           } else {
  //             return item
  //           }
  //         })
  //         return (
  //           {...el, value: el.value+1, subMenu: newMenu} 
  //         )
  //       } else {
  //         return el
  //       }
  //     })
  //     setHeadingValue(updateHeadingList)
  // }

  // const minus = (currentMenuPoint, evt) => {
  //   const updateHeadingList = headingValue.map(el =>{
  //     if (el.heading === currentMenuPoint) {
  //       const newMenu = el.subMenu.map(item => {
  //         if (item.id === Number(evt)) {
  //           return({...item, value: item.value-1} )
  //         } else {
  //           return item
  //         }
  //       })
  //       return (
  //         {...el, value: el.value-1, subMenu: newMenu} 
  //       )
  //     } else {
  //       return el
  //     }
  //   })
  //     setHeadingValue(updateHeadingList)
  // }
  return (
    <main>
      <div className='wrapper'>
        <h1 className='main-heading'>faq</h1>
        <MainList />
        {/* <ul className="main-list">
          {headingValue.sort((a,b) => b.value - a.value).map((el) => {
            return (
              <li className='main-list__item' key={el.heading}>
                <div onClick={() => setIsActive(!isActive)} className='main-list__wrapper'>
                  <h3 className='main-list__heading'>{el.heading}</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.04695 7L12 12.9924L17.9531 7L20 9.00378L12 17L4 9.00378L6.04695 7Z" fill="#333333"/>
                  </svg>
                </div>
                <ul className={`${isActive? "main-list__sub-list sub-list": "isOpen"}`}>
                  {el.subMenu?.sort((a,b) => b.value - a.value).map((item) => { 
                    return (
                    <li className="sub-list__item" key={item.id}>
                      <div  className="sub-list__wrapper">
                        <span className="sub-list__text">вопрос</span>
                        <h3 className="sub-list__heading">{item.question}</h3>
                      </div>
                      <div className={`${isActive? 'sub-list__answer-box' : 'isOpen'}`}>
                        <div className="sub-list__wrapper">
                          <span className="sub-list__text">ответ</span>
                          <p className="sub-list__description">{item.answer}</p>
                        </div>
                        <div className="sub-list__wrapper-btn">
                          <span className="sub-list__text">Информация была полезной?</span>
                          <div>
                            <button className="sub-list__btn" id={item.id} onClick={(evt) => plus(el.heading, evt.target.id)}>да</button>
                            <button className="sub-list__btn" id={item.id} onClick={() => dispatch(setMinus(MENU))}>нет</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul> */}
      </div>
    </main>
  );
}

export default App;
