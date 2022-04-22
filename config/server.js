const express = require("express");
const dotenv = require('dotenv');



const app = express()
app.use(express.json());

dotenv.config();

const port = 3000
app .listen( port , ()=>{
    console.log(`servidor rodando na porta ${port}`);
})
