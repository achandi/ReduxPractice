const redux = require('redux'); // beacuse using nodejs example;

const createStore = redux.createStore;

//initializing state
const initialState = {
  counter: 0
}; //doesnt have to be an object

//Reducer
///reducer gets 2 arguements, state and action
//default state = initialState
//need to retun new javascript object... if theres a nested javascript object in first layer,...
// need to do it again i.e. { ...state: {...object, blah: 1}}
//
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') {
    return { ...state, counter: state.counter + 1 };
  }

  if (action.type === 'ADD_COUNTER') {
    return { ...state, counter: state.counter + 10 };
  }

  return state; // if none of above to match, this will return
};
//Store
///stores need to be initialized with reducer (they are strongly related)
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription  (TYPICALLY SET UP RIGHT AFTER STORE IS CREATED, to get informed about any future dispatches)
///Subscriptions so u dont have to manually call getSate to get snapshot
// they tell u to get a new state because something changed,
//takes a callback function whenever we need to update

store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

//Dispatching Action
//dispatch by accessing the store constant and calling dispatch
//dispatch(takes an action that takes a type, convention is all uppercase) AND AN optional payload
/// type must be passed like this, but can pass either: as many properties as u want after, or one payload object after
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());
