const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

const port = process.env.PORT || 3000;

//Settings
app.set('port',port);


//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Routes
app.use(productRoutes);
app.use(categoryRoutes);

//Inicializar servidor
app.listen(port, () => {
    console.log('Server on port: ',app.get('port'));
})
