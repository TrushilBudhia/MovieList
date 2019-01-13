import React from 'react'
import { connect } from 'react-redux'
import Movie from './movie'
import { DisplayMoviesStyled, DisplayMoviesTitleStyled } from './dataDisplay.styles'

export const DisplayMovies = ({ movies }) =>
{
  return (
    <DisplayMoviesStyled>
      <DisplayMoviesTitleStyled>My Favourite Movies</DisplayMoviesTitleStyled>
      {movies.map((movie, index) => <Movie key={index} {...movie} />)}
    </DisplayMoviesStyled>
  )
}

export default connect(({ movies }) =>
  ({
    movies: movies.movies
  })
)(DisplayMovies)
