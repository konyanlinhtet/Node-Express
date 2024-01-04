const fs = require("fs")

const stream = fs.createReadStream("./content/subfolder/big.txt", {highWaterMark : 90000 , encoding : 'utf8'})

stream.on("data", (result) => {
     console.log(result)
})
stream.on("error", (err) => {
     console.log("err is" , err)
})