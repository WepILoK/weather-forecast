import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./saga";
import {rootReducer} from "./rootReducers";
import {IState} from "./ducks/weather/contracts/state";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    weatherState: IState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)