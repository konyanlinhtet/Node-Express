const express = require("express")
const path = require("path")
const app = express()
/*
app.get("/", (req, res) => {
     res.status(200).send("Home page")
})
app.get("/about", (req, res) => {
     res.status(200).send("About page")
})
app.all("*", (req, res) => {
     res.status(400).send("<h1>Not found page</h1>")
})
*/

//nav bar
app.use(express.static("./public"))

//fix to SSR
// app.get("/", (req,res) => {
//      res.sendFile(path.join(__dirname,"/navbar-app/index.html"))
// })


app.all("*", (req, res) => {
     res.status(404).send("Not Found")
})







app.listen(5000, () => {
     console.log("server is listening")
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen