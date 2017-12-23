import {REACT_APP_API_BASE_URL} from '../config';

//Sync
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const FETCH_DOG_LOADING = 'FETCH_DOG_LOADING'
export const fetchDogLoading = () => ({
  type: FETCH_DOG_LOADING,
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error
})

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({
  type: ADOPT_DOG_SUCCESS,
})

export const ADOPT_DOG_LOADING = 'ADOPT_DOG_LOADING'
export const adoptDogLoading = () => ({
  type: ADOPT_DOG_LOADING,
})

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR'
export const adoptDogError = (error) => ({
  type: ADOPT_DOG_ERROR,
  error
})

//Async
export const FETCH_DOG = 'FETCH_DOG'
export const fetchDog = () => dispatch => {
  dispatch(fetchDogLoading());
  console.log('Fetching Dog...')
  return fetch(`${REACT_APP_API_BASE_URL}/dog`)
  .then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(dog => (dispatch(fetchDogSuccess(dog))))
  .catch(err => dispatch(fetchDogError(err)))
}

export const ADOPT_DOG = 'ADOPT_DOG'
export const adoptDog = () => dispatch => {
  dispatch(adoptDogLoading());
  console.log('adopting dog...')
  return fetch(`${REACT_APP_API_BASE_URL}/dog`, {
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
  .then(() => dispatch(adoptDogSuccess()))
  .then(() => dispatch(fetchDog()))
  .catch(err => dispatch(adoptDogError(err)))
}