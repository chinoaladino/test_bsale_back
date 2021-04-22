const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/product', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err)
        }
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM product WHERE id = ?', [id], (err, rows) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err)
        }
    })
})

router.get('/product/category/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM product WHERE category = ?', [id], (err, rows) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err)
        }
    })
})





module.exports = router;