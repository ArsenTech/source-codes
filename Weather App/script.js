const weather_codes = {
     0: {
          name: "Clear Sky",
          icons: {
               day: "clear.svg",
               night: "clear-night.svg"
          }
     },
     1: {
          name: "Mainly Clear",
          icons: {
               day: "clear.svg",
               night: "clear-night.svg"
          }
     },
     2: {
          name: "Partly Cloudy",
          icons: {
               day: "partly-cloudy.svg",
               night: "partly-cloudy-night.svg"
          }
     },
     3: {
          name: "Overcast",
          icons: {
               day: "overcast.svg",
               night: "overcast.svg"
          }
     },
     45: {
          name: "Fog",
          icons: {
               day: "fog.svg",
               night: "fog-night.svg"
          }
     },
     48: {
          name: "Rime Fog",
          icons: {
               day: "rime-fog.svg",
               night: "rime-fog.svg"
          }
     },
     51: {
          name: "Light Drizzle",
          icons: {
               day: "light-drizzle.svg",
               night: "light-drizzle.svg"
          }
     },
     53: {
          name: "Moderate Drizzle",
          icons: {
               day: "drizzle.svg",
               night: "drizzle.svg"
          }
     },
     55: {
          name: "Heavy Drizzle",
          icons: {
               day: "heavy-drizzle.svg",
               night: "heavy-drizzle.svg"
          }
     },
     56: {
          name: "Light Freezing Drizzle",
          icons: {
               day: "drizzle.svg",
               night: "drizzle.svg"
          }
     },
     57: {
          name: "Dense Freezing Drizzle",
          icons: {
               day: "heavy-drizzle.svg",
               night: "heavy-drizzle.svg"
          }
     },
     61: {
          name: "Slight Rain",
          icons: {
               day: "slight-rain.svg",
               night: "slight-rain-night.svg"
          }
     },
     63: {
          name: "Moderate Rain",
          icons: {
               day: "rain.svg",
               night: "rain.svg"
          }
     },
     65: {
          name: "Heavy Rain",
          icons: {
               day: "heavy-rain.svg",
               night: "heavy-rain.svg"
          }
     },
     66: {
          name: "Light Freezing Rain",
          icons: {
               day: "rain.svg",
               night: "rain.svg"
          }
     },
     67: {
          name: "Heavy Freezing Rain",
          icons: {
               day: "heavy-rain.svg",
               night: "heavy-rain.svg"
          }
     },
     71: {
          name: "Slight snowfall",
          icons: {
               day: "light-snow.svg",
               night: "light-snow-night.svg"
          }
     },
     73: {
          name: "Moderate snowfall",
          icons: {
               day: "snow.svg",
               night: "snow.svg"
          }
     },
     75: {
          name: "Heavy snowfall",
          icons: {
               day: "heavy-snow.svg",
               night: "heavy-snow.svg"
          }
     },
     77: {
          name: "Snow Grains",
          icons: {
               day: "snow-grains.svg",
               night: "snow-grains.svg"
          }
     },
     80: {
          name: "Slight Rain Showers",
          icons: {
               day: "slight-rain-showers.svg",
               night: "slight-rain-showers-night.svg"
          }
     },
     81: {
          name: "Moderate Rain Showers",
          icons: {
               day: "rain-showers.svg",
               night: "rain-showers.svg"
          }
     },
     82: {
          name: "Violent Rain Showers",
          icons: {
               day: "heavy-rain-showers.svg",
               night: "heavy-rain-showers.svg"
          }
     },
     85: {
          name: "Light Snow Showers",
          icons: {
               day: "light-snow-showers.svg",
               night: "light-snow-showers.svg"
          }
     },
     86: {
          name: "Heavy Snow Showers",
          icons: {
               day: "heavy-snow-showers.svg",
               night: "heavy-snow-showers.svg"
          }
     },
     95: {
          name: "Thunderstorm",
          icons: {
               day: "thunderstorm.svg",
               night: "thunderstorm.svg"
          }
     },
     96: {
          name: "Slight Hailstorm",
          icons: {
               day: "hail.svg",
               night: "hail.svg"
          }
     },
     99: {
          name: "Heavy Hailstorm",
          icons: {
               day: "heavy-hail.svg",
               night: "heavy-hail.svg"
          }
     }
};
const searchBox = document.getElementById("search-box");
const weatherDetailsElem = document.getElementById("weather-details");
const locationTxt = document.getElementById("location");
const weatherCondIcon = document.getElementById("weather-condition-icon");
const weatherCondName = document.getElementById("weather-condition-name");
const temperatureTxt = document.getElementById("temperature");
const humidityTxt = document.getElementById("humidity");
const windSpeedTxt = document.getElementById("wind-speed");
const locationInput = document.getElementById("location-input");
const dailyForecastElems = document.getElementById("daily-forecast")
async function getLocation(location){
     const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`);
     const data = await res.json();
     const result = data.results[0];
     return {
          name: result.name || "",
          lat: result.latitude,
          lon: result.longitude
     }
}
async function getWeather(location){
     const {lat,lon,name} = await getLocation(location);
     const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min`);
     const data = await res.json();
     return {
          name,
          current: data.current,
          daily: data.daily
     }
}
searchBox.addEventListener("submit",async e=>{
     e.preventDefault()
     weatherDetailsElem.classList.remove("active")
     dailyForecastElems.innerHTML = ""
     const weather = await getWeather(locationInput.value)
     const {temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m} = weather.current
     const {weather_code: daily_weather_code,temperature_2m_max,temperature_2m_min,time} = weather.daily
     const weatherCondition = weather_codes[weather_code]
     const imgSrc = `assets/${is_day ? weatherCondition.icons.day : weatherCondition.icons.night}`
     locationTxt.textContent = weather.name
     temperatureTxt.textContent = temperature_2m
     humidityTxt.textContent = relative_humidity_2m
     windSpeedTxt.textContent = wind_speed_10m
     weatherCondName.textContent = weatherCondition.name
     weatherCondIcon.src = imgSrc
     for(let i=0;i<7;i++){
          const weatherCond = weather_codes[daily_weather_code[i]]
          const temperatureMax = temperature_2m_max[i]
          const temperatureMin = temperature_2m_min[i]
          const timestamp = time[i] 
          const elem = document.createElement("div")
          elem.className = "card"
          elem.innerHTML = `<img src="assets/${weatherCond.icons.day}" alt="weather-icon" width="100" height="100"/>
          <div class="temps">
               <p class="temp" title="Maximum Temperature">${temperatureMax}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 5c1.55 0 3 .47 4.19 1.28l-1.16 2.89A4.47 4.47 0 0 0 16.5 8C14 8 12 10 12 12.5s2 4.5 4.5 4.5c1.03 0 1.97-.34 2.73-.92l1.14 2.85A7.47 7.47 0 0 1 16.5 20A7.5 7.5 0 0 1 9 12.5A7.5 7.5 0 0 1 16.5 5M6 3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg></p>
               <p class="temp" title="Minimum Temperature">${temperatureMin}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 5c1.55 0 3 .47 4.19 1.28l-1.16 2.89A4.47 4.47 0 0 0 16.5 8C14 8 12 10 12 12.5s2 4.5 4.5 4.5c1.03 0 1.97-.34 2.73-.92l1.14 2.85A7.47 7.47 0 0 1 16.5 20A7.5 7.5 0 0 1 9 12.5A7.5 7.5 0 0 1 16.5 5M6 3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg></p>
          </div>
          <p class="date">${timestamp}</p>`
          dailyForecastElems.appendChild(elem)
     }
     weatherDetailsElem.classList.add("active")
})