const express = require('express')
const router = express.Router()
const pool = require('../database')


router.get('/', async (req, res) => {
    const empleado = await pool.query('SELECT * FROM empleado');
    let color
    if(empleado.rol=='Coordinador'){
        color = 'Verde'
    }
    console.log(empleado)
    res.render('links/table',{empleado,color})
})

module.exports = router