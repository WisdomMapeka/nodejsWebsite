var fs = require('fs');

exports.Home = (req, res) => {
    fs.readFile('templates/index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
}