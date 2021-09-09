const express = require("express");
const routes = express.Router();

const MemoryController = require("./memoryController")

routes.get("/api/memory", MemoryController.getMemory) 
routes.post("/api/add-memory", MemoryController.addMemory) 

module.exports = routes;