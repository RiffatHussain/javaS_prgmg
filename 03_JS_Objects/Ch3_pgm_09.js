// Concatenating string properties

var book1;
var book2;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman"
};

console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);

// 1.
book3 = {
	title : "The Song of Ice and Fire",
	author : "George. R.R Martin"
};

// 2.
console.log(book3);

// 3.
book3.published = 1990;

// 4.
console.log(book3.published);

/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */