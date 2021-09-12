import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchWeatherData} from "./store/ducks/weather/actionCreators";
import {Header} from "./components/Header";
import {selectWeatherData} from "./store/ducks/weather/selectors";


export const App = () => {
    const dispatch = useDispatch()
    const weatherData = useSelector(selectWeatherData)
    const [typeUnit, setTypeUnit] = useState<'imperial' | 'metric'>('metric')
    const [searchValue, setSearchValue] = useState('Омск')

    const getWeather =() => {
        dispatch(fetchWeatherData({location: searchValue, typeUnit}))
    }

    useEffect(() => {
        getWeather()
    }, [])

    if (weatherData) {
        return (
            <div className='App'>
                <div className="wrapper">
                    <Header getWeather={getWeather}
                            searchValue={searchValue} setSearchValue={setSearchValue}
                            setTypeUnit={setTypeUnit} typeUnit={typeUnit}/>
                    <div className='content'>
                        <div className='weather'>
                            <div>
                                <img
                                    src={require(`./assets/images/${weatherData.weather[0].main}.svg`).default}
                                    alt='Svg'/>
                                <div className='weather__value'>
                                    {Math.round(weatherData.main.temp)}º
                                </div>
                            </div>
                            <span>{weatherData.weather[0].description}</span>
                        </div>
                    </div>
                    <div className='info'>
                        <div className='info__item'>
                            <p>Ветер</p>
                            <div>{weatherData.wind.speed} м/c, западный</div>
                        </div>
                        <div className='info__item'>
                            <p>Давление</p>
                            <div>{weatherData.main.pressure} мм рт. ст.</div>
                        </div>
                        <div className='info__item'>
                            <p>Влажность</p>
                            <div>{weatherData.main.humidity}%</div>
                        </div>
                        <div className='info__item'>
                            <p>Вероятность дождя</p>
                            <div>10%</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else  return null
}
