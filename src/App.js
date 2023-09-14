import { useState } from 'react';
import './App.css';

function App() {
  const menu = [
    {
      value: 0,
      heading: 'Оплата, баланс, счет',
      subMenu: [
        {
          id: 1,
          question: '1Как узнать свой лицевой счет?',
          answer: 'Номер телефона — это ваш лицевой счёт. С его помощью можно оплатить услуги, войти в личный кабинет и в МегаФон ТВ.',
          value: 0
        },
        {
          id:2,
          question: '2Как узнать свой лицевой счет?',
              answer: 'Номер телефона — это ваш лицевой счёт. С его помощью можно оплатить услуги, войти в личный кабинет и в МегаФон ТВ.',
          value: 0,
        },
      ]
    },
    {
      value:0,
      heading: 'МегаФон ТВ'
    },
    {
      value:0,
      heading: 'Добровольная блокировка',
    },
    {
      value: 0,
      heading: 'Вопросы по домашнему Интернету',
      subMenu: [
        {
          id:3,
          value: 0,
          question: '3Как узнать свой лицевой счет?',
          answer: 'Номер телефона — это ваш лицевой счёт. С его помощью можно оплатить услуги, войти в личный кабинет и в МегаФон ТВ.',
        },
        
        {
          id:4,
          question: '4Как узнать свой лицевой счет?',
          answer: 'Номер телефона — это ваш лицевой счёт. С его помощью можно оплатить услуги, войти в личный кабинет и в МегаФон ТВ.',
          value: 0,
        },
        
        {
          id:5,
          question: '5Как узнать свой лицевой счет?',
          answer: 'Номер телефона — это ваш лицевой счёт. С его помощью можно оплатить услуги, войти в личный кабинет и в МегаФон ТВ.',
          value: 0
        }

      ]
      
    },
    {
      value:0,
      heading: 'Переезд вместе с нами'
    },
    {
      value:0,
      heading: 'Статический IP адрес'
    },
    {
      value:0,
      heading: 'Оборудование'
    },
    {
      value:0,
      heading: 'Антивирус'
    },
    {
      value:0,
      heading: 'В МегаФон со своим номером'
    },
    {
      value:0,
      heading: 'Скидки близким'
    }
  ]
  const [headingValue, setHeadingValue] = useState(menu)

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
    <ul className="App">
      {headingValue.sort((a,b) => b.value - a.value).map((el) => {
        return (
          <li key={el.heading}>
            <h2>{el.heading}</h2>
            <ul>
              {el.subMenu?.sort((a,b) => b.value - a.value).map((item) => { 
                return (
                <li key={item.id}>
                  <span>вопрос</span>
                  <p>{item.question}</p>
                  <div>
                    <span>ответ</span>
                    <p>{item.answer}</p>
                    <div>
                      <span>Информация была полезной?</span>
                      <button id={item.id} onClick={(evt) => plus(el.heading, evt.target.id)}>da</button>
                      <button id={item.id} onClick={(evt) => minus(el.heading, evt.target.id)}>net</button>
                    </div>
                  </div>
                </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  );
}

export default App;


// <div className="App">
//       {headingValue.sort((a,b) => b.value-a.value).map((el) => {
//         return (
//           <>
//             <p key = {el.menu}>{el.menu}</p>
//             <button onClick={() => plus(el.menu)}>da</button>
//             <button onClick={() => minus(el.menu)}>net</button>
//           </>
//         )
//       })}
//     </div>


// const updateHeadingList = headingValue.map(el => el.heading === id
//   ?{...el, value: el.value+1} 
//   : el
//   )