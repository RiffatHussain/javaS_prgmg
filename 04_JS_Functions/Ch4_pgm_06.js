// Calling the sayHello function three times

var sayHello;

sayHello = function () {
	console.log("Hello \nWorld!"); //Updated
};

sayHello();
sayHello();
sayHello();

// 3.
function Display() {
	let name = "Hello World!";
	for (let i = 0; i <name.length; i++) {
		console.log(name.charAt(i));
	}
}
Display();
/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */