const mongoose = require("mongoose");
const postSchema = new  mongoose.Schema({
    Title :{type: String, required:true},
    Content :{type: String, required:true},
    Author :{type: String, required:true},
    Tags :{type: String},
    Comments :{type: String}
});

module.exports = mongoose.model("postSchema", postSchema);
