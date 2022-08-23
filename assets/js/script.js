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
momentDate = moment().format("MM/D/YY"); 
todaysDate.textContent=momentDate;

var displayCityName = document.createTextNode(dataToUse.name + "," + dataToUse.sys.country);
var displayWeatherIcon = document.createTextNode( iconli)
var displayTemp = document.createTextNode("Temp: "+dataToUse.main.temp+"°F ");
var displayWind = document.createTextNode("Wind: "+dataToUse.wind.speed+" mph");
var displayHumidity = document.createTextNode("Humidity: "+dataToUse.main.humidity+" %");

// NOT WORKING: Open weather API is no longer
// var displayUVIndex = document.createTextNode("UV Index: "+ "color goes here");

//appending data from API to individual element

nameli.appendChild(displayCityName);
templi.appendChild(displayTemp);
windli.appendChild(displayWind)
humidityli.appendChild(displayHumidity)
// uvIndexli.appendChild(displayUVIndex)

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
//retrieving local stored object
var dataToUse5Day = JSON.parse(localStorage.getItem("5DayWeather"));

console.log("Issues with City Location", dataToUse)

// setting empty array
newFiveDayArray = [];

// creating a data structure for the 5 day forecast
for(let i=0; i<dataToUse5Day.list.length; i++) {

var fiveDayInfo = {
    date: dataToUse5Day.list[i].dt_txt,
    icon: dataToUse5Day.list[i].weather[0].icon,
    temp: dataToUse5Day.list[i].main.temp,
    wind: dataToUse5Day.list[i].wind.speed,
    humidity: dataToUse5Day.list[i].main.humidity 
}

newFiveDayArray.push(fiveDayInfo);
};

//sliced the final 5 day forecase data here
var spliced5 = newFiveDayArray.filter(specificDays); 

//function only getting the 5 next days
function specificDays(day) {
    if(day === newFiveDayArray[0]) {
        return day;
    } else if ( day === newFiveDayArray[8]) {
        return day;
    } else if (day === newFiveDayArray[16]) {
        return day;
    } else if (day === newFiveDayArray[24]) {
        return day;
    } else if (day === newFiveDayArray[32]) {
        return day;
    }
}

console.log(spliced5, "spliced")

//spliced data
window.localStorage.setItem("fiveDayArray", JSON.stringify(spliced5))

var finalData = JSON.parse(localStorage.getItem("fiveDayArray"));

//FINAL LOOP 
//iterates through the sliced array
for(let i=0; i<finalData.length; i++) {

//creating forecase container
var dataContainer = document.createElement("div");
dataContainer.setAttribute("id", "dynamicFive");

//core info
var fiveDate = document.createElement("li")
var fiveTemp = document.createElement("li")
var fiveWind = document.createElement("li"
)
var fiveHumidity = document.createElement("li"
)
var fiveIcon = document.createElement('img')

//weather icons 
var fiveIconCode = dataToUse5Day.list[i].weather[0].icon;

fiveIcon.setAttribute('src', "http://openweathermap.org/img/w/"+ fiveIconCode + ".png")

//reformatting the date
var dateFormat = moment(finalData[i].date).format("MM/D/YY");

var displayFiveTemp = document.createTextNode("Temp: "+finalData[i].temp);
var displayFiveDate = document.createTextNode("Day: " + dateFormat);
var displayFiveWind = document.createTextNode("Wind: " + dataToUse5Day.list[i].wind.speed + " MPH")
var displayFiveHumidity = document.createTextNode("Humidity: " + dataToUse5Day.list[i].main.humidity + " %" )

fiveDate.appendChild(displayFiveDate)
fiveTemp.appendChild(displayFiveTemp)
fiveWind.appendChild(displayFiveWind)
fiveHumidity.appendChild(displayFiveHumidity)


dataContainer.appendChild(fiveDate)
dataContainer.appendChild(fiveIcon)
dataContainer.appendChild(fiveTemp)
dataContainer.appendChild(fiveWind)
dataContainer.appendChild(fiveHumidity)

document.getElementById("forecastBox").appendChild(dataContainer)

};


} //end of main data


