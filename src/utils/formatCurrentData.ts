export const formatCurrentData = (data) => {
  const condition = data.current.condition.text;
  const temperature = data.current.temp_c;

  return {
    condition,
    temperature,
  }
}