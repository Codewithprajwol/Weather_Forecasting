const inputbox=document.querySelector(".inputbox");
const searchbtn=document.querySelector("#search-icon");
const weatherimg=document.querySelector(".wetheri");
const temperature=document.querySelector(".temp");
const humidity=document.querySelector(".humi");
const windspeed=document.querySelector(".wind");
const description=document.querySelector(".desci");
const location_not_found=document.querySelector(".location-not-found");
const weather=document.querySelector(".weather-images");
const extra=document.querySelector(".extra-info");
const word=document.querySelector(".super");


let wordp=word.innerHTML;
word.style.marginLeft="1.5vw";
description.style.paddingLeft="2.5vw";
// function of check weather
 async function checkweather(city){
  const api_key="58fbd972217862582df6ead46a9b720c";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data= await fetch(`${url}`).then(response => response.json());

  if(weather_data.cod==`404`){
     location_not_found.style.display="flex";
     weather.style.display="none";
     extra.style.display="none";
    return;
  }
  else{
 location_not_found.style.display="none";
  weather.style.display="flex";
  extra.style.display="flex";
}
console.log(weather_data);
  temperature.innerHTML =`${weather_data.main.temp}${wordp}`;
  description.innerHTML =`${weather_data.weather[0].description}`;
  humidity.innerHTML =`${weather_data.main.humidity }%`;
  windspeed.innerHTML =`${weather_data.wind.speed } Km/H`;

  switch(weather_data.weather[0].main){
    case 'Clouds':
        weatherimg.src="/images/cloud.png"
        break;
    case 'Clear':
        weatherimg.src="/images/clear.png"
        break;
    case 'Rain':
        weatherimg.src="/images/rain.png"
        break;
    case 'Mist':
        weatherimg.src="/images/mist.png"
        break;
    case 'Snow':
        weatherimg.src="/images/snow.png"
        break;
  }
}

inputbox.addEventListener('keydown', ()=> {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
      // Run your function here
    checkweather(inputbox.value);
    }
  });

searchbtn.addEventListener('click', ()=>{
    checkweather(inputbox.value);
})