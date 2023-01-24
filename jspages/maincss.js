let fs = require("fs");

exports.Maincssfile = (req, res) => {
    console.log(req.url);
    fs.readFile('static/css/styles.css', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      return res.end();
    });
}