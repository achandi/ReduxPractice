import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const result = (state = initialState, action) => {
  const checkForObject = object =>
    !Array.isArray(object) && typeof object === 'object';

  switch (action.type) {
    case actionTypes.STORE:
      return { ...state, results: [...state.results, action.val] };
    case actionTypes.REMOVE:
      console.log(action.index);
      return {
        ...state,
        results: [...state.results]
          .map(x => (checkForObject(x) ? { ...x } : x))
          .filter((x, i) => i !== action.index)
      };
  }

  return state;
};

export default result;
