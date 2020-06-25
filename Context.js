import React, { useReducer } from 'react'
import data from './data'

const initialState = {
  menu: data,
  selected: null
}
const DataContext = React.createContext(initialState)

let reducer = (state, action) => {
  let i = -1
  let ii = -1

  switch (action.type) {
    case 'EDIT_CATEGORY':
      return { ...state, selected: action.payload }
    case 'EDIT_SUBCATEGORY':
      return { ...state, selected: action.payload }
    case 'SAVE_EDIT_CATEGORY':
      i = action.payload.firstIndex
      state.menu[i] = action.payload.data

      return { ...state, selected: null }
    case 'SAVE_EDIT_SUBCATEGORY':
      i = action.payload.firstIndex
      ii = action.payload.secondIndex
      state.menu[i].children[ii] = action.payload.data

      return { ...state, selected: null }
    case 'CANCEL_EDIT':
      return { ...state, selected: null }
    default:
      return
  }
}

function DataProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataContext.Provider>
  )
}
export { DataContext, DataProvider }
