import {RootState} from "../../store";
import {IState} from "./contracts/state";


export const selectWeatherState = (state: RootState): IState => state.weatherState

export const selectWeatherData = (state: RootState): IState['weatherData'] =>
    selectWeatherState(state).weatherData
