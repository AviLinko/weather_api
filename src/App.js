import './App.css';
import Search from './components/search';
import CurrWeather from './components/curr-weather/curr-weather';
import {CURR_WEATHER_URL,CURR_WEATHER_KEY} from './api';
import {useState} from 'react';

function App() {

  const [currWeather,setCurrWeather] = useState(null);
  const [forecast,setForecast] = useState(null);

  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${CURR_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${CURR_WEATHER_KEY}&units=metric`)
    const forecastFetch = fetch(`${CURR_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${CURR_WEATHER_KEY}&units=metric`)
    
    Promise.all([currentWeatherFetch,forecastFetch])
      .then(async (response)=> {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrWeather({city: searchData.labal, ...weatherResponse});
        setForecast({city: searchData.labal, ...forecastResponse});
      })
      .catch((err) => console.log(err)); 
  }
  
  console.log(currWeather);
  console.log(forecast);


  return (
    <div className="container">
     <Search onSearchChange={handleSearchChange}/>
     { currWeather &&<CurrWeather data = {currWeather} />}
    </div>
  );
}

export default App;
