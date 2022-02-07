const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
name:{
    type: String,
    required: true,
    trim:true,
    lowercase:true
},
cuisine: {
    type: String,
    required: true,
    trim:true,
    lowercase:true

},

city : String,
resturant_id:{
    type: String,
    required: true
}
})


const Resturant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
