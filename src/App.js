import logo from './logo.svg';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import './App.css';
import PokedexComponent from './components/PokedexComponent';
import PokeDetailComponent from './components/PokeDetailComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>              
      <Routes>
        <Route path="/" element={<PokedexComponent />} />        
        
        <Route path="/pokedex" element={<PokedexComponent />} />        
        <Route path="/PokeDetail/:name" element={<PokeDetailComponent></PokeDetailComponent>}/>} />
        <Route path="/about" element={<h1>This is the about page</h1>} />
      </Routes>    
    </BrowserRouter>
    </div>
  );
}

export default App;
