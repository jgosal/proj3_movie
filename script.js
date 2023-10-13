// Append the text to be logged to the console output element
document.write = function(text) {
    const consoleOutputElement = document.querySelector("#console-output");
    consoleOutputElement.innerHTML += text + "<br>";
}

// Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

// Create an array to store all movies
let allMovies = [];

// Add a movie object to the allMovies array
let addMovie = () => {
    const title = prompt("Enter the title of the movie:");
    const rating = parseFloat(prompt("Enter the rating of the movie (out of 5):"));
    const haveWatched = confirm("Have you watched this movie?");
    const movie = new Movie(title, rating, haveWatched);
    allMovies.push(movie);
    document.write("A new movie is added");
    document.write("---------------- <br>");
}

// Log all movies to the console and display them on the web page
let printMovies = () => {
    document.write("Printing all movies....");
    const movieList = document.querySelector('.movie-list');
    movieList.innerHTML = '';
    for (const movie of allMovies) {
        document.write(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched);
        const movieElement = createMovieElement(movie);
        movieList.appendChild(movieElement);
    }
    document.write("You have " + allMovies.length + " movies in total");
    document.write("---------------- <br>");
}


// Display only the movies that have a rating higher than the specified rating
let highRatings = () => {
    const rating = parseFloat(prompt("Enter the minimum rating:"));
    document.write("Printing movies that have a rating higher than " + rating);
    const hRMovies = allMovies.filter(movie => movie.rating > rating);
    const movieList = document.querySelector('.movie-list');
    movieList.innerHTML = '';
    for (const movie of hRMovies) {
        document.write(movie.title + " has a rating of " + movie.rating);
        const movieElement = createMovieElement(movie);
        movieList.appendChild(movieElement);
    }
    document.write("In total, there are " + hRMovies.length + " matches");
}

// Toggle the 'haveWatched' property of the specified movie 
let changeWatched = () => {
    const title = prompt("Enter the title of the movie:");
    document.write("Changing the status of the movie...");
    const movie = allMovies.find(movie => movie.title === title);
    if (movie) {
        movie.haveWatched = !movie.haveWatched;
        document.write("The status of the movie has been changed");
        document.write("---------------- <br>");
    } else {
        document.write("The movie was not found");
        document.write("---------------- <br>");
    }
}

// Create a movie element with the specified movie object
let createMovieElement = (movie) => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const movieImage = document.createElement('img');
    movieImage.src = 'https://via.placeholder.com/200x300';
    movieElement.appendChild(movieImage);

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.title;
    movieElement.appendChild(movieTitle);

    const movieRating = document.createElement('div');
    movieRating.classList.add('rating');

    const movieRatingSpan = document.createElement('span');
    movieRatingSpan.textContent = movie.rating;
    movieRating.appendChild(movieRatingSpan);

    const movieRatingImage = document.createElement('img');
    movieRatingImage.src = 'https://via.placeholder.com/30x30';
    movieRating.appendChild(movieRatingImage);

    const movieWatched = document.createElement('p');
    movieWatched.textContent = movie.haveWatched ? "Watched" : "Not watched";
    movieElement.appendChild(movieWatched);

    const movieDetails = document.createElement('p');
    movieDetails.textContent = `Rating: ${movie.rating} / 5`;
    movieElement.appendChild(movieDetails);

    return movieElement;
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);
