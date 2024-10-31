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
// app.get('/productos/:productosId',(req, res)=>{
//     const { productosId } = req.params
//     console.log(req.params)
//     res.send(`el producto elegido es el del id ${productosId}`)
// })

// //query
// app.get('/usuarios',(req, res)=>{
//     const { nombreUsuario } = req.query
//     console.log(req.query)
//     res.send(`el usuario es ${nombreUsuario}`)
// })

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

// Ejercicio 1: Crea una ruta GET llamada /usuario/:id que reciba un parámetro de ruta id y responda con un mensaje que incluya ese ID. Agrega un query opcional detalles=true para enviar información adicional sobre el usuario.
app.get('/usuario/:id', (req, res)=> {
    const { id } = req.params
    const { detalles } = req.query 
    console.log(typeof detalles)
    res.send(detalles === "true"?"el id es " + id : "detalles es falso")
//http://localhost:3000/usuario/12/?detalles=true
//http://localhost:3000/usuario/12/?detalles=false
})

// Ejercicio 2: Implementa una ruta GET llamada /productos/:categoria que reciba una categoría como parámetro de ruta y responda con los productos de esa categoría. Agrega un query opcional orden=ascendente o orden=descendente para ordenar los productos.
app.get('/productos/:categoria', (req, res)=> {
    const { categoria } = req.params
    const { orden } = req.query 
    res.send("el producto es " + categoria + " y el orden es " + orden )
//http://localhost:3000/productos/computadora/?orden=descendente
})

// Ejercicio 3: Define una ruta GET llamada /eventos/:anio que reciba el anio como parámetro y un query opcional mes para filtrar los eventos por mes. Si no se proporciona el mes, devuelve un mensaje que diga "no se envio el filtro"

// Ejercicio 4: Crea una ruta GET llamada /reportes/:seccion que reciba una seccion como parámetro y un query opcional limite para mostrar una cantidad limitada de reportes en esa sección. Si no se proporciona limite, da como resultado el numero 10.

app.get('/reportes/:seccion', (req, res)=> {
    const { seccion } = req.params
    const { limite } = req.query 
    // const limite = req.query.limite || 10 //opcion 2
    if (limite === undefined){
        res.send("el reporte es " + seccion + " el limite es 10" )
    }else{
        res.send("el reporte es " + seccion + " el limite es " + limite )
    }
    
//http://localhost:3000/reportes/politica/?limite=5
// http://localhost:3000/reportes/politica
})



// Ejercicio 5: Haz una ruta GET llamada /articulos/:autor que reciba el autor como parámetro y un query opcional tema para filtrar los artículos por tema. 






app.listen(PORT, () =>{
    console.log(`servidor levantado en el puerto ${PORT}`)
})

