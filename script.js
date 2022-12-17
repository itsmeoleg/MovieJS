
const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Останій переглянутий фільм?', ''),
      b = prompt('Ваша оцінка?', ''),
      c = prompt('Останій переглянутий фільм?', ''),
      d = prompt('Ваша оцінка?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);