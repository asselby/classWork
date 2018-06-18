var http= require("http")

function start(route){
http.createServer(function(request, response){  
    route(request, response)    
    response.end();

}).listen(8888)}

    exports.start = start