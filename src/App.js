
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import PlacetoVisit from './Componentptv/PlacetoVisit';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Besttimevisit from './Componentbtv/Besttimevisit';
import Food from './Food/Food';
import Package from './Packages/Package';



function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PlacetoVisit" element={<PlacetoVisit />} />
          <Route path="/Besttimevisit" element={<Besttimevisit />} />
          <Route path="/Package" element={<Package />} />
          <Route path="/Food" element={<Food />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
