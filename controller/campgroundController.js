// const CampGround = require('../model/campground');
// const mongoose = require('mongoose');
//
// //@desc campground info
// //@route GET /campgrounds
// //@access public
// const campGrounds = a
//
// const createCampground = async (req,res) => {
//     const campground = new CampGround(req.body.campground);
//     await campground.save();
//     res.redirect(`/campgrounds/${campground._id}`);
// }
//
// const newCampGrounds = (req,res) => {
//     res.render('campgrounds/new');
// }
//
// const campGroundsId = async (req, res)=> {
//     const foundCamp = await CampGround.findById(req.params.id);
//     res.render('campgrounds/show', {foundCamp});
// }
//
// module.exports = {campGrounds, newCampGrounds, campGroundsId, createCampground};