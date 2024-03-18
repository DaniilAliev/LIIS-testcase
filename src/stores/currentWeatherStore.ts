import axios from "axios";
import { makeAutoObservable } from "mobx";
import { formatCurrentData } from "../utils/formatCurrentData";
import formatForecast from "../utils/formatForecast";
import { Item } from "../types/types";

const apiKey = '46768851cb0e48a59ed123757241603';
const city = 'Saint Petersburg';
const country = 'Russia';
const days = 7;

class CurrentWeatherStore {
  loading = true;
  condition: string = '';
  temperature: number | null = null;
  forecast: Item[] = [];

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
        this.loading = false;
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default new CurrentWeatherStore();