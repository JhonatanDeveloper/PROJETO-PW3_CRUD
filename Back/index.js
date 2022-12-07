const express = require('express');

const mangasController = require('./controller/mangasController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', mangasController);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});