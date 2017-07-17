$(document).ready(function () {

	// Variables
  	var targetNumber= getRandomArbitrary(19,120);
		var counter= 0;
		var increment1= getRandomArbitrary(1,12);
		var increment2= getRandomArbitrary(1,12);
		var increment3= getRandomArbitrary(1,12);
		var increment4= getRandomArbitrary(1,12);
		var numberArray= [];
		var win= 0;
		var lose= 0;

		// Function to generate random numbers
		function getRandomArbitrary(min,max){
			return Math.floor(Math.random()* (max-min +1) + min);
		}

		// This puts number to guess on browser page.
		$("#number-to-guess").text("NUMBER TO GUESS: " + targetNumber);

		// Now, once we click on image the following will generate a random number that changes with each game.

		$(".crystal-image").on("click", function() {
			

			if($(event.target).attr("id")=="imageCrystal1"){
			counter+=increment1;
		}
			if($(event.target).attr("id")=="imageCrystal2"){
			counter+=increment2;
		}
			if($(event.target).attr("id")=="imageCrystal3"){
			counter+=increment3;
		}
			if($(event.target).attr("id")=="imageCrystal4"){
			counter+=increment4;
		}

		// As the images are clicked, the score, and if each game is a win/lose appears on the page
   			
   		$("#score").text("SCORE: " + counter);
   		$("#win").text("WINS: "  + win);
   		$("#lose").text("LOSSES: " + lose);

   		if (counter=== targetNumber){
   		 	alert("You win!");
   		 	win++;
   		 	reset();
   		}

   		 if (counter>= targetNumber){
   		 	alert("Sorry, you lose! Try again.")
   		 	lose++;
   		 	reset();
   		}
   	
   		// This code resets the game.	
   		function reset(){
	  	counter =0;
	  	targetNumber =getRandomArbitrary(19,120);
	  	var increment1 = getRandomArbitrary(1,12);
		var increment2 = getRandomArbitrary(1,12);
		var increment3 = getRandomArbitrary(1,12);
		var increment4 = getRandomArbitrary(1,12);
		var numberArray = [];
		var win= 0;
		var lose= 0;
  		alert("PLAY AGAIN?");
  		$("#score").text("SCORE: " + counter);
  		$("#number-to-guess").text("NUMBER TO GUESS: "+ targetNumber);
  		$("#win").text("WINS: "  + win);
  		$("#lose").text("LOSSES: " + lose);
  		}
   	//Wins and losses disappear after you click ok to play again but it does not erase/reset the number of wins/losses. They show up once you start the next game.
   
 	});	
	





