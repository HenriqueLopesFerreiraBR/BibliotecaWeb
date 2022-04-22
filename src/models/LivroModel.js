const  mongoose  = require("mongoose");

const livroSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
});

const LivroModel = mongoose.model('Livro' , livroSchema);

module.exports = LivroModel;