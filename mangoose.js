var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mongoose_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name:"George",
    age : 5,
    temperament:"Happy Cat"
});

george.save(function (err) {
   if (err)
       console.log("Couldn't save george: "+ err);
   else
       console.log("George is saved.");
});