import {
    ActionsType,
    IFetchWeatherData,
    ISetWeatherData
} from "./contracts/actionTypes";
import {IState} from "./contracts/state";


export const fetchWeatherData = (payload: {location: string, typeUnit: string}): IFetchWeatherData => ({
    type: ActionsType.FETCH_WEATHER_DATA,
    payload
});

export const setWeatherData = (payload: IState['weatherData']): ISetWeatherData => ({
    type: ActionsType.SET_WEATHER_DATA,
    payload
});
