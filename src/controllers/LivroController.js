const express = require("express");
const LivroModel = require('../models/LivroModel');

const app = express();

app.use(express.json());

module.exports = app.get('/livros', async(req, res)=>{
    try {
        const livro = await LivroModel.find({});
        
        res.status(200).json(livro);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = app.get('/livro/:id' , async (req,res)=>{
    try {
        const id = req.params.id;
        const livro =  LivroModel.findById(id)

        res.status(201).json(livro);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
});

module.exports= app.post('/livro/cadastrar', async (req, res)=>{
    try {
        const livro = await LivroModel.create(req.body);

        res.status(200).json(livro);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = app.patch('/livro/:id', async (req,res) =>{
    try {
        const id = req.params.id;
        const livro = await LivroModel.findByIdAndUpdate(id,req.body, {new:true});
        
        res.status(200).json(livro);
    } catch (error) {
        return res.status(500).send(error.message);   
    }
});

module.exports = app.delete('/livro/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        const livro = await LivroModel.findByIdAndRemove(id);

        res.status(200).json(livro);

    } catch (error) {
        return res.status(500).send(error.message);    
    }
});


