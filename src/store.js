import { createStore, combineReducers } from 'redux';
import { reducer as freezer } from './ducks/freezer';
import { reducer as orders } from './ducks/orders';

const rootReducer = combineReducers({
  freezer,
  orders,
});

export default createStore(rootReducer);