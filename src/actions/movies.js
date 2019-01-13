




export const FILTER_MOVIES = 'FILTER_MOVIES'
export const filterMovies = ({ key, value }) => {
  return {
    type: FILTER_MOVIES,
    key,
    value
  }
}

export const GET_MOVIES = 'GET_MOVIES'
export const getMoviesAction = () => {
  return {
    type: GET_MOVIES,
  }
}



export const DATA_FETCH_UPDATED = 'DATA_FETCH_UPDATED'
export const dataFetchUpdated = movies => {
  return {
    type: DATA_FETCH_UPDATED,
    movies
  }
}

export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const updateMovie = ({ id, notes }) => {
  return {
    type: UPDATE_MOVIE,
    id,
    notes
  }
}


export const DATA_FETCH_ID_UPDATED = 'DATA_FETCH_ID_UPDATED'
export const dataFetchIdUpdated = (id, notes) => {
  return {
    type: DATA_FETCH_ID_UPDATED,
    id,
    notes
  }
}

export const API_UNAVAILABLE = 'API_UNAVAILABLE'
export const apiUnavailable = reason => {
  return {
    type: API_UNAVAILABLE,
    reason
  }
}

export const API_AVAILABLE = 'API_AVAILABLE'
export const apiAvailable = () => {
  return {
    type: API_AVAILABLE
  }
}
