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


for (let i = 0; i < 2; i++) {
    let lastFilm = prompt(`Один из последних фильмов?`);
    let ratingFild = prompt(`Как его оценишь?`);
    if (lastFilm == null || ratingFild == null || ratingFild === `` || lastFilm.length < 1 || lastFilm.length > 50) {
        i--;
        continue;
    }
    personalMovieDB.movies[lastFilm] = ratingFild;
}

if (personalMovieDB.count < 10) {
    document.write(`<h3>Просмотренно мало фильмов ${personalMovieDB.count}</h3>`);
} else if (personalMovieDB.count > 10) {
    document.write(`<h3>Вы классный зритель ${personalMovieDB.count}</h3>`);
} else if (personalMovieDB.count > 30) {
    document.write(`<h3>Вы киноман ${personalMovieDB.count}</h3>`);
} else {
    document.write(`<h3>Вы дэбил ${personalMovieDB.count}</h3>`);
}

console.log(personalMovieDB);