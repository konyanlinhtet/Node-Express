const EventEmitter = require("events")

const customEvent = new EventEmitter()

customEvent.on("response", (name, age) => {
     console.log(`data is received ${name} and ${age}`)
})
customEvent.on("response", () => {
     console.log("hello data ")
})

customEvent.emit("response", "Nyan", 20)