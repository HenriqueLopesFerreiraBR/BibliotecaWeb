const express = require('express');
const app = express()

//const CategoriaModel = require('../models/CategoriaModel');

app.get('/', (req , res)=>{
    res.send('<h1> Servidor rodando </h1>')
})
