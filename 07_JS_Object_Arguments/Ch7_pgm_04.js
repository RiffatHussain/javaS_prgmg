// Moving a point in 2D

var point1;
var point2;
var point3; //Declared the point3 variable
var move;
var showPoint;
var reflectX; // Decalred the reflectX variable
var rotate90; // Declared the rotate90 variable

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};


point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 4, y : -2 });
point3 = move(point2, {x : 10, y : -4});
showPoint(point1);
console.log("Move 4 across and 2 down");
showPoint(point2);
showPoint(point3); //Called the function with the point3 var as argument

// 2.
function reflectX(point) {
    // Destructure the point into x and y coordinates
    const [x, y] = point;
    
    // Return the new point reflected across the x-axis
    return [x, -y];
}
const point = [3,4];
const reflectedPoint = reflectX(point);
console.log(reflectedPoint);

// 3.
function rotate90(point) {
    // Destructure the point into x and y coordinates
    const [x, y] = point;
    
    // Calculate the new coordinates after a 90-degree rotation
    const newX = -y;
    const newY = x;
    
    // Return the new point
    return [newX, newY];
}
let point4 = [0, 0];
const rotatedPoint = rotate90(point4);
console.log(rotatedPoint);


/* Further Adventures
 *
 * 1) Change the amount by which the point is moved
 *    by altering the x and y properties of
 *    the object literal passed to the move function.
 *
 * 2) Write a reflectX function that reflects
 *    a point in the x-axis, returning the new point.
 *
 * 3) How about a rotate90 function that rotates
 *    the point by 90 degrees anticlockwise
 *    around ( 0 , 0 )?
 *
 */