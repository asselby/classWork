var express = require('express')
var app= express()
var mongoose = require('mongoose')
var blog = require('./models/blog').model
var router = require('./router')
var db =  mongoose.connection;

app.set('views', './views')
app.set('view engine', 'jade')

app.use(express.static('./public'))
app.use('/', router)
mongoose.connect('mongodb://localhost/test')
db.on('error', console.error.bind(console, 'connection error'))


app.listen(3000, function(){
console.log('Example app listen')
})