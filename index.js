const express = require('express');

const app = express();
app.use(express.json())
app.use(express.static(__dirname + '/src'));
app.use('/', require('./src/routes'));
app.listen(3001);