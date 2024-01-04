const fs = require("fs").promises

const start = async () => {
     try {
          for (let i = 0; i < 10000; i++) {
               await fs.writeFile("./content/subfolder/big.txt", `Hello ${i}`, {flag : "a"})
          }
     } catch (error) {
          console.log(error)
     }
}
start()