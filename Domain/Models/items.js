//1. importar librerias (mongoose)
const mongoose = require("mongoose");
const itemHandler = require("../Handlers/itemHandler");
//2. obtener objeto Schema desde mongoose
const {Schema} = mongoose;

//3. crear un esquema tipo mongoSchema
const mongoSchema = new Schema({
    descripcion:{
        type: String,
        minlength: 10,
        required: true

    }, 
    categoria: String,
    tipo: String
});
//x.1 conectar el handler con el modelo
mongoSchema.loadClass(itemHandler);


//4. linkear (conectar) el mongoSchema con un modelo (document) de MongoDB
const Item = mongoose.model("items", mongoSchema);

//5. Exportar el componente Item
module.exports=Item;