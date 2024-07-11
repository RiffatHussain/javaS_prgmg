// Adding tax to find the total cost

var sale1;
var sale2;
var sale3;
var sale4; //Declared a variable

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 290, taxRate: 30 }; //Assigned a Object to the variable

sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;
sale4.tax = sale4.price * sale4.taxRate / 100; //Operation added

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;
sale4.total = sale4.price + sale4.tax; // Addition Operation Added

console.log("The First sale Details : ");
console.log("price = $" + sale1.price);
console.log("tax @ " + sale1.taxRate + "% = $" + sale1.tax);
console.log("total cost = $" + sale1.total);
console.log("----------------------------------------------");

console.log("The second sale Details : ");
console.log("price = $" + sale2.price);
console.log("tax @ " + sale2.taxRate + "% = $" + sale2.tax);
console.log("total cost = $" + sale2.total);
console.log("----------------------------------------------");

console.log("The Third sale Details : ");
console.log("price = $" + sale3.price);
console.log("tax @ " + sale3.taxRate + "% = $" + sale3.tax);
console.log("total cost = $" + sale3.total);
console.log("----------------------------------------------");

console.log("The fourth sale Details : ");
console.log("price = $" + sale4.price);
console.log("tax @ " + sale4.taxRate + "% = $" + sale4.tax);
console.log("total cost = $" + sale4.total); // Logged the fourth sale to the console.


/* Further Adventures
 *
 * 1) Add the details for a fourth sale.
 *
 * 2) Log the fourth sale to the console.
 *    Use the same format as the others.
 *
 * 3) Add code to separate out the different
 *    sales on the console.
 *
 */