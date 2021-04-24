const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/', (req,res) => {
    mysqlConnection.query('SELECT id,name FROM category', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }
        else {
            res.json({
                error: 'Error de conexion'
            })
        }
    })
})

router.get('/category/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM category WHERE id = ?', [id], (err, rows) => {
        if (!err) {
            res.json(rows);
        }
        else {
            res.json({
                error: 'Error de conexion'
            })
        }
    })
})


module.exports = router;