// import React from 'react';
// const initialState = {
//   counter: 0,
//   results: []
// };

// const reducer = (state = initialState, action) => {
//   const checkForObject = object =>
//     !Array.isArray(object) && typeof object === 'object';

//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, counter: state.counter + 1 };

//     case 'DECREMENT':
//       return { ...state, counter: state.counter - 1 };

//     case 'ADD':
//       return { ...state, counter: state.counter + action.val };

//     case 'SUBTRACT':
//       return { ...state, counter: state.counter - action.val };
//     case 'STORE':
//       return { ...state, results: [...state.results, state.counter] };
//     case 'REMOVE':
//       console.log(action.index);

//       return {
//         ...state,
//         results: [...state.results]
//           .map(x => (checkForObject(x) ? { ...x } : x))
//           .filter((x, i) => i !== action.index)
//       };
//   }

//   return state;
// };

// export default reducer;
