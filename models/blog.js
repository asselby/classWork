var mongoose = require("mongoose")
var Schema = mongoose.Schema
var blogSchema = new Schema({
    title: String,
    author:String,
    body:String,
    comments: [{body:String, date:Date}],
    date: {type:Date, defualt:Date.now},
    hidden:Boolean,
})

module.exports ={model:mongoose.model('blogSchema', blogSchema)}