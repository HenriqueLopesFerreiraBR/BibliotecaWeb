const express = require('express');
const { json } = require('express/lib/response');
const app = express()

app.use(express.json())

const CategoriaModel = require('../models/CategoriaModel');

//Selecionar todas as categorias
module.exports =  app.get('/categoria', async (req , res)=>{
try {
    const categoria = await CategoriaModel.find({});
        
    res.status(200).json(categoria)
} catch (error) {
    return res.status(500).send(error.message)
}
});

//cadastrar Categorias
module.exports =  app.post('/categoria/cadastrar', async (req, res)=>{
    try {
        const categoria = await CategoriaModel.create(req.body);
        
        res.status(201).json(categoria);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

//Buscar categorias  por ID
module.exports = app.get('/categoria/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const categoria = await CategoriaModel.findById(id);

        return res.status(200).json(categoria);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

//Update
module.exports = app.patch('/categoria/:id', async (req,res)=>{
    try {
        const id = req.params.id;

        const categoria = await CategoriaModel.findByIdAndUpdate(id, req.body, {new:true});

        res.status(200).json(categoria);

    } catch (error) {
       return res.status(500).send(error.message);
    }
} )

//deletando a categoria
module.exports = app.delete('/categoria/:id', async (req,res)=>{
    try {
        const id = req.params.id;

        const categoria = await CategoriaModel.findByIdAndRemove(id);

    } catch (error) {
        return res.status(500).send(error.message);
    }
})

