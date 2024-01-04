
const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url == "/") {
          res.end("Welecome")
    }else if (req.url == "/about") {
          res.end("About")
    }else {
          res.end(
               `<h1>Oops!</h1>
               <a href="/">Back</a>`
          )
    }
     


})
server.listen(5000)