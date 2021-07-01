const express = require('express');
const app     = express();

const gameRoutes = require('./routes/game.js');

app.use('/game', gameRoutes);

app.use( express.static('html') );

app.listen(80);