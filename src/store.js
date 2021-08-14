import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { ContactReducer } from "./container/reducers/ContactReducer";
const reducers = combineReducers({ contact: ContactReducer });
const store = createStore(reducers, applyMiddleware(ReduxThunk));
export default store;
