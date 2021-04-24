const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');


//Settings
app.set('port',process.env.PORT || 8080);


//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Routes
app.use(productRoutes);
app.use(categoryRoutes);

//Inicializar servidor
app.listen(3000, () => {
    console.log('Server on port: ',app.get('port'));
})
