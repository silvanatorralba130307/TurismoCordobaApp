export type WeatherData = {
  temperature: number;
  apparentTemperature: number;
  weatherCode: number;
  windSpeed: number;
};

export async function fetchWeather(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('No se pudo obtener el clima');
  }

  const data = await response.json();

  return {
    temperature: data.current.temperature_2m,
    apparentTemperature: data.current.apparent_temperature,
    weatherCode: data.current.weather_code,
    windSpeed: data.current.wind_speed_10m,
  };
}

export function getWeatherDescription(code: number) {
  if (code === 0) {
    return '☀️ Despejado';
  }

  if (code === 1) {
    return '🌤️ Mayormente despejado';
  }

  if (code === 2) {
    return '⛅ Parcialmente nublado';
  }

  if (code === 3) {
    return '☁️ Nublado';
  }

  if (code === 45 || code === 48) {
    return '🌫️ Niebla';
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return '🌦️ Llovizna';
  }

  if ([61, 63, 65, 66, 67].includes(code)) {
    return '🌧️ Lluvia';
  }

  if ([71, 73, 75, 77].includes(code)) {
    return '❄️ Nieve';
  }

  if ([80, 81, 82].includes(code)) {
    return '🌦️ Chaparrones';
  }

  if ([85, 86].includes(code)) {
    return '🌨️ Chaparrones de nieve';
  }

  if ([95, 96, 99].includes(code)) {
    return '⛈️ Tormenta';
  }

  return '🌡️ Estado del tiempo';
}
