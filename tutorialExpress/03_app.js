const express = require("express")
const app = express()
const {products, people} = require("./data")

app.get("/", (req, res) => {
     res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})
app.get("/api/products", (req, res) => {
     const newProduct = products.map((product) => {
          const {id, name, image} = product
          return {id, name, image}
     })
     res.json(newProduct)
})
app.get("/api/products/:productId", (req, res) => {
     const {productId} = req.params
     const singleProduct = products.find(product => product.id === Number(productId))
     if(!singleProduct) res.status(404).send("<h1>Product Not Found</h1>")
     res.json(singleProduct)
})
app.get("/api/products/:productId/reviews/:reviewid", (req, res) => {
     res.send("Hello world")
})
app.get ("/api/v1/query", (req, res) => {
     const {search, limit} = req.query
     let sortedproducts = [...products]
     
     if(search) {
          sortedproducts = sortedproducts.filter(product => {
               // console.log(product.name.startsWith(search))
               return product.name.startsWith(search)
          })
     }
     if(limit) {
          sortedproducts = sortedproducts.slice(0, Number(limit))
     }
     if(sortedproducts.length < 1) {
          return res.status(200).json({success : true, data : []})
     }
     res.status(200).json(sortedproducts)
})

app.listen(5000, () => {
     console.log("server is listening")
})