import { useEffect } from 'react';
import currentWeather from './stores/currentWeatherStore';
import { observer } from 'mobx-react-lite';
import { MoonLoader } from 'react-spinners';
import styles from './App.module.css';
import { CurrentWearher } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';
import { Cube } from './components/Cube';

const App = observer(() => {
  const { getWeather, loading } = currentWeather;

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    loading ? <MoonLoader /> : <div className={styles['general-container']}>
      <div className={styles.container}>
        <h1>Санкт-Петербург</h1>
        <CurrentWearher />
        <Forecast />
      </div>
      <div className={styles.cube}>
        <Cube />
      </div>
    </div>
  );
});

export default App
