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
const randPrice = () => Math.floor(Math.random() * 20) + 10;
const seedDB = async () => {
    await CampGround.deleteMany();
    for(let i = 0;i < 50;i++) {
        const rand1000 = Math.floor(Math.random() * 1000);
        await CampGround.create({
            title: `${sample(descriptors)} ${sample(places)}`,
            price: randPrice(),
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa doloremque ea illum iusto natus obcaecati possimus, sed vero.',
            location: `${cities[rand1000].city}, ${cities[rand1000].state}`,
            image: 'https://picsum.photos/640/360',
        })
    }
}

seedDB().then(()=>{
    mongoose.connection.close();
    console.log('database closed');
})