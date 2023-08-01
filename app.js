const { MongoClient } = require("mongodb");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be Empty!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});


const Fruit = mongoose.model("Fruit", fruitschema);

const fruit = new Fruit({
    name: "Pineapple",
    rating: 10,
    review: "Pineapple also known as PINAPPLE "
});
const kiwi = new Fruit({
    name: "kiwi",
    rating: 10,
    review: "The given fruit is Kiwi."
});
const orange = new Fruit({
    name: "Orange",
    rating: 5,
    review: "Oranges are Sour in nature!!"
});
const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "The given fruit is a Banana!!"
});

// Fruit.insertMany([kiwi,orange,banana]).then(function(){
//     console.log("Success saved in FruitsDB.");
// }).catch(function (err){
//     console.log(err);
// });

// Mongoose save function.
fruit.save();


// Reading the data

async function findFruits() {
    const fruits = await Fruit.find({});
    fruits.forEach(fruit => console.log(fruit));

}

// findFruits();

// Updation of data

const updateOne = async () => {
    const fruit = await Fruit.findOne({ _id: "64c951b6af96b1b1e5bf66e2" });

    if (fruit) {
        const updatedFruit = await Fruit.updateOne({ _id: fruit._id }, { name: "pineapple repeated" });

        if (updatedFruit.nModified > 0) {
            console.log("Successfully updated the document.");
        } else {
            console.log("No document was updated.");
        }
    } else {
        console.log("No document found with the given ID.");
    }
    
};

