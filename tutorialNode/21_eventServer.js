const http = require("http")

//at first use callback
const server = http.createServer()

//using event
server.on('request', (req, res) => {
     if(req.url === "/"){
         res.end("Home")
     }
})


server.listen(6001,() => {
     console.log("server is listening")
})

