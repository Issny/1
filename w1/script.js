let numberOfFilms = +prompt('Сколько фильмов было просмотрено?');
let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

};
let videoA = prompt('Один из последних просмотренных фильмов?'),
videoB = +prompt('На сколько оцените его?'),
videoC = prompt('Один из последних просмотренных фильмов?'),
videoD = +prompt('На сколько оцените его?');

personalMovieDB.movies[videoA] = videoB;
personalMovieDB.movies[videoC] = videoD;
console.log(personalMovieDB);