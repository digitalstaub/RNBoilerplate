import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import reducers from '../app/reducers/index'; //Import the reducer

let middleware = []
middleware.push(thunk)
// middleware.push(devToolsEnhancer())
// Connect our store to the reducers
// const composeEnhancers = composeWithDevTools({ realtime: true});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(
  applyMiddleware(...middleware),
));
