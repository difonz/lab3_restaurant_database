const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRouter.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://diFonz:<password>@cluster0.ewxam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewURLParser:true,
    useUnifiedTopology:true
});

app.use(restaurantRouter);

app.listen(8080, () => {console.log('Server is running....')});