import React from 'react'
import { connect } from 'react-redux'
import { updateMovie } from '../actions/movies'
import { MovieUlStyled, MovieLiStyled, MovieImageStyled } from './dataDisplay.styles'

const Movie = ({ id, movie_image, movie_name, movie_year, movie_category, notes, movieFilter, updateMovie }) => {
  let textInput = React.createRef()

  function handleKeyPress(event) {
    if(event.key === 'Enter'){
      updateMovie({id: id, notes: textInput.current.value})
      textInput.current.value = ''
    }
  }

  let showImage = false
  let showTitle = false
  let showReleaseYear = false
  let showCategory = false
  let showNotes = false

  movieFilter.map(movieFilterItem => {
    showImage = (movieFilterItem.key === 'movie_image' ? movieFilterItem.value : showImage)
    showTitle = (movieFilterItem.key === 'movie_name' ? movieFilterItem.value : showTitle)
    showReleaseYear = (movieFilterItem.key === 'movie_year' ? movieFilterItem.value : showReleaseYear)
    showCategory = (movieFilterItem.key === 'movie_category' ? movieFilterItem.value : showCategory)
    showNotes = (movieFilterItem.key === 'notes' ? movieFilterItem.value : showNotes)
  })

  return (
    <MovieUlStyled>
      {showImage && <MovieLiStyled><MovieImageStyled src={movie_image} /></MovieLiStyled>}
      {showTitle && <MovieLiStyled>{movie_name}</MovieLiStyled>}
      {showReleaseYear && <MovieLiStyled>{movie_year}</MovieLiStyled>}
      {showCategory && <MovieLiStyled>{movie_category}</MovieLiStyled>}
      {showNotes && <MovieLiStyled>Notes:</MovieLiStyled>}
      {showNotes && <MovieLiStyled>
        <ul>
          {notes.map((note, index) =>
            <li key={index}>{note}</li>
          )}
        </ul>
      </MovieLiStyled>
      }
      {showNotes && <MovieLiStyled><textarea type='text' ref={textInput} placeholder='Add a note here...' onKeyPress={handleKeyPress}></textarea></MovieLiStyled>}
    </MovieUlStyled>
  )
}

export default connect(({ movies }) =>
  ({
    movieFilter: movies.movieFilter
  }), { updateMovie })(Movie)
