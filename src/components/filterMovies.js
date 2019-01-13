import React from 'react'
import { connect } from 'react-redux'
import FilterItem from './filterItem'
import { FilterStyled, FilterInnerStyled, FilterUlStyled } from './dataDisplay.styles'

export const FilterMovies = ({ movieFilter }) => {
  if (movieFilter.length < 1 ) {
    return null
  }

  return (
    <FilterStyled>
      <FilterInnerStyled>
        <div>Filter List</div>
        <FilterUlStyled>
          {movieFilter.map((movieFilterItem, index) => <FilterItem key={index} filterKey={movieFilterItem.key} filterValue={movieFilterItem.value} />)}
        </FilterUlStyled>
      </FilterInnerStyled>
    </FilterStyled>
  )
}

export default connect(({ movies }) =>
  ({
    movieFilter: movies.movieFilter
  }))(FilterMovies)
