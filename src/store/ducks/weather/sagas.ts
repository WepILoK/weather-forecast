import {call, put, takeLatest} from "redux-saga/effects";

import {ActionsType, IFetchWeatherData} from "./contracts/actionTypes";
import {setWeatherData} from "./actionCreators";
import {IState} from "./contracts/state";
import {Api} from "../../../api/api";


export function* fetchWeatherDataRequest({payload}: IFetchWeatherData) {
    try {
        const data: IState['weatherData'] = yield call(Api.fetchWeatherForecast, payload)
        yield put(setWeatherData(data))
    } catch (error) {
        throw new Error()
    }
}


export function* WeatherSaga() {
    yield takeLatest(ActionsType.FETCH_WEATHER_DATA, fetchWeatherDataRequest)
}