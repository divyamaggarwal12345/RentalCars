const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://divyam123:tendulkar@cluster0.o5r9w.mongodb.net/RentalCars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
