function mainData() {

//regular weather data
var dataToUse = JSON.parse(localStorage.getItem("weatherForCities"));

//test
// console.log(dataToUse, "is this working")
// console.log(dataToUse.name)

//CITY GOES HERE CARD - variable for each data from api
var cityInfoContainer = document.getElementById("cityInfoContainer")

//CITY NAME && TEMP && HUMIDITY && WIND && UV 
var todaysDate = document.querySelector('#date')
var nameli = document.createElement("h2")
var templi = document.createElement("li")
var windli = document.createElement("li")
var humidityli = document.createElement("li")
var uvIndexli = document.createElement("li")

var iconli = document.createElement('img')

//weather icons 
var wIconData = dataToUse.weather[0].icon;
iconli.setAttribute('src', "http://openweathermap.org/img/w/"+ wIconData + ".png")

nameli.setAttribute("class","nameIconContainer")

//replacing text with date
momentDate = moment().format("MM/D/YY");; 
todaysDate.textContent=momentDate;


console.log(todaysDate)

var displayCityName = document.createTextNode(dataToUse.name + "," + dataToUse.sys.country);
var displayWeatherIcon = document.createTextNode( "|"+ iconli + "image?")
var displayTemp = document.createTextNode("Temp: "+dataToUse.main.temp+"°F ");
var displayWind = document.createTextNode("Wind: "+dataToUse.wind.speed+" mph");
var displayHumidity = document.createTextNode("Humidity: "+dataToUse.main.humidity+" %");

// NOT WORKING
var displayUVIndex = document.createTextNode("UV Index: "+ "color goes here");

//appending data from API to individual element



nameli.appendChild(displayCityName);
templi.appendChild(displayTemp);
windli.appendChild(displayWind)
humidityli.appendChild(displayHumidity)
uvIndexli.appendChild(displayUVIndex)

iconli.appendChild(displayWeatherIcon)

//appending data to the page container
todaysDate.appendChild(nameli)

cityInfoContainer.appendChild(templi)
cityInfoContainer.appendChild(windli)
cityInfoContainer.appendChild(humidityli)
cityInfoContainer.appendChild(uvIndexli)

nameli.appendChild(iconli)

// -------------------------------------------------------------------------------
// 5 DAY FORECAST DATA 
// var dataToUse5Day = JSON.parse(localStorage.getItem("5DayWeather"));

// storedInit();
}


//past searches
// var pastSearchedArray = [];
// var pastList = document.querySelector("#past-list");

// function renderCities() {
//     todoList.innerHTML = "";
//     todoCountSpan.textContent = todos.length;
  
//     // Render a new li for each todo
//     for (var i = 0; i < pastSearchedArray.length; i++) {
//       var pastData = pastSearchedArray[i];
  
//       var li = document.createElement("li");
//       li.textContent = pastData;
//       li.setAttribute("data-index", i);

//       pastList.appendChild(li);
//     }

// }

// function storedInit() {


// var storedCity = JSON.parse(localStorage.getItem("cityInput"));

// if(storedCity !== null) {
//     pastSearchedArray = storedCity;
// }

// renderCities();
// }

// function storeCities() {

//     localStorage.setItem("storedArray", JSON.stringify(pastSearchedArray));

// }