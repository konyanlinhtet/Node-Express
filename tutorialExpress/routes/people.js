const express = require("express")
const router = express.Router()
// let {people} = require("../data")
const {getPeople,createPeople,createPostmanPeople,updatePostmanPeople,  deletePostmanPeople} = require("../controllers/people")

router.get("/", getPeople)
router.post("/", createPeople)
router.post("/postman", createPostmanPeople)
router.put("/postman/:id", updatePostmanPeople)
router.delete("/postman/:id", deletePostmanPeople)
 
 module.exports = router