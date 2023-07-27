import { createStore, combineReducers } from 'redux';
import { cartReducer } from './reducer/cartReducer';
import { userReducer } from './reducer/userReducer';

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    userReducer: userReducer
})

export const store = createStore(rootReducer);

