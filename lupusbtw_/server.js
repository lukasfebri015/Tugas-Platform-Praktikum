const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controler/mahasiswaController');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaController);

app.listen(PORT,()=>{
    console.log(`Server is runing on http://localhost:${PORT}`);
});