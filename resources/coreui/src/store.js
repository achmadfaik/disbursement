import { createStore } from 'redux'

const initialState = {
  sidebarShow: 'responsive',
  user: false
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case 'user':
      return {...state, ...rest }
    default:
      return state;
  }
}

const store = createStore(changeState)
export default store
