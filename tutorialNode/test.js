const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
     const fileStream = fs.createReadStream("./content/subfolder/big.txt")
     fileStream.on("data", () => {
         fileStream.pipe(res)
     })
})

server.listen(5000, () => {
     console.log("server is listening")
})