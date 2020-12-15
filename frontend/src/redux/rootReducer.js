import { combineReducers } from "redux";
import { user } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: user
})