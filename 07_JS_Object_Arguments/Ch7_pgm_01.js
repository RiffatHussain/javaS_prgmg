// Passing a function an object as an argument

var planet1;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};
// 1.
let planet2 = {
    name: 'Earth',
    position: 3,
    type: 'terrestial',
    radius: 6371,
    sizeRank: 5
};

getPlanetInfo = function (planet) {
    return planet.name + "\nplanet number : " + planet.position + "\ntype : " + planet.type + " \nsizeRanking among the solarSystem is : " + planet.sizeRank; 
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2)); // using the function to log the planet2



/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */