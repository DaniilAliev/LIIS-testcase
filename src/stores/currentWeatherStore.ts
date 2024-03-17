import axios from "axios";
import { makeAutoObservable, observable } from "mobx";
import { formatCurrentData } from "../utils/formatCurrentData";
import formatForecast from "../utils/formatForecast";

const apiKey = '46768851cb0e48a59ed123757241603';
const city = 'Saint Petersburg';
const country = 'Russia';
const days = 7;

class CurrentWeatherStore {
  condition = '';
  temperature = null;
  forecast = [];

  constructor() {
    makeAutoObservable(this)
  }

  getWeather = () => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city},${country}&days=${days}&lang=ru`)
      .then(response => {
        console.log(response.data);
        const { condition, temperature} = formatCurrentData(response.data);

        this.condition = condition;
        this.temperature = temperature;
        this.forecast = formatForecast(response.data.forecast.forecastday);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default new CurrentWeatherStore();