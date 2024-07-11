// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

// 1.

var movie2;

movie2 = {
  title: "Interstellar",
  actors: "Matthew, Jessica",
  directors: "Christopher Nolan"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

// 2.

var blogpost;

blogpost = {
  name : 'Riffat',
  role : 'Full Stack Developer',
  age : 21
};

// 3.
console.log("Name - " + blogpost.name);
console.log("ROle - " + blogpost.role);
console.log("Age - " + blogpost.age);

/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */