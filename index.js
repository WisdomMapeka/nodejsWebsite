var http = require('http');
var fs = require('fs');
var {home, maincssfile, mainjsfile} = require('./jspages');

console.log(home);

var PORT = 8080;




var routing = (req, res) => {
    console.log(req.url);
    if (req.url == "/") {
        home.Home(req, res);
    }else if(req.url == "/static/css/styles.css"){
        maincssfile.Maincssfile(req,res);
    }else if(req.url == "/static/js/mainjsfile.js"){
        mainjsfile.Mainjsfile(req,res);
    }
}


http.createServer((req, res) => {
    routing(req, res);
}).listen(PORT, console.log("running server, at port ${PORT}"));