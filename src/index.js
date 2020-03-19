import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from './store/reducers/counter';
import result from './store/reducers/result';

const reducersCombined = combineReducers({
  res: result,
  cnt: counter
});
const store = createStore(reducersCombined);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
