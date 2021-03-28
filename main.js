let search = document.getElementById('search');
const submit = document.querySelectorAll('#submit')
const container = document.querySelector('.info')
const details = document.querySelector('.weatherDetails')


async function weather(location){
    let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=apikey`,
        {mode: 'cors'}
    )
    const data = await response.json()
    console.log(data)
    const weatherData = getWeatherData(data)
    displayWeather(weatherData)
    return data
    reset()
    // console.log(location)
}

function reset(){
    search.reset()
    // container.classList.remove('active')
    // details.classList.remove('active2')

}
submit.forEach(submit => {
    submit.addEventListener('click', updateWeather)
    
})
function updateWeather(e){
    e.preventDefault()
    getWeather()
    // const container = document.querySelector('.info')
    // container.classList.add('info:active')
    

    
}

function getWeather(){
    const area = search.value
    weather(area)
    // const container = document.querySelector('.info')
    container.classList.add('active')
    // const details = document.querySelector('.weatherDetails')
    details.classList.add('active2')
    
    // console.log(area)
   
}
//get the data from the json
function getWeatherData(data){
    let newData = {
        weather : data.weather['0'].description,
        temp : Math.round(data.main.temp),
        name : data.name,
        feelsLike: Math.round(data.main.feels_like),
        wind: data.wind.speed,
        humidity: data.main.humidity

    }
    console.log(newData)
    return newData
}

function displayWeather(data){
    document.querySelector('.weather').textContent = data.weather;
    if(data.weather === 'clear sky'){
        document.body.style.backgroundImage = 'url(clearsky.png)';
    }if(data.weather === 'light rain'){
        document.body.style.backgroundImage = 'url(rain.gif)';
    }if(data.weather === 'overcast clouds'){
        document.body.style.backgroundImage = 'url(overcast.gif)'
    // eslint-disable-next-line no-constant-condition
    }if(data.weather === 'scattered clouds'){
        document.body.style.backgroundImage = 'url(scatteredclouds.png)'
    }if(data.weather === 'broken clouds'){
        document.body.style.backgroundImage = 'url(scatteredclouds.png)'
    }
    document.querySelector('.city').textContent = data.name ;
    document.querySelector('.temp').textContent = data.temp + 'F';
    document.querySelector('.feelsLike').textContent = 'Feels like ' + data.feelsLike + 'F';
    document.querySelector('.wind').textContent = 'Wind speeds ' + data.wind + 'MPH';
    document.querySelector('.humidity').textContent = 'Humidity: ' + data.humidity;
}

// function getWeatherData(){
//     let obj = JSON.parse('{"temp", "feels_like", "temp_min" }')
//     document.querySelectorAll('.weather').textContent = obj.temp
// }