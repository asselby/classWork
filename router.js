var express = require('express')
var router = express.Router()
var blog =  require('./controllers/blog')

router.get('/',  blog.show)
router.get('/create',  blog.create)


module.exports = router