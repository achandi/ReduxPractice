import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from './store/reducers/counter';
import result from './store/reducers/result';

const reducersCombined = combineReducers({
  res: result,
  cnt: counter
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
  return next => {
    return action => {
      console.log('MIDDLEWARE');
      console.log(action);
      console.log(store.getState(), 'MIDDLEWARE BEFORE STATE CHANGE');
      const result = next(action);
      console.log(store.getState(), 'MIDDLEWARE NEXT STATE');
      return result;
    };
  };
};

const store = createStore(
  reducersCombined,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
