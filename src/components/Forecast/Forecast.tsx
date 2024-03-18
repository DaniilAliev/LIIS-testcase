import styles from './Forecast.module.css';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import currentWeather from '../../stores/currentWeatherStore';
import { Item } from '../../types/types';

const Forecast = observer(() => {
  const { forecast } = currentWeather;
  
  return (
    <div className={styles['forecast-container']}>
      <p className={styles.text}>Погода на 7 дней</p>
      {toJS(forecast).map((item: Item) => (
        <div key={item.day} className={styles.item}>
          <div className={styles['day-and-pic']}>
            <p>{item.day}</p>
            <img src={item.pic} alt="" height={25} />
          </div>

          <div className={styles.temperatures}>
            <p>{`${item.minTemp} °C`}</p>
            <p>{`${item.maxTemp} °C`}</p>
          </div>
        </div>
      ))}
    </div>
  )
})

export { Forecast };
