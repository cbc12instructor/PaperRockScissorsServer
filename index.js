const express = require('express');
const app     = express();

// game routes contains all game logic for /paper/rock/scissors 
const gameRoutes = require('./routes/game.js');

app.use('/game', gameRoutes);

app.use( express.static('html') );

app.listen(process.env.PORT || 5000);