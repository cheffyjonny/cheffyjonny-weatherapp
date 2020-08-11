import axios from 'axios';
import * as weatherView from './views/weatherView';

let lat,lon;

//Get current position & weather
const getPosition = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            // console.log(lat, lon);
            getWeather(lat, lon)
        });
    } else {
        alert('Something went wrong with getting location.');
    }


}

getPosition();

const getWeather = async (lat, lon) => {
    try {
        const url = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=e076091b7d56ba43afe750077dc3d954`)
        let result = url.data;
        weatherView.renderWeather(result);
    } catch(error) {
        alert(error);
    }
}

