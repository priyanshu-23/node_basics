const http = require('http');

const app = http.createServer(function (req,res) {
    res.writeHead(200,{contentType: 'text/html'})
    res.write(
        "<body><h1>Hello World</h1></body>"
    )
    res.end()
})

app.listen(3000)