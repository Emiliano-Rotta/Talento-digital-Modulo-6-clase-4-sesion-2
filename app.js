//callback
const express = require('express');
const app = express();
const PORT = 3000;
const horaRoute = require('./routes/hora');
const saludo = require('./routes/saludo');


// app.get('/saludo', saludo) //un modo de modularizar

// app.use('/hora', horaRoute); //otro modo de modularizar

//Params y Query
//params
app.get('/productos/:productosId',(req, res)=>{
    const { productosId } = req.params
    console.log(req.params)
    res.send(`el producto elegido es el del id ${productosId}`)
})

//query
app.get('/usuarios',(req, res)=>{
    const { nombreUsuario } = req.query
    console.log(req.query)
    res.send(`el usuario es ${nombreUsuario}`)
})

//params + query

app.get('/curso/:nombre',(req, res)=>{
    const { nombre } = req.params
    console.log(req.params)
    const { profesor, ayudante } = req.query
    console.log(req.query)
    res.send(`El nombre del curso es: ${nombre}, el profesor es ${profesor} y el ayudante es ${ayudante}`)
//http://localhost:3000/curso/javascript?profesor=Emiliano&ayudante=Rodrigo
})

//pasar por params el lugar
// app.get('/:lugar', (req, res)=> {
//     // var lugar = req.params.lugar  es igual a la linea de abajo
//     var { lugar } = req.params
//     res.send("el lugar donde estan es " + lugar)
//    //http://localhost:3000/Santiago
// })

//pasar por query el lugar
app.get('/', (req, res)=> {
    // var lugar = req.query.lugar  //es igual a la linea de abajo
    var { lugar } = req.query //la palabra lugar es la palabra clave que va entre ? y el =
    res.send("el lugar donde estan es " + lugar)
// //http://localhost:3000/?lugar=Santiago
})

app.listen(PORT, () =>{
    console.log(`servidor levantado en el puerto ${PORT}`)
})

