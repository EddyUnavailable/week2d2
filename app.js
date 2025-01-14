console.log("Hello world!")

const person = {
    name: "Eddy",
    age: "47",
    favouriteColour: "green",
    FavouritePet: "Rhino"
  };

  console.log(person)
  console.table(person)
  console.log(person.age)

  const car ={
    Make:"Skoda",
    Model:"Octavia",
    Colour:"Grey",
    Doors: "5",
    Fuel: "Diesel",
  }

  console.table(car)

  const book = {
    title:  "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    numberOfPages: "592",
  }

  myBookGenres = mybookinfo.genres

for(let i = 0; i < myBookGenres.length; i++) {
	console.log(myBookGenres[i]);
}
    let myBookGenres = myBookInfo.genres

for(let i = 0; i < myBookGenres.length; i++) {
	console.log(myBookGenres[i]);
}


myBookGenres.forEach(function(genre, index) {
    console.log(genre, index)
})

for (genre of myBookGenres) {
    console.log(genre)
}
const blogPost = {
    title: "My first blog post",
    author: {
      name: "Bob",
      age: 30,
      favouriteColour: "red",
    },
    tags: ["coding", "javascript", "objects", "arrays"],
    content: "This is my blog post about learning objects and arrays.",
  };
  console.log(blogPost.author.name);

  console.log(
    `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
  ); // Output: There are 4 tags for post "My first blog post":
  for (let i = 0; i < blogPost.tags.length; i++) {
    console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
  }

  console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
  for (let tag of blogPost.tags) {
    console.log(tag); // Output: coding, javascript, objects, arrays
  }
