// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

// 2.
let showLarger = function (num1, num2) {
    let smaller = Math.min(num1, num2);
    let larger = Math.max(num1, num2);

    console.log(larger + " is greater than " + smaller);
}

// 3. 
let showSmallest = function (num1, num2, num3) {
    let smallest = Math.min(num1, num2, num3);

    console.log(smallest + " is the smallest Number.");
}
showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(5,5); // Different arguments

showLarger(25,60);
showSmallest(10,80,45);



/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */