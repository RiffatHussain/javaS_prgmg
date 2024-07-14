// Displaying a player's health via object properties

var player1;
var player2;
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth, playerHealthMultiplier) { //Third parameter added
    playerHealthMultiplier *= playerHealth; // Updated as it was first multiplied with playerHealthMultiplier
    console.log(playerName + " has health " + playerHealth + '\nIt Multiplies with health Multiplier and plus Ultra : ' + playerHealthMultiplier);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplier : 2 // Added the property
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplier : 5 // Added the property
};

showPlayerHealth(player1.name, player1.health, player1.healthMultiplier); //Added the third argument
showPlayerHealth(player2.name, player2.health, player2.healthMultiplier); //Added the third argument



/* Further Adventures
 *
 * 1) Add a new property to the player objects
 *    called healthMultiplier.
 *
 * 2) Add a third parameter to the definition
 *    of the showPlayerHealth function
 *    called playerHealthMultiplier
 *
 * 3) Update the function so that the health
 *    displayed is first multiplied by
 *    the health multiplier.
 *
 * 4) Add the player's healthMultiplier property
 *    as a third argument to the two calls
 *    to the showPlayerHealth function.
 *
 */