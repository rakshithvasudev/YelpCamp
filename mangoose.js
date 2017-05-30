var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mongoose_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
//
// var george = new Cat({
//     name:"George Williams",
//     age : 9,
//     temperament:"Excited Cat"
// });
//
// george.save(function (err) {
//    if (err)
//        console.log("Couldn't save george: "+ err);
//    else
//        console.log("George is saved.");
// });


Cat.find({name:"George"}, function (err,cats) {
    if (err)
           console.log("Error!");
    else
        console.log("All");
        console.log(cats);
});
