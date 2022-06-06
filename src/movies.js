// The `movies` array from the file `src/data.js`.
const movies = require('./data.js');
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  const allDirectors = arr.map((movie) => {
    return movie.director;
  });
  return allDirectors;
}

// console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// ** I would insted "return new Set(allDirectors)" in the function || but it's breaking lab solution tab **

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenMovies = arr
    .filter((movie) => {
      return movie.director.includes('Steven Spielberg');
    })
    .filter((movie) => {
      return movie.genre.includes('Drama');
    });
  return stevenMovies.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const scoresTotal = arr.reduce(
    (previousElement, currentElement) =>
      previousElement + currentElement.score / arr.length,
    0
  );
  return Number(scoresTotal.toFixed(2));
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMoviesScore = arr
    .filter((movie) => {
      return movie.genre.includes('Drama');
    })
    .reduce(
      (prevElement, currentElement) =>
        prevElement + currentElement.score / arr.length,
      0
    );
  return Number(dramaMoviesScore.toFixed(2));
}
// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const sortedYears = arr.sort((a, b) => a.year - b.year);
  const sortedYearsAlp = sortedYears
    .map((currentElement) => currentElement)
    .sort((a, b) => a.title - b.title);
  return sortedYearsAlp;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const sortedAlph = arr
    .map((currentElement) => currentElement)
    .sort(function (a, b) {
      let titleA = a.title.toLowerCase();
      let titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    })
    .filter((currentElement) => {
      return currentElement.title;
    });
  return sortedAlph
    .map((currentElement) => {
      return currentElement.title;
    })
    .slice(0, 20);
}

console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
