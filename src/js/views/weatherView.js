import { elements } from './base';

const tempUnit = `°C`

//Render weather
export const renderWeather = result => {
    const makeup = `
        <p><span id="city">${result.timezone}</span></p>
        <p>
        <span class="temp" id="temp">${parseTemp(result.daily[0].temp.max)} / ${parseTemp(result.daily[0].temp.min)}</span><span  class="tempunit id="tempunit">${tempUnit}</span>
        </p>
        <p>
        <span class="temp" id="temp">Feels like ${parseTemp(result.daily[0].temp.day)}</span><span class="tempunit" id="tempunit" >${tempUnit}</span>
        </p>
    `
    elements.weather.insertAdjacentHTML('afterbegin', makeup);

    iconGen(result.daily[0].weather[0].main)

};


//Generate weather icon 
const iconGen = desc => {
    let index = desc.toLowerCase()

    switch (index) {
        case 'thunderstorm':
            addIcon(index)
            break;
        case 'drizzle':
            addIcon(index)
            break;
        case 'rain':
            addIcon(index)
            break;
        case 'smoke':
            addIcon(index)
            break;
        case 'haze':
            addIcon(index)
            break;
        case 'dust':
            addIcon(index)
            break;
        case 'fog':
            addIcon(index)
            break;
        case 'sand':
            addIcon(index)
            break;
        case 'ash':
            addIcon(index)
            break;
        case 'squall':
            addIcon(index)
            break;
        case 'tornado':
            addIcon(index)
            break;
        case 'mist':
            addIcon(index)
            break;
        case 'clear':
            addIcon(index)
            break;
        case 'clouds':
            addIcon(index)
            break;
        case 'snow':
            addIcon(index)
            break;
    }
};

//Render weather icon
const addIcon = desc => document.querySelector(`div .${desc}`).classList.remove('hide');

//Parse temperature (kelvin to celsius)
const parseTemp = temp => Math.round(temp - 273.15);