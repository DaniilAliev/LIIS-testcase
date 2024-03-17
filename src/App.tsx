import { useEffect } from 'react'
import currentWeather from './stores/currentWeatherStore'
import { observer } from 'mobx-react-lite'
import styles from './App.module.css';
import { CurrentWearher } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';

const App = observer(() => {
  const { getWeather } = currentWeather;

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <div className={styles.container}>
      <h1>Санкт-Петербург</h1>
      <CurrentWearher />
      <Forecast />
    </div>
  );
});

export default App
