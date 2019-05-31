let app = require('express')();


app.get('/', function (req, res) {
    res.send("Hello World");
})

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("DarkCode app lietening at http://%s:%s", host,port);
})
