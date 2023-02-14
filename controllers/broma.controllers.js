const Broma = require("../models/bromas.model")


module.exports.todasLasBromas = (req, res) => {
    Broma.find()
        .then((allBromas) => res.json({ broma: allBromas }))
        .catch((err) => res.json({ message: "Algo salió mal", error: err }));
};

module.exports.encontrarUnaBroma = (req, res) => {
    Broma.findOne({ _id: req.params.id })
        .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
        .catch((err) => res.json({ message: "Algo salió mal", error: err }));
};

module.exports.crearBroma = (req, res) => {
    Broma.create(req.body)
        .then((nuevaBroma) => res.json({ joke: nuevaBroma }))
        .catch((err) => res.json({ message: "Algo salió mal", error: err }));
};

module.exports.actualizarBroma = (req, res) => {
    Broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) => res.json({ message: "Algo salió mal", error: err }));
};

module.exports.eliminarBroma = (req, res) => {
    Broma.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: "Algo salió mal", error: err }));
};