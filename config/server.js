const express = require("express");
const dotenv = require('dotenv');
const connectDatabase = require('../database/connect')
//const categoriaController = require('../src/controllers/CategoriaController');


const app = express()
app.use(express.json());

connectDatabase()

dotenv.config();

// app.get('/', (req , res)=>{
//     res.send('<h1> Servidor rodando </h1>')
// })
require('../src/controllers/CategoriaController');


const port = 3000
app .listen( port , ()=>{
    console.log(`servidor rodando na porta ${port}`);
})
