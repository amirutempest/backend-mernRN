const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

// deklarasi middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


// routes 
const categoriesRoutes = require('./routes/categories.router');
const productRoutes = require('./routes/products.router')
const userRoutes = require('./routes/users.router');
const orderRoutes = require('./routes/orders.router');
// deklarasi dari file .env
const api = process.env.API_URL;
// deklarasi router express
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productRoutes);
app.use(`${api}/users`, userRoutes);
app.use(`${api}/orders`, orderRoutes);
// deklarasi mongoose untuk koneksi ke db compass
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'tripsafe_db'
})
    .then(() => {
        console.log('Database Connection is ready...')
    })
    .catch((err)=> {
        console.log(err);
    })
// deklarasi port di 8000
const port = 8000;
app.listen(port, ()=> {
    console.log(`server is running http://localhost:${port}`);
})



