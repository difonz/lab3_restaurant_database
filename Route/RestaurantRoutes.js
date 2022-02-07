const express = require('express');
const restaurantModel = require('../models/Restaurant.js');
const app = express();



app.get('/restaurants', async (req, res)=>{
    const restaurants = await restaurantModel.find({}).select()


    try {
        res.status(200).send(restaurants)
    }
    catch(err) {
        res.status(500).send(err);
    }
});


app.get('/restaurants/cuisine/:name', async (req, res)=>{
   const name = req.params.name
   const restaurants = await restaurantModel.find({cuisine :name}).select();


    try {
        res.status(200).send(restaurants)
    }
    catch(err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants', async (req, res)=>{

    console.log(req.body)
    const restaurants = new restaurantModel(req.body)


    try {
       await restaurantModel.save((err)=>{
           if(err){
               res.send(err)
           }
           else{
               res.send(restaurants);
           }
       });
    }
    catch(err) {
        res.status(500).send(err);
    }
});