const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    location: String,
    image: String,
}, {timestamps:true});

module.exports = mongoose.model('CampGround', campgroundSchema);