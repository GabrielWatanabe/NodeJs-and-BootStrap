const express = require('express');
const db = require('../connectionDatabase');
const routes = express.Router();
const  knex = require('knex')(db);
const path = __dirname + '/views/'

routes.get('/', (req, res) => {
    res.sendFile(path + 'index.htm')
})

routes.get('/veiculo', (req, res, next) => {
    
    knex('veiculo')
    .then((dados) => {
        res.json({ values: dados})
    }, next)

    
});

routes.get('/veiculo/:id', (req, res, next) => {

    knex('veiculo').where('nm_veiculo', 'like', `%${req.params.id}%`)
    .then((dados) => {
        res.json({ values: dados})
    }, next)

    
});

routes.post('/create', (req, res, next) => {

    knex('veiculo')
    .insert(req.body)
    .then((dados) => {
        res.json({values: dados})
    }, next)

    
});

routes.put('/veiculo/:id', (req, res, next) => {
    const { id } = req.params;
    knex('veiculo')
    .where({ id })
    .update(req.body)
    .then((dados) => {
        res.json({ values: dados})
    }, next)

    
});

routes.delete('/veiculo/:id', (req, res, next) => {
    const { id } = req.params;
 
    knex('veiculo')
    .where({ id })
    .delete()
    .then((dados) => {
        res.json({message: "ok"})
    }, next)

    
});

module.exports = routes;