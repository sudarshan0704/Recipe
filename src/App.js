import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Card from './components/Card';
import Selecteditem from './components/Selecteditem';
import Home from './components/Home';
import AboutUs from './components/About';
import Mycollection from './components/Mycollection';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<AboutUs/>}/>
    <Route exact path='/dishes' element={<Card/>}/>
    <Route exact path='/selecteddish/:i' element={<Selecteditem/>}/>
    <Route exact path='/mycollection' element={<Mycollection/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
