import {Action} from "redux";
import {IState} from "./state";

export enum ActionsType {
    FETCH_WEATHER_DATA = "weather/FETCH_WEATHER_DATA",
    SET_WEATHER_DATA = "weather/SET_WEATHER_DATA",
    SET_STATUS = "weather/SET_STATUS"
}

export interface IFetchWeatherData extends Action<ActionsType> {
    type: ActionsType.FETCH_WEATHER_DATA
    payload: { location: string, typeUnit: string }
}

export interface ISetWeatherData extends Action<ActionsType> {
    type: ActionsType.SET_WEATHER_DATA
    payload: IState['weatherData']
}


export type IUserActions =
    IFetchWeatherData
    | ISetWeatherData


