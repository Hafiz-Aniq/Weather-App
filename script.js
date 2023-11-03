// const container = document.querySelector('.container');
// const inputkivalue = document.getElementById('inputkimaan')
// const search = document.getElementById('btn');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');

// search.addEventListener('click', () =>{ 
// //  const APIKey = '3da72dd647bf44bba8d51137230111';
// const city = inputkivalue.value

// if(city == '')

// return;

// fetch('https://api.weatherapi.com/v1/current.json?key=3da72dd647bf44bba8d51137230111&q=${city}&aqi=no')
// .then(response => response.json()).then(json =>{

//     const image = document.querySelector('.weather-box img');
//     const temperature = document.querySelector('.weather-box .temperature');
//     const description = document.getElementsByClassName('description');
//     const humidity = document.getElementsByClassName('.humidityspan');
//     const wind = document.querySelector('.weather-details .wind span');
//     console.log(json)
//     switch (json.weatherBox) {
//         case 'Clear':
//         image.src ='images/clear.png'
//         break;

//         case 'Rain':
//         image.src ='images/rain.png'
//         break;

//         case 'Snow':
//         image.src ='images/snow.png'
//         break;

//         case 'Clouds':
//         image.src ='images/cloud.png'
//         break;

//         case 'Mist':
//         image.src ='images/mist.png'
//         break;

//         case 'Haze':
//         image.src ='images/mist.png'
//         break;

//     default:
//         image.src = 'images/cloud.png';


        
// }


// temperature.innerHTML = `${parseInt(json.current.temp_c)}<span>°C</span>`;
// description.innerHTML = `${json.current.text}`;
// humidity.innerHTML = `${json.current.humidity}%`;
// wind.innerHTML = `${parseInt(json.current.wind_kph)}Km/h`;


// });


// });








const container = document.querySelector('.container');
const inputkivalue = document.getElementById('inputkimaan');
const search = document.getElementById('btn');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found')
search.addEventListener('click', () => {
    const city = inputkivalue.value;

    if(city == '') return;

    fetch(`https://api.weatherapi.com/v1/current.json?key=3da72dd647bf44bba8d51137230111&q=${city}&aqi=no`)
    .then(response => response.json()).then(json => {

        if(json.cod == '404') {
            container.style.height = '400px'
            weatherBox.classList.remove('active')
            weatherDetails.classList.remove('active')
            error404.classList.add('active')
            return;
        }

        container.style.height = '555px'
        weatherBox.classList.add('active')
        weatherDetails.classList.add('active')
        error404.classList.remove('active')





        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.description');
        const humidity = document.querySelector('.humidityspan');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.current.condition.text) {
            case 'Clear':
                image.src ='images/clear.png';
                break;
            case 'Rain':
                image.src ='images/rain.png';
                break;
            case 'Snow':
                image.src ='images/snow.png';
                break;
            case 'Clouds':
                image.src ='images/cloud.png';
                break;
            case 'Mist':
                image.src ='images/mist.png';
                break;
            case 'Haze':
                image.src ='images/mist.png';
                break;
            default:
                image.src = 'images/cloud.png';
        }

        temperature.innerHTML = `${parseInt(json.current.temp_c)}<span>°C</span>`;
        description.innerHTML = `${json.current.condition.text}`;
        humidity.innerHTML = `${json.current.humidity}%`;
        wind.innerHTML = `${parseInt(json.current.wind_kph)}Km/h`;
    });
});

