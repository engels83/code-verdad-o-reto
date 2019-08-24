//1. importar express
const express = require ("express");

//x1 importar libreria mongoose para conectar a la bd
const mongoose = require("mongoose");

//x2 importar la api
const api = require("./Api");
//x3 importar e inicializar dot enviroment dotenv
require("dotenv").config();

//x4 crear las configuraciones de las bd
const options = {  
    useNewUrlParser: true,  
    useCreateIndex: true,  
    useFindAndModify: false
};

//2. crear una instancia de express llamada server
const server = express();

//3. crear variable para el puerto
const port = 3000;

//x5 conectar la bd a mongoose
mongoose.connect(process.env.MONGO_URL,options);

//x6 usar middleware para interpretar json
server.use(express.json());

//x7 pasar server hacia metodo api
api(server);


//4. crear un listener
server.listen(port, ()=>{
    console.log("Server iniciado en > http://localhost:"+port);
});