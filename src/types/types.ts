export type ForecastDay = {
  date: string;
  day: {
    condition: {
      icon: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
  };
};

export type CurrentData = {
  current: {
    condition: {
      text: string,
    },
    temp_c: number | null
  }
};

export type Item = {
  date: string,
  pic: string,
  day: string | null,
  maxTemp: number,
  minTemp: number,
  average: number,
};

export interface ICubeFace {
  index: number,
  weatherData: Item,
}