// import React from 'react'
import React, { useEffect, useState } from 'react';
import './pages/About.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const Store = (props) => {
  
  return (
    <div className="product-container">
      <div className="product-img-wrap">
        <img src={props.Product_Image} alt="skin care products"></img>
      </div>
      <div className="product-info">
        <span className="product-sell">{props.Product_Name}</span>
        <span className="product-price">{props.Product_Price}</span>
        <span className="product-description">{props.Product_Info}</span>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <Navbar/>
        <div className="product-container">
          {(data.map((Products) => (
            <Store
              // key={Products.ID}
              Product_Image={Products.Product_Image}
              Product_Name={Products.Product_Name}
              Product_Price={Products.Product_Price}
              Product_Info={Products.Product_Info}
            />
          )))}
        </div>
      <Footer/>
    </div>
  );
};

export default ProductList;

