import { createStore, combineReducers } from "redux";
import { ContactReducer } from "./container/reducers/ContactReducer";
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
const reducers = combineReducers({ contact: ContactReducer });
const store = createStore(reducers,applyMiddleware(ReduxThunk));

export default store;
