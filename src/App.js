
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import PlacetoVisit from './Componentptv/PlacetoVisit';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Besttimevisit from './Componentbtv/Besttimevisit';
import Food from './Food/Food';
import Package from './Packages/Package';



function App() {
  return (
    <BrowserRouter>
     <div>
     
     <Navbar/>
     
     <Routes>
     <Route path="/" element={<Home />}> </Route>
     <Route path="/PlacetoVisit" element={<PlacetoVisit />}> </Route>   
     <Route path="/Besttimevisit" element={<Besttimevisit/>}> </Route> 
     <Route path="/Package" element={<Package/>}> </Route> 
     <Route path="/Food" element={<Food/>}> </Route> 

     </Routes>
       
     </div>
       
    </BrowserRouter>
  );
}

export default App;
