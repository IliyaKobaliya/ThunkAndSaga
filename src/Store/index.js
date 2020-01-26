import thunk from "redux-thunk";
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {watchFetchDog} from "../Redux/Actions/Todo";

import {rootReducer} from "../Redux/Reducers";

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(rootReducer, applyMiddleware(thunk,sagaMiddleware));

sagaMiddleware.run(watchFetchDog);