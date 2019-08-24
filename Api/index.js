//Index es el orquestador de las rutas (end pooints
//para acceder a los recursos de la aplicacion

//importar las apis
const itemApi = require("./items")

//1. importar express para manejar las rutas
const api = server =>{
    server.use("/api/v1/items",itemApi);
};
    

//2. exportar el metodo api
module.exports=api;