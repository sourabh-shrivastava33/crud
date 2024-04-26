/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  user: userReducer,
});
export default rootReducer;
