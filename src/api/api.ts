import axios from "axios";


export const Api = {
    async fetchWeatherForecast(postData: { location: string, typeUnit: string }) {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${postData.location}&lang=ru&units=${postData.typeUnit}&appid=d5b00e67a499c0764a8532916a8213d0`)
        return data
    }
}