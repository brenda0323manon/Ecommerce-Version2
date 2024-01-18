import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Shop from "./Shop";
import Contact from "./Contact";
import Home from "./home";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
       </Router>
      <Footer/>
    </div>
  );
}

export default App;



