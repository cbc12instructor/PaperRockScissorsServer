const express = require('express');
const app     = express();

//const PaperRockScissors = require('paperrockscissorsgame');
//let game = new PaperRockScissors();

// game routes contains all game logic for /paper/rock/scissors 
const gameRoutes = require('./routes/game.js');
app.use('/game', gameRoutes);

// app.get('/game/paper', function(req, res) {
// 	res.json(game.game('paper'));
// });	
// app.get('/game/rock', function(req, res) {
// 	res.json(game.game('rock'));
// });	
// app.get('/game/scissors', function(req, res) {
// 	res.json(game.game('scissors'));
// });	

app.use( express.static('html') );

app.listen(process.env.PORT || 5000);