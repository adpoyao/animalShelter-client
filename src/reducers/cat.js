import * as actions from '../actions'

const initialState = {
  data: null,
  error: null,
  loading: false
};

// Testing that reducer works
// export const reducer = (state=initialState, action) => {
//   return state
// }

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case actions.FETCH_CAT_LOADING:
    case actions.ADOPT_CAT_LOADING:
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    case actions.FETCH_CAT_ERROR:
    case actions.ADOPT_CAT_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    case actions.FETCH_CAT_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        loading: false,
        data: action.cat
      });
    case actions.ADOPT_CAT_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        loading: false
      })
  }
  return state;
}

//   if (action.type === actions.FETCH_CAT_LOADING || action.type === actions.ADOPT_CAT_LOADING){
//     return Object.assign({}, state, {
//       error: null,
//       loading: true
//     });
//   }

//   if (action.type === actions.FETCH_CAT_ERROR || action.type === actions.ADOPT_CAT_ERROR){
//     return Object.assign({}, state, {
//       error: null,
//       loading: false,
//       data: action.cat
//     });
//   }
//   if (action.type === actions.FETCH_CAT_SUCCESS){
//     return Object.assign({}, state, {
//       error: null,
//       loading: false,
//       data: action.cat
//     });
//   }
//   if (action.type === actions.ADOPT_CAT_SUCCESS){
//     return Object.assign({}, state, {
//       error: null,
//       loading: false
//     })
//   }
//   return state
// }