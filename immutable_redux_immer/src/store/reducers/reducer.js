import { produce } from 'immer'

const initialState = {
  age: 20,
  history: [],
}

const reducer = produce((state=initialState, action) => {
  switch(action.type) {
    case 'AGE_UP':
      return {
        age: state.age + action.value,
        history: produce(state.history, newHistory => { newHistory.push({ id: Math.random(), age: state.age + action.value }) })
      }

    case 'AGE_DOWN':
      return {
        age: state.age - action.value,
        history: produce(state.history, newHistory => { newHistory.push({ id: Math.random(), age: state.age - action.value }) })
      }
    case 'DELETE_ITEM':
      const { age } = state
      return {
        age,
        history: produce(state.history, newHistory => {
          return newHistory.filter( element => element.id !== action.key )
        })
      }
  }
  return state
})

/*
// this reducer also works
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'AGE_UP':
      return {
          ...state,
          age: state.age + action.value,
          history: produce(state.history, newHistory => { newHistory.push({ id: Math.random(), age: state.age + action.value }) })
        }
      break
    case 'AGE_DOWN':
      return {
          ...state,
          age: state.age - action.value,
          history: produce(state.history, newHistory => { newHistory.push({ id: Math.random(), age: state.age - action.value }) })
        }
      break
    case 'DELETE_ITEM':
      return {
          ...state,
          history: produce(state.history, newHistory => {
            return newHistory.filter( element => element.id !== action.key )
          })
        }
      break
  }
  return state
}
*/


export default reducer
