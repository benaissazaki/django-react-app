import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(
    combineReducers(),
    applyMiddleware(thunk)
)