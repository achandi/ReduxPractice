import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENET:
      return updateObject(state, { counter: state.counter + 1 });

    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });

    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.val });

    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.val });
  }

  return state;
};

export default counter;
