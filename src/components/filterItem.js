import React from 'react'
import { connect } from 'react-redux'
import { filterMovies } from '../actions/movies'
import { FilterLiStyled } from './dataDisplay.styles'

const FilterItem = ({ filterKey, filterValue, filterMovies }) => {
  let checkboxInput = React.createRef()

  function handleFilterChange() {

    filterMovies({ key: filterKey, value: checkboxInput.current.checked })
  }

  if(filterKey !==  'id') {
    return (
      <FilterLiStyled>
        <label>
          <input type='checkbox' checked={filterValue} ref={checkboxInput} onChange={handleFilterChange} />
          {filterKey}
        </label>
      </FilterLiStyled>
    )
  } else{
    return  null
  }
}

export default connect(null, { filterMovies })(FilterItem)
