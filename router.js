var handler = require("./handlers")
var url = require("url")

var handle={}
handle["/"]=handler.start
handle["/start"]=handler.start
handle["/upload"]=handler.upload

function route(request, response){
    var pathname = url.parse(request.url).pathname
    console.log(pathname)

    if (typeof handle[pathname]==='function')
    {
        handle[pathname](response)

    }
        else 
    {
        console.log("No request handler found for" + pathname)
    }
}


exports.route = route