
const express = require('express')
const router = express.Router()
const pool = require('../database')

router.get('/add', (req, res) => {
    res.render('links/add')
})

router.post('/add', async(req, res) => {
    let color = ''
    if(req.body.rol=="Coordinador"){
        color='red'
    }else if(req.body.rol=="Jefe de area"){
        color='blue'
    }
    else if(req.body.rol=="Impulsador"){
        color='violet'
    }else{
        color='green'
    }
    const empleado = {
        "nombre": req.body.nombre,
        "rol": req.body.rol,
        "correo": req.body.correo,
        "cedula": req.body.cedula,
        "dir": req.body.dir,
        "celular":req.body.cel
    }
    await pool.query('INSERT INTO empleado set ?', [empleado]);
    res.render('links/add')
})

module.exports = router