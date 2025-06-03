import { Route, Routes } from 'react-router-dom';
import Pokedex from './Pokedex';
import { useEffect, useState  } from 'react';
import  axios  from 'axios';
import List from './List';
import Test from './Test';




function App() {
      const [data, setData] = useState(null);

      useEffect(() => {
            axios.get(`https://pokebuildapi.fr/api/v1/pokemon/`) 
              .then((response) => setData(response.data))
              .catch((error) => console.log(error));

              console.log(data)
        }, []);

      
        console.log(data)


  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/:id" element={<Pokedex/>}/>
      <Route path="/list" element={<List poke={data}/>} />
      <Route path='/test' element={<Test/>} />
    </Routes>
  )
}

export default App