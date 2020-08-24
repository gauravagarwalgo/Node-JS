var http = require('http')
var port= 5000;

var server = http.createServer(function(req,res){
    res.write('<h1>Hello Node js</h1>')
    res.end()
})

server.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server is running on port ${port}`);
});