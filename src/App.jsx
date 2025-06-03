import { Route, Routes } from 'react-router-dom';
import Pokedex from './Pokedex';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex/>} />
      <Route path="/:id" element={<Pokedex/>}/>
    </Routes>
  )
}

export default App