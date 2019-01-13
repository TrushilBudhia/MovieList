import React from 'react'
import FilterMovies from './components/filterMovies'
import DisplayMovies from './components/displayMovies'
import { getMoviesAction } from './actions/movies'
import { store } from './state'
import { MovieStyled } from './app.styles.js'


export const App = () =>
  <MovieStyled>
    <FilterMovies />
    <DisplayMovies />
  </MovieStyled>


function getMovies() {
  store.dispatch(getMoviesAction())
}
getMovies()