import axios from 'axios'

export function getDataFromLocal() {
  return axios.get('movielist.json') // JSON File Path
    .then(responseJson => {
      return responseJson.data
    })
    .catch(error => {
      throw error
    })
}

const baseUrl = 'https://facebook.github.io/react-native/movies.json'

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

function request({ type }) {
  const url = `${baseUrl}`
  const settings = {
    method: type,
    mode: 'cors'
  }
  return fetch(url, settings)
    .then(handleErrors)
}

export function getDataFromApi() {
  return request({ type: 'GET'})
    .then(response => response.json())
}

export function postDataToApi({ id, notes }) {
  return request({subUrl: `/${id}/AddNote/${notes}`, type: 'POST'})
    .then(response => response.status)
}
