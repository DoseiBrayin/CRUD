
const express = require('express')
const router = express.Router()
const pool = require('../database')

router.get('/add', (req, res) => {
    res.render('links/add')
})

router.post('/add', async(req, res) => {
    const empleado = {
        "nombre": req.body.nombre,
        "rol": req.body.rol,
        "correo": req.body.correo,
        "cedula": req.body.cedula,
        "dir": req.body.dir,
        "celular":req.body.cel
    }
    await pool.query('INSERT INTO empleado set ?', [empleado]);
    res.redirect('/')
})

router.get('/delete/:CEDULA', async (req, res) => {
    const CEDULA = req.params;
    console.log(req.params)
    sql ="DELETE FROM empleado WHERE `empleado`.`CEDULA` = " + CEDULA.CEDULA
    await pool.query(sql);
    res.redirect('/');
});

module.exports = router