import { createSlice } from '@reduxjs/toolkit';
import MENU from '../const';
const initialState = {
  points: [],
}

export const dataLoading = createSlice ({
  name: 'menu',
  initialState,
   reducers: {
    setMenu: (state, action) => {
      state.points = action.payload;
    },

    setPlus: (state, action) => {
      console.log(action.payload)
      // state.points = state.points.map(el =>{
      //   if (el.heading === action.payload.heading) {
      //     const newMenu = el.subMenu.map(item => {
      //       if (item.id === Number(action.payload.id)) {
      //         return({...item, value: item.value+1} )
      //       } else {
      //         return item
      //       }
      //     })
      //     return (
      //       {...el, value: el.value+1, subMenu: newMenu} 
      //     )
      //   } else {
      //     return el
      //   }
      // });
    },


    setMinus: (state, action) => {
      state.points = action.payload;
    },
   }
})

export const {setMenu, setPlus, setMinus} = dataLoading.actions