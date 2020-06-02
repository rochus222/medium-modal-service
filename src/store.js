import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import {fetchProfile} from './api'

export const openProfile = (id) => {
  return async (dispatch) => {
    const profile = await fetchProfile();
    dispatch({type: "OPEN_MODAL", data: {
      type: 'MODAL_PROFILE',
      data: profile
    }})
  }
}

export const closeModal = () => ({ type: 'CLOSE_MODAL' });

function modal(state = null, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.data
    case 'CLOSE_MODAL':
      return null
    default:
      return state
  }
}

export default createStore(combineReducers({modal}),applyMiddleware(thunk));
