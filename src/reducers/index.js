import { combineReducers } from 'redux'
import { moviesReducer } from './movies'

export const appReducer = combineReducers({
  project: (state = {}) => state,
  movies: moviesReducer,
})
