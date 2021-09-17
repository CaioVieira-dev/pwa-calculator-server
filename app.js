//configure the server as a class to allow testing with supertest
const express = require("express");
const cors = require("cors");

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
      this.express.use(cors())
      this.express.use(express.urlencoded({extended:true}))
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;