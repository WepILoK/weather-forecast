import React, {useState} from 'react';

import {citiesArray} from "../assets/data/citiesArray";


interface HeaderProps {
    searchValue: string
    getWeather: () => void
    typeUnit: string
    setTypeUnit: (typeUnit: 'imperial' | 'metric') => void
    setSearchValue: (searchValue: string) => void
}

export const Header: React.FC<HeaderProps> = ({searchValue, getWeather, typeUnit, setTypeUnit, setSearchValue}) => {
    const [visibleSelector, setVisibleSelector] = useState(false)
    const [inputVisible, setInputVisible] = useState(false)

    const toggleInputVisible = () => {
        setInputVisible(c => !c)
    }

    return (
        <header className='header'>
            {inputVisible
                ? (
                    <div className='search'>
                        <div className='search__city' onClick={() => setVisibleSelector(true)}>
                            {searchValue}
                        </div>
                        <button onClick={() => {
                            getWeather()
                            toggleInputVisible()
                        }}>
                            OK
                        </button>
                        <div className={'search__list' + (visibleSelector ? ' visible' : '')}>
                            {citiesArray.map((item, index) =>
                                <div key={item + index}
                                     onClick={() => {
                                         setVisibleSelector(false)
                                         setSearchValue(item)
                                     }}>
                                    {item}
                                </div>)}
                        </div>
                    </div>
                ) : (
                    <div className='city'>
                        <div className='city__title'>
                            {!!searchValue ? searchValue : 'Москва'}
                        </div>
                        <div className='city__subtitle'>
                            <p className='city__subtitle_change'
                               onClick={toggleInputVisible}>
                                Сменить город
                            </p>
                            <div>
                                <img src={require("../assets/images/location.svg").default}
                                     alt='Location Svg'/>
                                <p>Мое местоположение</p>
                            </div>
                        </div>
                    </div>)}
            <div className='switch'>
                <p>º</p>
                <div>
                    <button className={typeUnit === 'metric' ? 'active' : ''}
                            onClick={() => setTypeUnit('metric')}>
                        C
                    </button>
                    <button className={typeUnit === 'imperial' ? 'active' : ''}
                            onClick={() => setTypeUnit('imperial')}>
                        F
                    </button>
                </div>
            </div>
        </header>
    );
};