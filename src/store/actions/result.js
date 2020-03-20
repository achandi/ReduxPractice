import * as actionTypes from './actionTypes';

export const storeSync = val => {
  return { type: actionTypes.STORE, val };
};
export const store = val => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().cnt.counter;
      dispatch(storeSync(oldCounter));
    }, 2000);
  };
  // return { type:  actionTypes.STORE, val };
};
export const remove = index => {
  return { type: actionTypes.REMOVE, index };
};
