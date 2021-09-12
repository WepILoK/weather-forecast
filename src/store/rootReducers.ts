import {combineReducers} from "redux";
import {weatherReducer} from "./ducks/weather/reducer";

export const rootReducer = combineReducers({
    weatherState: weatherReducer,
});