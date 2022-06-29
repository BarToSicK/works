"use strict";

 const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMoviesDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
    
        while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN
        (personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?','');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
      }
    },
    detectPersonalLevel: function() {
        if (personalMoviesDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов");
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            console.log("Классический зритель");
        } else if (personalMoviesDB.count >= 30) {
            console.log("Киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMoviesDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMoviesDB.privat) {
            personalMoviesDB.privat = false;
        } else {
            personalMoviesDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) { //Изменение цикла с 3х до 1го повторения
            // let gener = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (gener === '' || gener == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMoviesDB.genres[i - 1] = gener; 
            // }

            let genres = prompt(`Введите ваши любтмые жанры через запятую`).toLowerCase();

            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMoviesDB.genres = genres.split(', ');
                personalMoviesDB.genres.sort(); 
            }
        }

        personalMoviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`); 
        });
    }
 };