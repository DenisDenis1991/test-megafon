import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import MENU from '../const';
import { setMenu, setPlus } from '../store/data.slice';

const Answer = (item) => {
  const dispatch = useDispatch()

  const [headingValue, setHeadingValue] = useState([])
  const plus = (currentMenuPoint, evt) => {
    const updateHeadingList = headingValue.map(el =>{
        if (el.heading === currentMenuPoint) {
          const newMenu = el.subMenu.map(item => {
            if (item.id === Number(evt)) {
              return({...item, value: item.value+1} )
            } else {
              return item
            }
          })
          return (
            {...el, value: el.value+1, subMenu: newMenu} 
          )
        } else {
          return el
        }
      })
      setHeadingValue(updateHeadingList)
  }

  const minus = (currentMenuPoint, evt) => {
    const updateHeadingList = headingValue.map(el =>{
      if (el.heading === currentMenuPoint) {
        const newMenu = el.subMenu.map(item => {
          if (item.id === Number(evt)) {
            return({...item, value: item.value-1} )
          } else {
            return item
          }
        })
        return (
          {...el, value: el.value-1, subMenu: newMenu} 
        )
      } else {
        return el
      }
    })
      setHeadingValue(updateHeadingList)
  }  
  return (
    <div>
      <div className="sub-list__wrapper">
        <span className="sub-list__text">ответ</span>
        <p className="sub-list__description">{item.item.answer}</p>
      </div>
      <div className="sub-list__wrapper-btn">
        <span className="sub-list__text">Информация была полезной?</span>
        <div>
          <button className="sub-list__btn" id={item.id} onClick={(evt) => dispatch(setPlus(item))}>да</button>
          <button className="sub-list__btn" id={item.id} onClick={(evt) => minus(item.heading, evt.target.id)}>нет</button>
        </div>
      </div>
    </div>
  )
}
export default Answer;