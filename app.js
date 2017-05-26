/**
 * Created by Rakshith on 5/25/2017.
 */
var express = require('express');
var app = express();

app.set("view engine","ejs");

var campGrounds = [];

app.get("/", function (req,res) {
   res.render("landing");
});

app.get("/campgrounds", function (req,res) {
campGrounds = [{name:"Rest", image:"https://images.pexels.com/photos/48638/pexels-photo-48638.jpeg?h=350&auto=compress&cs=tinysrgb"},
    {name:"Play Time", image:"https://images.pexels.com/photos/167701/pexels-photo-167701.jpeg?h=350&auto=compress&cs=tinysrgb"},
    {name:"Cat's Easy Dive", image:"https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?h=350&auto=compress&cs=tinysrgb"},
    {name:"Take it and Go", image:"https://images.pexels.com/photos/266751/pexels-photo-266751.jpeg?h=350&auto=compress&cs=tinysrgb"}];

    res.render("campgrounds",{campgrounds:campGrounds})

});

app.listen(3000, function () {
    console.log('Yelp Camp listening on port 3000!')
});