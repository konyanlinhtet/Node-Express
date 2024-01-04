const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
     // const text = fs.readFileSync("./content/subfolder/big.txt")
     // res.end(text)
     const fileStream = fs.createReadStream("./content/subfolder/big.txt", { encoding :"utf8"})
     fileStream.on("data", () => {
          
          fileStream.pipe(res)

     })
     fileStream.on("err", (err) => {
          res.end(err)
     })
})
server.listen(5000, () => {
     console.log("Server is listening")
})