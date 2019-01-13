import React from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movies'

export const GetMovies = ({ getMovies }) =>
  <button onClick={() => getMovies()}>Get Movie List</button>

export default connect(null, { getMovies })(GetMovies)
