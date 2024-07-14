// Displaying a player's location

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[3] + " is in " + playerPlace); //Updated 
    // 1. As it was set to 0 , It gets the first index of the character of the String.
    // 2. As it was set to 1 , It gets the second index of the character of the string.
    // 3. As it was set to 3 , It gets the fourth index of the charcter of the String, But it gives the "undefined" output coz it doesn,t have the fourth string to display, so it shows 'Undefined'.
};

showPlayerPlace("Kandra", "The Dungeon of Doom");
showPlayerPlace("Dax", "The Old Library");



/* Further Adventures
 *
 * 1) Inside the console.log brackets,
 *    change playerName to playerName[0]
 *    Run the program.
 *    What effect do the brackets have?
 *
 * 2) Change the number in the brackets to 1.
 *
 * 3) What happens when you change the
 *    number to 3? Why?
 *
 */