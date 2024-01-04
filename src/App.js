import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Movie from './Component/Movie';
import Home from './Component/Home';
import TopMovie from './Component/Upcoming';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Card from './Component/TopRated.js';
import TopRated from './Component/TopRated.js';
import Upcoming from './Component/Upcoming';
import Populor from './Component/Populor';



function App() {
  return (
   <>
   
   <BrowserRouter>
    <Navbar></Navbar>
    <div className='low'>
      
   <Routes>
    <Route path='' element={<Home></Home>}></Route>
    <Route path='/up' element={<Upcoming></Upcoming>}></Route>
    <Route path='/top' element={<TopRated></TopRated>}></Route>
    <Route path='/pop' element={<Populor></Populor>}></Route>
   </Routes>
    </div>
   
    </BrowserRouter>
    
    
   
   </>
  );
}

export default App;
