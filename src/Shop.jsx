import ReactSearchBox from "react-search-box";
import React, { useEffect, useState } from 'react';
import './pages/About.css';

const Store = (props) => {
  return (
    <div className="product-page">
      <div className="product-img-wrap">
        <img className="product-image" src={props.Product_Image} alt="skin care products"></img>
      </div>
      <div className="product-info">
        <span className="product-price">${props.Product_Price}</span>
        <span className="product-sell">{props.Product_Name}</span>
        <span className="product-description">{props.Product_Info}</span>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("https://ecommerccce-version2.onrender.com/shop")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  const sortProducts = (option) => {
    let sortedData = [...data];
    console.log(sortedData)
    switch (option) {
      case 'price_lowest':
        sortedData = [...data].sort((a, b) => a.Product_Price - b.Product_Price);
        break;
      case 'price_highest':
        sortedData = [...data].sort((a, b) => b.Product_Price - a.Product_Price);
        break;
      default:
        break;
    }
    setData(sortedData);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    sortProducts(e.target.value);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredData = data.filter((product) =>
    product.Product_Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <h2 className="title">Skin Care</h2>
          <div className="filters">
            <select className="dropDown" value={sortOption} onChange={handleSortChange}>
                <option value="">Sort by</option>
                <option value="price_lowest">Price: Lowest to Highest</option>
                <option value="price_highest">Price: Highest to Lowest</option>
            </select>
            <div class="SearchBar">
              <ReactSearchBox value={searchTerm} onChange={handleSearch} placeholder="Search by product name"/>
            </div>
          </div>
          <div className="product-container">
            {(filteredData.map((Products) => (
              <Store
                Product_Image={Products.Product_Image}
                Product_Price={Products.Product_Price}
                Product_Name={Products.Product_Name}
                Product_Info={Products.Product_Info}
              />
            )))}
          </div>
    </div>
  );
};

export default ProductList;

