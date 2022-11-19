
const express = require('express')
const router = express.Router()
const pool = require('../database')

router.get('/add', (req, res) => {
    res.render('links/add')
})

router.post('/add', (req, res) => {
    let color = ''
    if(req.body.rol=="Coordinador"){
        color='red'
    }else if(req.req.body.rol=="Jefe de area"){
        color='blue'
    }
    else if(req.body.rol=="Impulsador"){
        color='violet'
    }else{
        color='green'
    }
    const empleado = {
        "nombre": req.body.nombre,
        "correo": req.body.correo,
        "cedula": req.body.cedula,
        "dir": req.body.dir,
        "rol": req.body.rol,
        "color":color
    }
    
    res.send('recivido')
})

module.exports = router