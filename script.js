// variables
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var humid = document.querySelector('.humidity');
var wind = document.querySelector('.windSpeed');
var uv = document.querySelector('.uvIndex');
var cities = document.getElementById('list');
let citiesobj = document.createElement('button');



//eventlistener for cities
button.addEventListener('click',function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=471de70069678d89f7f5412ff4f10915&units=imperial')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var humidValue = data['main']['humidity'];
        var windValue = data['wind']['speed'];

        name.innerHTML = inputValue.value;
        temp.innerHTML = 'Temperature: '+tempValue+'°F';
        humid.innerHTML = 'Humidity: '+humidValue+'%';
        wind.innerHTML = 'Wind Speed: '+windValue+'MPH';

            //append search bar values
            citiesobj.innerHTML = inputValue.value;
            list.appendChild(citiesobj);
})


.catch(err => alert("Wrong city name!"))
})