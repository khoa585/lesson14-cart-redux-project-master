import { combineReducers } from 'redux';
import cart from './cart';
import message from './message';
import products from './products';
const appReducers = combineReducers({
    products,
    cart,
    message
});

export default appReducers;