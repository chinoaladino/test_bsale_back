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
            res.json({
                error: 'Error de conexion'
            })
        }
    })
})

router.get('/product/category/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM product WHERE category = ?', [id], (err, rows) => {
        if (!err) {
            if (rows != 0) {
                res.json(rows);
            } else {
                res.json({
                    error: 'no existen registros con esta categoria'
                })
            }
        }
        else {
            res.json({
                error: 'Error de conexion'
            })
        }
    })
})

router.get('/product/byName/:name', (req, res) => {
    const { name } = req.params;
    if (name != '') {
        mysqlConnection.query(`SELECT name,url_image,price,discount,category FROM product WHERE name LIKE ?`, '%' + name + '%', (err, rows) => {
            if (!err) {
                if (rows != 0) {
                    res.json(rows);  
                } else {
                    res.json({
                        error: 'no hay registros con este nombre'
                    });
                }
            }
            else {
                res.json({
                    error: 'Error de conexion'
                })
            }
        })
    } else {
        res.json({
            error: 'parametro vacio'
        });
    }
})

module.exports = router;