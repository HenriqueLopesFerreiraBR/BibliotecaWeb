const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
});

const categoriaModel = mongoose.model('Categoria', categoriaSchema);

module.exports = categoriaModel;