const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const productsRouter = require('./routers/product.router')

require('dotenv/config');

// deklarasi middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


// routers

// deklarasi dari file .env
const api = process.env.API_URL;
// deklarasi mongoose untuk konek ke db compass
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



