const  express = require('express')
require("./db/conn");
const Product = require('./model/product');
const Review = require("./model/reviews-on-product");

const app = express()
const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('!!! HOME Page !!!'))
app.listen(port, () => console.log(`server runing at: ${port}!`))