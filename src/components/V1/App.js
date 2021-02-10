import './App.css';
import { CarouselData } from './components/V1/CarouselData';
import CarouselSlider from './components/V1/CarouselSlider';

function App() {
  return <CarouselSlider slides={CarouselData} />;
}

export default App;
