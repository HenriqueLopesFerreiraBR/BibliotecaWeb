const express = require("express");
const dotenv = require('dotenv');
const connectDatabase = require('../database/connect')
const router = require('../src/routes/routes')
const categoriaController = require('../src/controllers/CategoriaController');
const livroController = require('../src/controllers/LivroController');


const app = express()

//Configuração do EJS ou qualquer outra view engine
app.set("view engine", "ejs");
app.set("views","src/views");

app.use(router);

//chamado todos os exports dos controllers
app.use(categoriaController);
app.use(livroController);

app.use(express.json());

connectDatabase()

dotenv.config();


const port = 3000
app .listen( port , ()=>{
    console.log(`servidor rodando na porta ${port}`);
})
