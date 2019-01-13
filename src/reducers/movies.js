import { FILTER_MOVIES, GET_MOVIES, UPDATE_MOVIE, DATA_FETCH_UPDATED, DATA_FETCH_ID_UPDATED, API_AVAILABLE, API_UNAVAILABLE, dataFetchUpdated, dataFetchIdUpdated, apiAvailable, apiUnavailable } from '../actions'
import { store } from '../state'
import { getDataFromLocal, postDataToApi } from '../api'

export function moviesReducer(state = { movies: [], movieFilter:[], isAvailable: true, unavailableReason: '' }, action = { type: '' }) {
  switch (action.type) {
    case FILTER_MOVIES: {
      return {
        ...state,
        movieFilter: state.movieFilter.map(movieFilterItem => {
          return (
            movieFilterItem.key === action.key ? {...movieFilterItem, value: action.value} : movieFilterItem
          )
        }
        )
      }
    }

    case GET_MOVIES:
      getDataFromLocal()
        .then(movies => store.dispatch(dataFetchUpdated(movies)))
        .then(() => store.dispatch(apiAvailable()))
        .catch(err => store.dispatch(apiUnavailable(err.message)))
      return state

    case UPDATE_MOVIE:
      postDataToApi({ id: action.id, notes: action.notes })
        .then(() => store.dispatch(dataFetchIdUpdated(action.id, action.notes)))
        .then(() => store.dispatch(apiAvailable()))
        .catch(err => store.dispatch(apiUnavailable(err.message)))

      return state

    case DATA_FETCH_UPDATED: {
      const movieKeysArray = Object.keys(action.movies[0])

      const movieFilterArray = movieKeysArray.map(movieKey => {
        return {key: movieKey, value: true}
      })

      return {
        ...state,
        movies: action.movies,
        movieFilter: movieFilterArray
      }
    }

    case DATA_FETCH_ID_UPDATED: {
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.id ? {...movie, notes: [...movie.notes, action.notes]} : movie
        )
      }
    }

    case API_AVAILABLE: {
      return {
        ...state,
        isAvailable: true,
        unavailableReason: ''
      }
    }

    case API_UNAVAILABLE: {
      return {
        ...state,
        isAvailable: false,
        unavailableReason: action.reason
      }
    }

    default: {
      return state
    }
  }
}
