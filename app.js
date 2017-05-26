/**
 * Created by Rakshith on 5/25/2017.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

campGrounds = [{name:"Rest", image:"https://images.pexels.com/photos/48638/pexels-photo-48638.jpeg?h=350&auto=compress&cs=tinysrgb"},
    {name:"Play Time", image:"https://images.pexels.com/photos/167701/pexels-photo-167701.jpeg?h=350&auto=compress&cs=tinysrgb"},
    {name:"Cat's Easy Dive", image:"https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?h=350&auto=compress&cs=tinysrgb"},
    {name:"Take it and Go", image:"https://images.pexels.com/photos/266751/pexels-photo-266751.jpeg?h=350&auto=compress&cs=tinysrgb"}];


app.get("/", function (req,res) {
   res.render("landing");
});

app.get("/campgrounds", function (req,res) {


    res.render("campgrounds",{campgrounds:campGrounds});

});


app.post("/campgrounds", function (req,res) {
   var currentGround = {name:req.body.campgroundname, image:req.body.campgroundurl};
     console.log(currentGround);
     campGrounds.push(currentGround);
     console.log(campGrounds);
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function (req,res) {
    res.render("new");
});


app.listen(3000, function () {
    console.log('Yelp Camp listening on port 3000!');
});