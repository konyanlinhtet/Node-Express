const express = require("express")
const app = express()
const logger = require("./logger")


// req => middleware => res 

app.use("/api",logger)//only effect include api route


app.get("/",(req, res) => {
     res.end("Home Page")
})
app.get("/about",(req, res) => {
     res.end("About Page")
})
app.get("/api/products",(req, res) => {
     res.send("Products")
})
app.get("/api/items",(req, res) => {
     res.send("Items")
})


app.listen(5000, logger,() => {
     console.log("server is listening")
})