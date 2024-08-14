// import logo1 from './logo1.png';
import './App.css';
import './Style.css';
// import './Phone.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApplicationIot from './comp/ApplicationIot';
import Product from './comp/Product';
import Product2 from './comp/Product2';
import Product3 from './comp/Product3';

function App() {
  return (
    // <div className="App">
    //   <ApplicationIot />
    //   {/* <Style/> 
    //   <Phone/>  */}
    // </div>

    <Router>
    <Routes>
        <Route path="/" element={<ApplicationIot />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
    </Routes>
    </Router>
  );
}

export default App;
