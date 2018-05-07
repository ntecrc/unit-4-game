// javascript for the game
// declaring variables
var wins = 0;
var losses = 0;

var score = 0;

// generating a random number for beginning the game
var random = Math.floor((Math.random()* 100)+ 19);

//generating random numbers for the crystals
var stone1 = Math.floor((Math.random() * 12) + 1);
var stone2 = Math.floor((Math.random() * 12) + 1);
var stone3 = Math.floor((Math.random() * 12) + 1);
var stone4 = Math.floor((Math.random() * 12) + 1);


//updating scores total, wins, and losses
var updatedScore = function() {
	$('#wins').empty();
	$('#wins').append(wins);

	$('#losses').empty();
	$('#losses').append(losses);

	$('.score').empty();
	$('.score').append(score);

}

//when the game restarts it should..
var resetGame = function() {
	score = 0;
	random = Math.floor((Math.random()* 100)+ 19);

	$('.random').empty();
	$('.random').append(random);

	var stone1 = Math.floor((Math.random() * 12) + 1);
	var stone2 = Math.floor((Math.random() * 12) + 1);
	var stone3 = Math.floor((Math.random() * 12) + 1);
	var stone4 = Math.floor((Math.random() * 12) + 1);
	

	updatedScore();

}

//game process 
var gameProcess = function() {
	if(score == random) {
		wins = wins + 1;
		alert("You win!");
		resetGame();
	}
	else if (score > random) {
		losses = losses + 1;
		alert("You Lost!");
		resetGame();
	}
	else {
		updatedScore();
	}

}

// updating results
$('.random').append(random);
$('.score').append(score);


//adding numbers to final scores when crystals are clicked
$(document).ready(function(){
	$('#stone1').click(function(){
 		score = score + stone1;
 		gameProcess();
 	})

 	$('#stone2').click(function(){
 		score = score + stone2;
 		gameProcess();
 	})

 	$('#stone3').click(function(){
 		score = score + stone3;
 		gameProcess();
 	})

 	$('#stone4').click(function(){
 		score = score + stone4;
 		gameProcess();
 	})

});