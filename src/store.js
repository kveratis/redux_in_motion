import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as freezer } from './ducks/freezer';
import { reducer as orders } from './ducks/orders';

const rootReducer = combineReducers({
  freezer,
  orders,
});

export default createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));