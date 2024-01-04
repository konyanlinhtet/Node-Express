const fs = require("fs").promises

// const util = require("util")
// const readFilePromise = util.promisify(fs.readFile)
// const writeFilePromise = util.promisify(fs.writeFile)

const start = async() => {
     try {
          const first = await fs.readFile("./content/first.txt", "utf8")
          const second = await fs.readFile("./content/second.txt", "utf8")
          await fs.writeFile(
               "./content/result-mind-grenate.txt",
               `This is mind grenate : ${first} AND ${second}`,
               {
                    flag : "a"
               }
          )
     } catch (error) {
          console.log(error)
     }
}  
start()