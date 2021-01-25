import './App.css';
import { CarouselData } from './components/CarouselData';
import CarouselSlider from './components/CarouselSlider';

function App() {
  return <CarouselSlider slides={CarouselData} />;
}

export default App;
