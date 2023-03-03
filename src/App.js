import logo from './logo.svg';
import './App.css';
import Palette from './Palette';
import SeedColors from './SeedColors';

function App() {
  return (
    <div className="App">
    <Palette palette={SeedColors[2]} />
    </div>
  );
}

export default App;
