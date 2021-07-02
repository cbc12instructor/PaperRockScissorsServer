const express = require('express');
const router = express.Router();

const PaperRockScissors = require('PaperRockScissorsGame');

const options = ['paper', 'rock', 'scissors'];

// return JSON object = { 'result': 'won/lost/tie', player: 'paper', 'computer': 'rock' }

// player choice is determined by the URL route
router.get('/paper', paperRockScissorsChoice);
router.get('/rock', paperRockScissorsChoice);
router.get('/scissors', paperRockScissorsChoice);

// gets a computer choice
function paperRockScissorsChoice(req, res) {
	console.log(req.url);
	let playerChoice = req.url.split('/')[1];

	let game = new PaperRockScissors();
	
	res.json( game.game(playerChoice) );

}

module.exports = router;