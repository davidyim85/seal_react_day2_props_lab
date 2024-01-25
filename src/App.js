import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import weatherData from './weatherData';
import Forecast from './components/Forecast'

function App() {
  return (
    <div className="App">
      <Header />
      <Forecast/>
    </div>
  );
}

export default App;
