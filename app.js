//callback
const express = require('express');
const app = express();
const PORT = 3000;
const horaRoute = require('./routes/hora');
const saludo = require('./routes/saludo');


app.get('/saludo', saludo) //un modo de modularizar

app.use('/hora', horaRoute); //otro modo de modularizar

app.listen(PORT, () =>{
    console.log(`servidor levantado en el puerto ${PORT}`)
})

