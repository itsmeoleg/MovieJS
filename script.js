"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Останій переглянутий фільм?', ''),
              b = prompt('Ваша оцінка?');
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;  
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }     
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Переглянуто достатньо мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Ви класичний глядач');
    } else if (personalMovieDB.count > 30) {
        console.log('Ви кіноман');
    } else {
        console.log('Виникла помилка');
    }
}

detectPersonalLevel();



console.log(personalMovieDB);













