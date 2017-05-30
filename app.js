/**
 * Created by Rakshith on 5/25/2017.
 */
var express = require('express');
app = express();
bodyParser = require('body-parser');
mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// Creating a Campground schema
var campgroundSchema = new mongoose.Schema({
name:String,
image:String,
description: String
});

// Creating a model for campground
var Campground = mongoose.model("Campground",campgroundSchema);

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    // Get all Campgrounds from Database and display.
    Campground.find({}, function (err,campgrounds) {
        if (err)
            console.log("Error occured: "+err);
        else
            res.render("index", {campgrounds: campgrounds});
    });
});


app.post("/campgrounds", function (req, res) {
    var currentGround = {name: req.body.campgroundname, image: req.body.campgroundurl, description:req.body.campdescription};
    // Add to the database
    Campground.create(currentGround,function (err,campground) {
        if (err)
            console.log("Error occured: "+err);
        else
            console.log("Added Campground: "+ campground);
        // return to the campgrounds page
        res.redirect("/index");
    });
});


app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id, function (err,campgroundFound) {
       if (err)
            console.log("error: " +err);
        else
            res.render("show",{campground:campgroundFound});
    });

});


app.get("/campgrounds/dashboard", function (req, res) {
    res.render("dashboard");
});


app.listen(3000, function () {
    console.log('Yelp Camp listening on port 3000!');
});