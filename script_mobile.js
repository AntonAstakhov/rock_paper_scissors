var arg = false;
// document.onkeydown = function checkKeycode(event) {
// 	var keycode;
// 	if (!event) var event = window.event;
// 	if (event.keyCode) keycode = event.keyCode;
// 	else if(event.which) keycode = event.which;
// 	if (keycode === 32) {
// 		arg = true;
// 		play(arg);
// 	}
// }

if (touchstart === true) {
	arg = true;
	play(arg);
};



var next = true;
var compscore = 0;
var userscore = 0;

var play = function (st) {
	if (st == false) {
		return;
	}
	arg = false;
	while (next === true) {
	var userChoice;
		do {
			userChoice = prompt("Do you choose rock, paper or scissors?");
			if (userChoice === "") break;
			userChoice = userChoice.toLowerCase();
		}
		while (!(userChoice === "paper" || userChoice === "rock" || userChoice === "scissors"));

		var computerChoice = Math.random();
		if (computerChoice < 0.34) {
			computerChoice = "rock";
		}
		else if(computerChoice <= 0.67) {
			computerChoice = "paper";
		}
		else {
			computerChoice = "scissors";
		}

		var compare = function (choice1, choice2) {
		    if (choice1 === choice2) {
		        return "The result is a tie";
		    }
		    else if (choice1 === "rock") {
		        if (choice2 === "scissors") {
		        	userscore++;
		            return "Rock wins";
		        }
		        else {
		        	compscore++;
		            return "Paper wins";
		        }
		    }
		    else if (choice1 === "paper") {
		        if (choice2 === "rock") {
		        	userscore++;
		            return "Paper wins";
		        }
		        else {
		        	compscore++;
		            return "Scissors wins";
		        }
		    }
		    else if (choice1 === "scissors") {
		        if (choice2 === "paper") {
		        	userscore++;
		            return "Scissors wins";
		        }
		        else {
		        	compscore++;
		            return "Rock wins";
		        }
		    }
		    else {
		    	return "You made a wrong choice";
		    }
		}
			
		if (confirm("Your choice: " + userChoice + "\n" + "Computer choice: " + computerChoice + "\n\n" + compare(userChoice, computerChoice) + "!\n\n" + "Computer score: " + compscore + "\nYour score: " + userscore + "\n\nDo you wanna play one more time?") === false) {
			checkKeycode(event);
		}
	}
}