import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { setMinus, setPlus } from '../store/data.slice';

const Answer = (item) => {
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] =useState(false)

  const handleClickPlus = () => {
    dispatch(setPlus(item))
    setIsChecked(!isChecked)
  }

  const handleClickMinus = () => {
    dispatch(setMinus(item))
    setIsChecked(!isChecked)
  }

  return (
    <div className='sub-list__box'>
      <div className="sub-list__wrapper">
        <span className="sub-list__text">ответ</span>
        <p className="sub-list__description sub-list__description--mobile">{item.item.answer}</p>
      </div>
        {!isChecked?
          <div className="sub-list__wrapper-btn">
            <span className="sub-list__answer">Информация была полезной?</span>
            <div>
              <button className="sub-list__btn" onClick={() => handleClickPlus()}>да</button>
              <button className="sub-list__btn" onClick={() => handleClickMinus()}>нет</button>
            </div>
          </div>
        : <div className="sub-list__wrapper-btn">
            <span className="sub-list__answer">Отзыв отправлен, спасибо!</span>
        </div> 
        }
    </div>
  )
}
export default Answer;