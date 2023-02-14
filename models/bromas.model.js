const mongoose = require("mongoose"); //importando el paquete mongoose

const BromasSchema = new mongoose.Schema({
    setup: String,
	punchline: String
})

const Broma = mongoose.model("Broma", BromasSchema);

module.exports = Broma;
