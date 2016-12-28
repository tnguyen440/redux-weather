import * as types from './actionTypes';
import axios from 'axios';

const API_KEY ='09d6ee8092ae7f48d9bc46cef4e80191';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    //console.log('Request', request);

    return {
        type: types.FETCH_WEATHER,
        payload: request
    };
}