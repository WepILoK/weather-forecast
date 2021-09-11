import React, {useState} from 'react';


export const App = () => {
    const [typeUnit, setTypeUnit] = useState(false)
    const [inputVisible, setInputVisible] = useState(false)
    const toggleTypeUnit = () => {
        setTypeUnit(c => !c)
    }
    const toggleInputVisible = () => {
        setInputVisible(c => !c)
    }

    return (
        <div className='App'>
            <div className="wrapper">
                <header className='header'>
                    {inputVisible ? (
                        <div className='city'>
                            <div className='city__title'>
                                Омск
                            </div>
                            <div className='city__subtitle'>
                                <p className='city__subtitle_change'
                                   onClick={toggleInputVisible}>
                                    Сменить город
                                </p>
                                <div>
                                    <img src={require("./assets/images/location.svg").default}
                                         alt='Location Svg'/>
                                    <p>Мое местоположение</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='search'>
                            <input/>
                            <button
                                onClick={toggleInputVisible}>
                                OK
                            </button>
                        </div>
                    )}
                    <div className='switch'>
                        <p>º</p>
                        <div>
                            <button className={typeUnit ? 'active' : ''}
                                    onClick={toggleTypeUnit}>
                                C
                            </button>
                            <button className={typeUnit ? '' : 'active'}
                                    onClick={toggleTypeUnit}>
                                F
                            </button>
                        </div>
                    </div>
                </header>
                <div className='content'>
                    <div className='weather'>
                        <div>
                            <img src={require("./assets/images/sun.svg").default}
                                 alt='Svg'/>
                            <div className='weather__value'>19º</div>
                        </div>
                        <span>Преимущественно солнечно</span>
                    </div>
                </div>
                <div className='info'>
                    <div className='info__item'>
                        <p>Ветер</p>
                        <div>5 м/c, западный</div>
                    </div>
                    <div className='info__item'>
                        <p>Давление</p>
                        <div>752 мм рт. ст.</div>
                    </div>
                    <div className='info__item'>
                        <p>Влажность</p>
                        <div>60%</div>
                    </div>
                    <div className='info__item'>
                        <p>Вероятность дождя</p>
                        <div>10%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
