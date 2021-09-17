let memory = ["1 + 1 = 2", "2 + 2 = 4" ]
module.exports = {
    getMemory(req, res) {
    
        return res.status(200).send(memory);
    },
    addMemory(req, res) {
        const {memory: calc} = req.body
        if(typeof calc === "string") {
            memory.push(calc)
           return res.send(memory)
        }
        return res.status(400).send({message: "calc is not a string"})
    }
}