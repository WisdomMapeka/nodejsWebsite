let fs = require("fs");

exports.Mainjsfile = (req, res) => {
    console.log(req.url);
    fs.readFile('static/js/mainjsfile.js', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/js'});
        res.write(data);
        return res.end();
    }); 
}