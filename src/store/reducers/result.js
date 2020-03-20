import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const checkForObject = object =>
    !Array.isArray(object) && typeof object === 'object';
  return updateObject(state, {
    results: [...state.results]
      .map(x => (checkForObject(x) ? { ...x } : x))
      .filter((x, i) => i !== action.index)
  });
};

const result = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE:
      return updateObject(state, { results: [...state.results, action.val] });
    case actionTypes.REMOVE:
      return deleteResult(state, action);
  }

  return state;
};

export default result;
