import {REACT_APP_API_BASE_URL} from '../config';

//Sync
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

export const FETCH_CAT_LOADING = 'FETCH_CAT_LOADING'
export const fetchCatLoading = () => ({
  type: FETCH_CAT_LOADING
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS
})

export const ADOPT_CAT_LOADING = 'ADOPT_CAT_LOADING'
export const adoptCatLoading = () => ({
  type: ADOPT_CAT_LOADING
})

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR'
export const adoptCatError = (error) => ({
  type: ADOPT_CAT_ERROR,
  error
})

//Async
export const FETCH_CAT = 'FETCH_CAT'
export const fetchCat = () => dispatch => {
  dispatch(fetchCatLoading());
  console.log('Fetching Cat...')
  return fetch(`${REACT_APP_API_BASE_URL}/cat`)
  .then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(cat => dispatch(fetchCatSuccess(cat)))
  .catch(err => dispatch(fetchCatError(err)))
}

export const ADOPT_CAT = 'ADOPT_CAT'
export const adoptCat = () => dispatch => {
  dispatch(adoptCatLoading());
  console.log('adopting cat');
  return fetch(`${REACT_APP_API_BASE_URL}/cat`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText);
    }
    // return res.json();
  })
  .then(() => dispatch(adoptCatSuccess()))
  .then(() => dispatch(fetchCat()))
  .catch(err => dispatch(adoptCatError(err)))
}