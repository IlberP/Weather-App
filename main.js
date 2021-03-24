let search = document.getElementById('search')
const submit = document.querySelectorAll('#submitBtn')

//async function to access api
async function weather(location){
    let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=key`,
        {mode: 'cors'}
    )
    const data = await response.json()
    console.log(data)
}

//event listener
submit.forEach(submit => {
    submit.addEventListener('click', sendWeather)
})
//get input value
function getWeather(){
    let area = search.value
    weather(area)
    console.log(area)
}

//submit info
function sendWeather(e){
    e.preventDefault()
    getWeather()
}