//const { default: mongoose } = require("mongoose");

// const mongoose=require('mongoose');
// const mongoURI="mongodb://localhost:27017/inotebook"

// const connectToMongo=()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("connected to mongo");
//     })

// }
// module.exports=connectToMongo;

const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook3?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongoose databse.");
    })
}

module.exports = connectToMongo; 