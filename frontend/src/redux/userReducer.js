/* eslint-disable no-unused-vars */
import {
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_ERROR,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./userActionTypes";

const initialState = {
  users: [],
  error: "",
};
function userReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_ALL_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case FETCH_ALL_USERS_ERROR:
      return { ...state, error: action.payload };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER_ERROR:
      return { ...state, error: action.payload };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case CREATE_USER_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case UPDATE_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default userReducer;
