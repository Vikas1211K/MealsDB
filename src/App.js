import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

// import components
import Navbar from './components/navbar';

// import pages
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/error'
import SingleMeal from './pages/singlemeal'

function App() {
  return (
    <Router>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/meal/:mealID" element={<SingleMeal/>} />
      </Routes>
    </Router>
  );
}

export default App;
