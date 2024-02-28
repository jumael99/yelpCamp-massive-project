const mongoose = require('mongoose');
const CampGround = require('../model/campground');
const cities = require('../seeds/cities');
const {descriptors, places} = require('../seeds/seedHelpers')
mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => {
        console.log('Mongo connection open!');
    })
    .catch(err => {
        console.log('Oh no, Mongo connection error!');
        console.log(err);
    });

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await CampGround.deleteMany();
    for(let i = 0;i < 50;i++) {
        const rand1000 = Math.floor(Math.random() * 1000)
        await CampGround.create({
            location: `${cities[rand1000].city}, ${cities[rand1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
    }
}

seedDB().then(()=>{
    mongoose.connection.close();
    console.log('database closed');
})