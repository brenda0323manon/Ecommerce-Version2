import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Shop from "./Shop";
import Contact from "./Contact";
import Home from "./home";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to = "/">Home</Link>
              </li>
              <li>
                <Link to = "/about">About</Link>
              </li>
              <li>
                <Link to = "/contact">Contact</Link>
              </li>
            </ul>
          </nav> */}
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;



