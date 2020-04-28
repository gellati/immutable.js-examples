import { List } from 'immutable'

const initialState = {
  age: 20,
  history: List(),
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'AGE_UP':
      return {
          ...state,
          age: state.age + action.value,
          history: state.history.push({ id: Math.random(), age: state.age + action.value} )
        }
      break
    case 'AGE_DOWN':
      return {
          ...state,
          age: state.age - action.value,
          history: state.history.push({ id: Math.random(), age: state.age - action.value} )
        }
      break
    case 'DELETE_ITEM':
      return {
          ...state,
          history: state.history.filter( element => element.id !== action.key)
        }
      break
  }
  return state
}

export default reducer
