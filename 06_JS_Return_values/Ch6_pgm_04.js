// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return `The sum of ${number1} and ${number2} is ${total}`; //Updated
};

var sum = add(100, 23); //Updated

console.log(sum);

// 4.
let summ = (num1, num2, num3) => {
	let result = num1 + num2 + num3;
	return result;
}

console.log(summ(10,20,34));

/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */