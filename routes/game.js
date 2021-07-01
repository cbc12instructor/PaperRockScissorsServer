const express = require('express');
const router = express.Router();

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
	let computerChoice = options[Math.floor(Math.random() * options.length)];

	let results = {
		'player': playerChoice,
		'computer': computerChoice,
		'result': 'tie'
	};

	if ( playerChoice == 'paper' ) {
		if ( computerChoice == 'rock' ) {
			results.result = 'win';
		} else if ( computerChoice == 'scissors' ) {
			results.result = 'loss';
		}
	} else if ( playerChoice == 'rock' ) {
		if ( computerChoice == 'scissors' ) {
			results.result = 'win';
		} else if ( computerChoice == 'paper' ) {
			results.result = 'loss';
		}
	} else if ( playerChoice == 'scissors' ) {
		if ( computerChoice == 'paper' ) {
			results.result = 'win';
		} else if ( computerChoice == 'rock' ) {
			results.result = 'loss';
		}
	}

	res.json(results);
}

module.exports = router;