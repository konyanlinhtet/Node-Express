const fs = require("fs")
console.log("start")
fs.readFile("./content/first.txt", "utf8", (err, result) => {
     if(err) {
          console.log(err);
          return;
     }
     const first = result;
     fs.readFile("./content/second.txt", "utf8", (err2, result2) => {
          if(err2) {
               console.log(err2);
               return;
          }else {
               const second = result2;
               fs.writeFile(
                    "./content/result-asyn.txt",
                    `The result is ${first} : ${second}`,
                    (err3, result3) => {
                         if(err3) {
                              console.log(err3)
                         }
                    } 
                    )
                    console.log("task done")
          }
     })
})
console.log("start next")