const http = require('http');

const app = http.createServer(function (req,res) {
    res.writeHead(200,{contentType: 'text/plain'})
    res.write(
        "my first node application"
    )
    res.end()
})

app.listen(3000)