/* eslint-disable no-unused-vars */
import { all } from "redux-saga/effects";
import userSaga from "./sagas";

function* rootSaga() {
  yield all([userSaga()]);
}

export default rootSaga;
