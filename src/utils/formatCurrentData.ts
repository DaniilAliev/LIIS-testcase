import { CurrentData } from "../types/types";

export const formatCurrentData = (data: CurrentData) => {
  const condition = data.current.condition.text;
  const temperature = data.current.temp_c;

  return {
    condition,
    temperature,
  }
}