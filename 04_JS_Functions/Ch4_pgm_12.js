// Using functions to add and display tax

var sale1;
var sale2;
var sale3;
var sale4; //declared sale4 variable
var sale;
var calculateTax;
var displaySale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 220, taxRate: 30}; // Fourth sale object Added

// calculateTax = function () {
// 	sale.tax = sale.price * sale.taxRate / 100;
// 	sale.total = sale.price + sale.tax;
// };

// displaySale = function () {
//   console.log("price = $" + sale.price);
//   console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
//   console.log("total cost = $" + sale.total);
// };

// sale = sale1;
// calculateTax();
// displaySale();

// sale = sale2;
// calculateTax();
// displaySale();

// sale = sale3;
// calculateTax();
// displaySale();

// creating a function that do both the calculations 

function calculateTaxAndDisplaySale() {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;

    return  "The Details of the Sale is: \n"+ "price = $" + sale.price + ",\n" + "tax @ " + sale.taxRate + "% = $" + sale.tax + ",\n" + "total cost = $" + sale.total + ".";
}

sale = sale4;
let Output = calculateTaxAndDisplaySale();
console.log(Output);

/* Further Adventures
 *
 * 1) Add a fourth sale object.
 *
 * 2) Update the code so that tax is calculated
 *    and the new sale is displayed.
 *
 * Having two separate functions to calculate tax
 * and display sales is good, each has a specific purpose.
 * Having to call both functions
 * for each sale object is not so good.
 *
 * 3) Can you change the code so that you don't
 *    have to call both functions for every sale?
 *
 */