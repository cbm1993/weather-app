import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '5a68c76873f7ccb04c1ef6f924b37e32';


export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {

            q: query, 
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data
}