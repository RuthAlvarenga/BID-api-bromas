const JokeController = require("../controllers/broma.controllers");

module.exports = app => {
    app.get("/api/jokes", JokeController.todasLasBromas);
    app.get("/api/jokes/:id", JokeController.encontrarUnaBroma);
    app.put("/api/jokes/update/:id", JokeController.actualizarBroma);
    app.post("/api/jokes/new", JokeController.crearBroma);
    app.delete("/api/jokes/delete/:id", JokeController.eliminarBroma);
};