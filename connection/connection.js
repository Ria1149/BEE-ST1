const mongoose = require('mongoose')
const config = require('config')
const uri = config.get('DB_STRING')

exports.connectTodB = () =>{
    mongoose.connect(uri , { 
        useNewUrlParser: true, 
        useUnifiedTopology: true })
    
    .then(() => console.log("Database connected"))

    .catch((() => console.log("no database coonected")))
            
}
