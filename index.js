const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//conectar mongo
mongoose.connect('mongodb://localhost/restapi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a la base de datos MongoDB'))
  .catch(err => console.error('Error al conectar a la base de datos MongoDB:', err));

//crear el servidor
const app = express();

//habilitar bodyparser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//rutas de la app
app.use('/', routes());

app.listen(5000);