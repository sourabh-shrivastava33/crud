/* eslint-disable no-unused-vars */
import { takeLatest, put, call, takeEvery } from "redux-saga/effects";
import {
  DELETE_USER,
  DELETE_USER_ERROR,
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_ERROR,
  DELETE_USER_SUCCESS,
  FETCH_ALL_USERS_SUCCESS,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER,
} from "./userActionTypes";

function* fetchAllUserSaga() {
  try {
    const data = yield call(fetch, "/api/users");
    const users = yield data.json();

    yield put({ type: FETCH_ALL_USERS_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: FETCH_ALL_USERS_ERROR, payload: error.message });
  }
}

function* deleteUser(action) {
  const uuid = action.payload;
  try {
    yield call(fetch, `/api/users/${uuid}`, {
      method: "DELETE",
    });
    const data = yield call(fetch, "/api/users");
    const users = yield data.json();

    yield put({ type: DELETE_USER_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: DELETE_USER_ERROR, payload: error.message });
  }
}
function* createUser(action) {
  try {
    yield call(fetch, `/api/users`, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = yield call(fetch, "/api/users");
    const users = yield data.json();

    yield put({ type: CREATE_USER_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: CREATE_USER_ERROR, payload: error.message });
  }
}
function* editUser(action) {
  const uuid = action.payload.uuid;
  try {
    yield call(fetch, `/api/users/${uuid}`, {
      method: "PATCH",
      body: JSON.stringify(action.payload.data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = yield call(fetch, "/api/users");
    const users = yield data.json();

    yield put({ type: UPDATE_USER_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: UPDATE_USER_ERROR, payload: error.message });
  }
}
function* userSaga() {
  yield takeLatest(FETCH_ALL_USERS, fetchAllUserSaga);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeLatest(CREATE_USER, createUser);
  yield takeLatest(UPDATE_USER, editUser);
}
export default userSaga;
