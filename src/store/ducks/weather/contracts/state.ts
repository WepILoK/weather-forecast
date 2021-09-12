interface IWeatherData {
    weather: { id: number, main: string, description: string, icon: string }[]
    main: {
        temp: number, //темпер
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,//давление
        humidity: number,//влажность
        sea_level: number,
        grnd_level: number
    },
    wind: {
        speed: number,//wi
        deg: number,
        gust: number
    },
}

export interface IState {
    weatherData: IWeatherData | null
}