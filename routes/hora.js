const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    const horaActual = new Date().toLocaleTimeString();
    res.send(`La hora actual es: ${horaActual}`);
} )

module.exports = router