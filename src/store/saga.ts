import { all } from "redux-saga/effects";

import {WeatherSaga} from "./ducks/weather/sagas";


export default function* rootSaga() {
    yield all([
        WeatherSaga(),
    ])
}