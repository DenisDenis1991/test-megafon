import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  points: [],
  valueAnswer: null,
  valuePoint: null,
}

export const dataLoading = createSlice ({
  name: 'menu',
  initialState,
   reducers: {
    setMenu: (state, action) => {
      state.points = action.payload;
    },

    setPlus: (state, action) => {
      state.points=(state.points.map(menuPoint => {
        if(menuPoint.subMenu?.find(point => point.id === action.payload.item.id)) {
          const newSubMenu = menuPoint.subMenu?.map(subItem => {
            if (subItem.id === action.payload.item.id) {
              return({...subItem, value: subItem.value+1} )
            }else {
              return subItem
            }
          })
          newSubMenu.sort((a,b)=> b.value-a.value)
          return({...menuPoint, value: menuPoint.value+1, subMenu: newSubMenu} )
        } else {
          return menuPoint
        }
      }))
      state.points = state.points.sort((a,b) => b.value - a.value)
    },


    setMinus: (state, action) => {
      state.points=(state.points.sort((a,b) => b.value - a.value).map(menuPoint => {
        if(menuPoint.subMenu?.find(point => point.id === action.payload.item.id)) {
          const newSubMenu = menuPoint.subMenu?.map(subItem => {
            if (subItem.id === action.payload.item.id) {
              return({...subItem, value: subItem.value-1} )
            }else {
              return subItem
            }
          })
          newSubMenu.sort((a,b)=> b.value-a.value)
          return({...menuPoint, value: menuPoint.value-1, subMenu: newSubMenu} )
        } else {
          return menuPoint
        }
      }))
      state.points = state.points.sort((a,b) => b.value - a.value)
    },
   }
})

export const {setMenu, setPlus, setMinus} = dataLoading.actions