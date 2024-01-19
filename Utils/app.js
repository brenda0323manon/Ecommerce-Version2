const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express()
app.use(cors())

const database = mysql.createPool({
    host: 'products.c1suigess9hp.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'password',
    database: 'Ecommerce_Products',
  });
  
  app.get('/', (req, res) => {
    return res.json("From the Backend Side");
  });
  
  app.get('/product', (req, res) => {
    const SQL = 'SELECT * FROM Products';
    database.query(SQL, (err, data) => {
      if (err) {
        console.log('Error fetching data:', err);
      }
      return res.json(data);
    });
  });
  
  app.listen(5000, () => {
    console.log('Server is listening on port 5000');
  });