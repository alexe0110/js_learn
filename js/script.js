"use strict"

let numberOfFilms;

start();

const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false,
};

rememberMyFilms();
detectPersonalLevel();
showMyDB();
writeYourGenres();



function start() {
    numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели ?`, ``);
    while (numberOfFilms == `` || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели ?`, ``);
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt(`Один из последних фильмов?`);
        let ratingFild = +prompt(`Как его оценишь?`);
        if (lastFilm == null || ratingFild == null || ratingFild === ``|| isNaN(ratingFild) || lastFilm.length < 1 || lastFilm.length > 50) {
            i--;
            continue;
        }
        personalMovieDB.movies[lastFilm] = ratingFild;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        document.write(`<h3>Просмотренно мало фильмов ${personalMovieDB.count}</h3>`);
    } else if (personalMovieDB.count > 10) {
        document.write(`<h3>Вы классный зритель ${personalMovieDB.count}</h3>`);
    } else if (personalMovieDB.count > 30) {
        document.write(`<h3>Вы киноман ${personalMovieDB.count}</h3>`);
    } else {
        document.write(`<h3>Вы дэбил ${personalMovieDB.count}</h3>`);
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, ``);
    }
}