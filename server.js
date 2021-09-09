
const express = require("express");
const app = express();
const routes = require("./routes.js")
const cors = require("cors");

app.use(cors());

//habilitar o request.body
app.use(express.urlencoded({ extended: true }))
app.use(express.json()); //pro express entender o que o axios mandou
//routes
app.use(routes)

app.listen(4000, () => console.log("rodando"));