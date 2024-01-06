const {people } = require("../data")

const getPeople = (req, res) => {
     res.status(200).json({success : true, data : people})
 };

const createPeople =(req, res) => {
     const {name} = req.body
     if(!name) {
         return res.status(400).json({success : false ,msg : "Please provide name"})
     }
     console.log(name)
     res.status(201).json({success : true, person : name})
 };

const createPostmanPeople = (req, res) => {
     const {name} = req.body
     if(!name) {
         return res.status(400).json({success : false ,msg : "Please provide name"})
     }
     console.log(name)
     res.status(201).json({success : true, data : [...people, name]})
 }

const updatePostmanPeople = (req, res) => {
     const {id} = req.params
     const {name} = req.body
     const person = people.find(person => person.id === Number(id));
    if(!person) {
     return res.status(404).json({success : false, msg : `no person with ${id}`})
    }
    const newPeople = people.map(person =>  {
     if(person.id  === Number(id)) {
         person.name = name
     }
     return person
    })
 
     res.status(201).json({success :true , data : newPeople})
 }

const deletePostmanPeople = (req, res) => {
     const {id} = req.params
     const person = people.find(person => person.id === Number(id));
     if(!person) {
     return res.status(404).json({success : false, msg : `no person with ${id}`})
     }
     const newPeople = people.filter(person =>  {
     if(person.id  !== Number(id)) {
         return person
     }
     
     })
     res.status(201).json({success :true , data : newPeople})
 
 }

 module.exports = {
     getPeople,
     createPeople,
     createPostmanPeople,
     updatePostmanPeople,
     deletePostmanPeople
 }