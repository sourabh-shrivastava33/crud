/* eslint-disable no-unused-vars */

import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
