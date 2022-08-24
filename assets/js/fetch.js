var city = document.querySelector("#city");
var searchBtn = document.querySelector("#searchBtn")

//need to set up locale storage
searchBtn.addEventListener("click", saveInput)

//save all cities empty array
savedSearchesArray= []

function saveInput(event) {
    event.preventDefault();

    var cityName = document.querySelector("#city").value
    
    //stores city input
    window.localStorage.setItem("cityInput", cityName)

        //if no input alert the user that the city needs to be valid
        if (cityName === "") {
            alert("Please Input a Valid City");
            return;
          }

    // console.log(cityName)

    getApi();
}


function getApi(){

    let APIKEY = "beec4d940ac803d57dd446ac62705e89";

    var cityFromLocalStorage = localStorage.getItem("cityInput");

    // console.log(cityFromLocalStorage, "current local city name");

    // weather api: city only
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityFromLocalStorage +'&appid='+APIKEY+'&units=imperial'

    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(weatherData) {
        // console.log("Weather Data Fetched", weatherData)

        window.localStorage.setItem("weatherForCities",JSON.stringify(weatherData))


    //setting lat && lon for forecast fetch
    var currentLat = weatherData.coord.lat
    var currentLon = weatherData.coord.lon
    
    window.localStorage.setItem("currentLatitude", currentLat)
    window.localStorage.setItem("currentLongitude", currentLon)

    var latStored = localStorage.getItem("currentLatitude");
    var lonStored = localStorage.getItem("currentLongitude")

    //weather api: uvi 
    // var requestOneCall = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latStored+'&lon='+lonStored+'&exclude=hourly,daily&appid='+APIKEY+'&units=imperial'; 

    // console.log(requestOneCall)

    // fetch(requestOneCall)
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(weatherUVIData) {
    //     console.log("weather Location w/UVI", weatherUVIData)

    //     window.localStorage.setItem("weatherUVI",JSON.stringify(weatherUVIData))
    // });

  // weather api: 5 day Forecast

  var request5Day = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latStored+'&lon='+lonStored+'&appid='+APIKEY+'&units=imperial'
    
    fetch(request5Day)
    .then(function(response){
        return response.json();
    })
    .then(function(weatherData5) {
        console.log("Fetch.JS API CALL", weatherData5)
        console.log("Current Fetched City:", weatherData5.city.name)

        window.localStorage.setItem("5DayWeather",JSON.stringify(weatherData5))
        mainData(); 

    }); //end of forecast API

    }); //end of weatherAPI

}    //end of api function

