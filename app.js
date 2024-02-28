const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const CampGround = require('./model/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => {
        console.log('Mongo connection open!');
    })
    .catch(err => {
        console.log('Oh no, Mongo connection error!');
        console.log(err);
    });



const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hedom is power' });
});

app.get('/campground', async (req, res)=> {
    const campgrounds = await CampGround.find();
    res.render('campgrounds/index', {campgrounds});
})

app.listen(3000, () => {
  console.log('On port 3000!');
});