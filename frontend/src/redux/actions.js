import {
  CREATE_USER,
  DELETE_USER,
  FETCH_ALL_USERS,
  UPDATE_USER,
} from "./userActionTypes";

export const fetchAllUser = () => {
  return { type: FETCH_ALL_USERS };
};

export const deleteUser = (uuid) => {
  return { type: DELETE_USER, payload: uuid };
};

export const createUser = (data) => {
  return { type: CREATE_USER, payload: data };
};
export const updateUser = (data, uuid) => {
  return { type: UPDATE_USER, payload: { data, uuid } };
};
