const mongoose = require("mongoose"); //importando el paquete mongoose

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1/bromasApi",{ //se realiza la conexión a mongo DB
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Established a connection to the database"))
    .catch(err =>console.log("Something went wrong when connecthing to the database", err));
