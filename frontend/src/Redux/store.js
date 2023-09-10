import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { productListReducer } from './Reducers/ProductReducers';


const reducer = combineReducers({
    productList : productListReducer,

});
const initialState ={};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store