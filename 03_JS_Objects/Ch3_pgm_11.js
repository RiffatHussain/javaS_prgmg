// Using a property in a calculation

var player1;

player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

// 1.
player1.score += 10;

// 2.
var player2;

player2 = {
	name : "Zoro",
	score : 20
};

player2.score += 30;

// 3.

let sum = player1.score + player2.score;

console.log("The " + player1.name + " & " + player2.name + " has scored around " + sum + " scores.");
console.log(player1.name + " has scored " + player1.score);
console.log(player2.name + " has scored " + player2.score);

/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */