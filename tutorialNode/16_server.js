const http = require("http")

const server = http.createServer((req, res) => {
    console.log("response", req.url)
    res.end("Hello")

})
server.listen(5001, () => {
     console.log("server listen")
})