import produce, {Draft} from "immer";
import {IState} from "./contracts/state";
import {ActionsType, IUserActions} from "./contracts/actionTypes";


const initialState: IState = {
    weatherData: null as IState['weatherData'],

}

export const weatherReducer = produce((draft: Draft<IState>, action: IUserActions) => {
    switch (action.type) {
        case ActionsType.SET_WEATHER_DATA:
            draft.weatherData = action.payload
            break;
        default:
            break;
    }
}, initialState)