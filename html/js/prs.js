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
			};
			xhr.open('GET', `/game/${playerChoice}`);
			xhr.send();
		}
	});
});




