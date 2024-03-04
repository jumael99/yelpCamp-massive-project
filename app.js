const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const CampGround = require('./model/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp')
    .then(() => {
        console.log('Mongo connection open!');
    })
    .catch(err => {
        console.log('Oh no, Mongo connection error!');
        console.log(err);
    });



const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


//@desc campground info
//@route GET /campgrounds
//@access public
app.get('/campgrounds', async (req, res)=> {
    const campgrounds = await CampGround.find();
    res.render('campgrounds/index', {campgrounds});
})

//@desc new campground add
//@route GET /campgrounds/new
//@access public
app.get('/campgrounds/new', (req,res) => {
    res.render('campgrounds/new');
})

//@desc create new campground
//@route POST /campgrounds
//@access public
app.post('/campgrounds', async (req,res) => {
    const newCampground = await CampGround.create(req.body.campgroundInfo);
    res.redirect(`/campgrounds/${newCampground._id}`);
    // res.send(req.body);
})

//@desc find campground with id
//@route GET /campgrounds/:id
//@access public
app.get('/campgrounds/:id', async (req, res)=> {
    const foundCamp = await CampGround.findById(req.params.id);
    res.render('campgrounds/show', {foundCamp});
})

app.get('/campgrounds/:id/edit', async (req, res)=> {
    const foundCamp = await CampGround.findById(req.params.id);
    res.render('campgrounds/edit', {foundCamp});
})

app.put('/campgrounds/:id', async (req,res)=> {
    const { id } = req.params;
    const campground = await CampGround.findByIdAndUpdate(id, req.body.campgroundInfo);
    res.redirect(`/campgrounds/${campground._id}`);
})


app.delete('/campgrounds/:id', async (req,res)=>{
    const {id} = req.params;
    await CampGround.findByIdAndDelete(id);
    res.redirect('/campgrounds')
})


app.listen(3000, () => {
  console.log('On port 3000!');
});