const http = require("http")
const fs = require("fs")

const homePage = fs.readFileSync("./navbar-app/index.html")
const homeCss = fs.readFileSync("./navbar-app/styles.css")
const homeJs = fs.readFileSync("./navbar-app/browser-app.js")
const logo = fs.readFileSync("./navbar-app/logo.svg")


const server = http.createServer((req, res) => {
     // console.log(req.method)
     // console.log(req.url)
     const url = req.url;
     console.log(url)
     if(url === "/") {
          res.writeHead(200, {"content-type" : "text/html"})
          res.write(homePage)
     }else if(url === "/navbar-app/styles.css") {
          res.writeHead(200, {"content-type" : "text/css"})
          res.write(homeCss)
     }
     else if(url === "/logo.svg") {
          res.writeHead(200, {"content-type" : "image/svg+xml"})
          res.write(logo)
     }
     else if(url === "/navbar-app/browser-app.js") {
          res.writeHead(200, {"content-type" : "text/javascript"})
          res.write(homeJs)
     }else {
          res.writeHead(400, {"content-type" : "text/html"})
          res.write("<h1>Page not found</h1>")
     }
     res.end()
     
})
server.listen(5000, () => {
     console.log("server is listening")
}) 