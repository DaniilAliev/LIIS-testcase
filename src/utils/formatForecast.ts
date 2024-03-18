import { DateTime } from 'luxon'
import { ForecastDay, Item } from '../types/types';

const formatForecast = (data: Array<ForecastDay>): Item[] => {
  return data.map((item) => ({
    date: item.date,
    pic: item.day.condition.icon,
    day: DateTime.fromISO(item.date).weekdayShort,
    maxTemp: item.day.maxtemp_c,
    minTemp: item.day.mintemp_c,
    average: item.day.avgtemp_c,
  }))
}

export default formatForecast;