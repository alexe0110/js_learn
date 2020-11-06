"use strict"

let numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели ?`, `0`);
console.log(numberOfFilms);

const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "privat": false,
};

let lastFilm = prompt(`Один из последних фильмов?`);
let ratingFild = prompt(`Как его оценишь?`);
personalMovieDB.movies[lastFilm]=ratingFild;

let lastFilm2 = prompt(`Один из последних фильмов?`);
let ratingFild2 = prompt(`Как его оценишь?`);
personalMovieDB.movies[lastFilm2]=ratingFild2;

console.log(personalMovieDB);