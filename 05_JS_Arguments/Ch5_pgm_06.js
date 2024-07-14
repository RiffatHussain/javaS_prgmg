// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);

// 1.
showSum(56, 74);
 
// 2.
let showProduct = (num1, num2) => {
	product = num1 * num2;
	console.log('The Product of the two Numbers is: ' + product);
};

showProduct(5,10);

// 3.
let output = (num1, num2, num3) => {
	result = num1 * num2 * num3;
	console.log('The product of the Numbers : ' + result);
};

output(2,4,6);

// 4.
let showDifference = (num1,num2) => {
	result = num1 - num2;
	console.log('The difference of the Numbers is : ' + result);
};

showDifference(10,5);

// 5.
let showQuotient = (num1,num2) => {
	result = num1 / num2;
	console.log('The Division of the two Numbers are : ' + result);
}

showQuotient(30,5);

/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */