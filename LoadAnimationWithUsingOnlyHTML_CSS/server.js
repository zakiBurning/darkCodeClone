let express = require('express');

let app = express();

app.use(express.static('public'));




app.get('/', function (req, res) {
    res.send("Hello World");
})

app.get('/index.html', function (req, res) {
    console.log("GET:Dark Code Loaded")
    res.sendFile(__dirname + "/public/" + "index.html");
})


let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("DarkCode app lietening at http://%s:%s", host,port);
})
