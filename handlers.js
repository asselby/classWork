var html = require ("./html") 
function start(response)
{
    response.write(html)

//    var exec = require("child_prrocess").exec
// var content = "empty"
// exec ("dir", function (error, stdout, stderr)
// {
//     content = stdout
// }
}
function upload()
{
    sleep(10000)
  console.log( "upload called")

}
function sleep(milliseconds)
{
    var startTime = new Date().getTime()
    while (new Date().getTime()<startTime+milliseconds);
}



exports.start=start
exports.upload = upload
