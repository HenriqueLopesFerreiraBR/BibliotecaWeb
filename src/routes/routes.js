const express = require('express');
const router = express.Router();

const { json } = require('express/lib/response');
const app = express()

app.use(express.json())

const CategoriaModel = require('../models/CategoriaModel');

// router.get('/',(req, res)=>{
//     res.render("index")
// })

router.get('/', async (req , res)=>{
    try {
        const categoria = await CategoriaModel.find({});
            
        //res.status(200).json(categoria)
        res.render("index", {categoria});

    } catch (error) {
        return res.status(500).send(error.message)
    }
});

module.exports = router