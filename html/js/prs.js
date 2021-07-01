// event listener on the buttons to let us know what the player picked
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('gameButtons').addEventListener('click', function(event) {
		if ( event.target.nodeName == 'BUTTON' ) {
			// get the id of the button that was picked
			let playerChoice = event.target.id; 
			console.log(playerChoice);

			// send player choice to server
			// make a request to our server
			let xhr = new XMLHttpRequest();
			xhr.onload = function() {
				// update page elements with game results
				let results = JSON.parse(this.responseText);

				document.getElementById('gameStatus').innerHTML = 'You ' + results.result;
				document.getElementById('gameContent').innerHTML = `You picked <strong>${results.player}</strong>, the computer picked <strong>${results.computer}</strong>`;
				/*
				<ul id="gameHistoryList">
				<li>You won: paper beats rock</li>
				*/
				document.getElementById('gameHistoryList').innerHTML = `<li>You ${results.result}: ${results.player} // ${results.computer}</li>` + 
					document.getElementById('gameHistoryList').innerHTML;


			};
			xhr.open('GET', `/game/${playerChoice}`);
			xhr.send();

			document.getElementById('playerChoice').innerText = playerChoice;
		}
	});
});




