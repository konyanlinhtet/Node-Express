const express = require("express")
const path = require("path")
const app = express()

app.get("/", (req, res) =>{
     res.sendFile(path.join(__dirname, "./navbar-app/index.html"))
})

app.all("*", (req, res) => {
     res.status(400).send("<h1>Not Found</h1>")
})




app.listen(5000, () => {
     console.log("server is listening")
})