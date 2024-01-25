
import Weather from './Weather';
import weatherData from '../weatherData';

const Forecast = () => {
  return <div className='container'> {weatherData.map((v, i) => (
    <Weather
      key={i}
      img={v.img}
      conditions={v.conditions}
      time={v.time}
    />
  ))}</div>
}

export default Forecast