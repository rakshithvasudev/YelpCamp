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
image:String
});

// Creating a model for campground
var Campground = mongoose.model("Campground",campgroundSchema);

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err,campgrounds) {
        if (err)
            console.log("Error occured: "+err);
        else
            res.render("campgrounds", {campgrounds: campgrounds});
    });
});


app.post("/campgrounds", function (req, res) {
    var currentGround = {name: req.body.campgroundname, image: req.body.campgroundurl};
    Campground.create(currentGround,function (err,campground) {
        if (err)
            console.log("Error occured: "+err);
        else
            console.log("Added Campground: "+ campground);
    });
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.get("/campgrounds/dashboard", function (req, res) {
    res.render("dashboard");
});


app.listen(3000, function () {
    console.log('Yelp Camp listening on port 3000!');
});