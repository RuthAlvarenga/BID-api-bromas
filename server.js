const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./config/mongoose.config"); //Conexión a DB

const bromasRoutes = require("./routers/bromas.routes") //Incluir modulo de rutas
bromasRoutes(app); //instancia de modulo de rutas

app.listen(port);