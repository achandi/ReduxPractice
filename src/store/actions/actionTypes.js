export const INCREMENET = 'INCREMENET';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE = 'STORE';
export const REMOVE = 'REMOVE';

export const increment = () => {
  return {
    type: INCREMENET
  };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const add = () => {
  return { type: ADD, val: 5 };
};
export const subtract = () => {
  return { type: SUBTRACT, val: 5 };
};

export const storeSync = val => {
  return { type: STORE, val };
};
export const store = val => {
  return dispatch => {
    setTimeout(() => {
      dispatch(storeSync(val));
    }, 2000);
  };
  // return { type: STORE, val };
};
export const remove = index => {
  return { type: REMOVE, index };
};

// onAdd: () => dispatch({ type: ADD, val: 5 }),
// onSubtract: () => dispatch({ type: SUBTRACT, val: 5 }),
// storeResult: val => dispatch({ type: STORE, val }),
// removeResult: index => dispatch({ type: REMOVE, index })
