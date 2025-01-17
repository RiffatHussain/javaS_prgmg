// Using the return value as an argument

var getHelloTo;

getHelloTo = function (name) {
    var template = 'Hello to {{name}}'; // Updated
    template = template.replace("{{name}}", name);
    // return "Hello to " + name;
    return template; // A function accepts only first occurence of the return (i.e it only have one return) 
};

console.log(getHelloTo("Kandra"));
console.log(getHelloTo("Dax"));                                         



/* Further Adventures
 *
 * The JavaScript replace function will
 * replace one string with another.
 * e.g. "Hello Bob".replace("Bob", "Babs");
 * returns the string "Hello Babs"
 *
 * 1) Declare a variable called template
 *    in the function body of getHelloTo.
 *    i.e. var template;
 *
 * 2) Assign it the value "Hello to {{name}}"
 *
 * 3) Replace the {{name}} placeholder
 *    with the value passed in as name. i.e.
 *    template = template.replace("{{name}}", name);
 *
 * 4) Return template from the function.
 *    i.e. return template;
 *
 * 5) Run the function.
 *    Does it still work?
 *
 */