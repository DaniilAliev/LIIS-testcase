import { observer } from "mobx-react-lite";
import currentWeather from "../../stores/currentWeatherStore";
import styles from './CurrentWeather.module.css';

const CurrentWearher = observer(() => {

  const { condition, temperature } = currentWeather;

  return (
    <div className={styles.current}>
      <h2 className={styles.condition}>{condition}</h2>
      <p><span>{`${temperature} °C`}</span></p>
    </div>
  )
})

export { CurrentWearher };
