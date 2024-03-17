import { DateTime } from 'luxon'

const formatForecast = (data) => {
  return data.map((item) => ({
    date: item.date,
    pic: item.day.condition.icon,
    day: DateTime.fromISO(item.date).weekdayShort,
    maxTemp: item.day.maxtemp_c,
    minTemp: item.day.mintemp_c,
  }))
}

export default formatForecast;