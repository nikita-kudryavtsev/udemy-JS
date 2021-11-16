'use strict'; // мы работаем в современном режиме, строгий режим

//УРОК 18 ПРАКТИКА ИСПОЛЬЗОВАНИЯ ФУНКЦИЙ

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


// function writeYourGenres() {
//   const a = prompt(`Ваш любимый жанр под номером ${}`)
//   const b = prompt(`Ваш любимый жанр под номером ${}`)
//   const c = prompt(`Ваш любимый жанр под номером ${}`)
// }

// personalMovieDB.genres = [a, b, c, d]

function rememberMyFilms() {
	for (let i = 0; i < 1; i++) {
		const a = prompt('Один из просмотренных фильмов?', ''),
			    b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотренно довольно мало фильмов!');
	} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
		console.log('Вы классический зритель!');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман!');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) { 
    personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres()
//17 УРОК Методы и свойства у строк и чисел
//Строки
// const str = 'test';
// const arr = [1, 2, 3]

// // console.log(str[2]);
// console.log(arr.length); //свойство

// console.log(str.toUpperCase()); // метод
// console.log(str.toLowerCase());

// const fruit = 'Some fruit'
// console.log(fruit.indexOf('fruit'));

// const logg = 'hello world';

// console.log(logg.slice(6, 11)); //Поддерживает минусы

// console.log(logg.substring(6, 11)); //Не поддерживает
// console.log(logg.substr(6, 5)); //Не поддерживает

// //Числа
// const num = 12.2;
// console.log(Math.round(num)); //Округление

// const test = '12.2px'
// //console.log(parseInt(test)); //Переводит число в другую систему исчисления
// console.log(parseFloat(test)); //Возвращает с десятичными

// УРОК 16 Стрелочные функции
// let num = 20;

// Function Declaration - существует до ее объявления
// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMessage('Hello world');
// console.log(num);

// function calc(a, b) {
//   return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//   let num = 50;
//   return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// //Function expression - создается только после объявления
// //
// const logger = function() {
//   console.log('hello');
// };
// logger();
// // Стрелочные функции

// const calc = (a, b) => {
//   console.log('1');
//   return a + b
// };

// Урок 15 Практика Циклы
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// console.log(personalMovieDB);

// for (let i = 0; i < 1; i++) {
// 	const a = prompt('Один из просмотренных фильмов?', '');
// 	const b = prompt('На сколько оцените его?', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }

// if (personalMovieDB.count < 10) {
// 	console.log('Просмотренно довольно мало фильмов!');
// } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
// 	console.log('Вы классический зритель!');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы киноман!');
// } else {
//     console.log('Произошла ошибка');
//   }

// personalMovieDB.count < 10 ? console.log('Просмотренно мало фильмов'): personalMovieDB.count >=10 && personalMovieDB.count < 30 ? console.log('Классический зритель'): personalMovieDB.count >=30 ? console.log('Киноман') :console.log('Ошибка ввода');

//УРОК 14 ЦИКЛЫ
// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
//     //break;
//     continue;
//   }
//   console.log(i);
// }

// УРОК 13 УСЛОВИЯ
//const num = 50;
// if (num < 49) {
//   console.log('error');
// } else if (num > 100) {
//   console.log('много');
// } else {
//   console.log('ok');
// }

// Тернарный оператор
//num === 50 ? console.log('ok') : console.log('mist');
//унарный и бинарный аргумент

// switch(num) {
//   case 49:
//     console.log('ne verno');
//     break;
//   case 100:
//     console.log('ne verno');
//     break;
//   case 50:
//     console.log('verno');
//     break;
//   default:
//     console.log('не в этот раз');
// }
// switch всегда идет на строгое сравнение

// 12 Урок 1 задание
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцените его?', ''),
// 	c = prompt('Один из просмотренных фильмов?', ''),
// 	d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//git
//git init
//git config --local user.name "Nikita"
//git config --global user.email kudryavtsev.n.s@mail.com
//git add -A
//git status
//git commit -a -m"first commit"
//git log
// git remote add origin https://github.com/nikita-kudryavtsev/udemyjs1.git
// git push -u origin master
//git remote rm origin удалить
// git clone адрес репозитория - клонировать репозиторий на локальный компютер

// git branch -M main
// git push
// git clone https://github. it [folderName]
// git pull

// Оператор !
// const isChecked = false,
// 	isClose = false;

// console.log(isChecked || !isClose);

// Оператор ||
//const isChecked = true,
// 	isClose = false;

// console.log(isChecked || isClose);

// Оператор &&
// const isChecked = true,
// 	isClose = false;

//  console.log(isChecked && isClose);

// Интерполяция
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`Привет, ${user}`)

// alert('')

// const result = confirm('Are u here?');
// console.log(result);

// const answer = prompt('Вам есть 18?', '18')
// console.log(typeof(answer)); // выдает строку

// const answer = +prompt('Вам есть 18?', '18')
// console.log(typeof(answer)); // выдает number

// Задание данных в массив
// const answers = [];

// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Какая Ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

//Все что пишет пользователь передается как строка

//null чего-то не существует
//undefined что-то существует но не имеет значения

/* Типы данных JS
-Простые / num str bool null undef bigint
-Объектные / Массивы функции ОбъектДаты Рег Выражения Ошибки
*/
