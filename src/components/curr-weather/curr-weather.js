
import "./curr-weather.css";

const CurrWeather = ({data}) => {
    return (
      <div className="weather">
          <div className="top">
            <div>
                <p className="city">{data.city}</p>
                <p className="description">{data.weather[0].description}</p>
            </div>
            <div>
                <p className="temp">{Math.round(data.main.temp)}℃</p>
            </div>
            <img alt="weather" className="weather-img" src={`icons/${data.weather[0].icon}.png`} />
          </div>
          <div className="bottom">
            <p>{Math.round(data.main.feels_like)}℃</p>
          </div>
      </div>  
    );
}

export default CurrWeather;