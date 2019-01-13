import { createStore } from 'redux'
import { appReducer } from './reducers'

export const defaultState = {
  movies: [],
  movieFilter: {},
  isAvailable: true,
  unavailableReason: '',
}

export const store = createStore(
  appReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
