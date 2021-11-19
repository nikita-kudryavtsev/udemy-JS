'use strict'; // мы работаем в современном режиме, строгий режим


//УРОК 26 ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ 
// ДТ - возможность одного типа данных превращаться в другой

//To string 

//1) 
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));
//2) console
console.log(typeof(5 + '')); 

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// to number

//1) 
console.log(typeof(Number('4')));

//2) унарный плюс
console.log(typeof(+'5'));

//3) 
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// to boolean 

// 0, '', null, undefined, NaN; - false 

// 1)
let switcher = null;

if (switcher) {
	console.log('Working...');
}

switcher = 1;

if (switcher) {
	console.log('Working...');
}

// 2) 
console.log(typeof(Boolean('4')));

//3
console.log(typeof(!!'444'));




//УРОК 24 ПРАКТИКА, ИСПОЛЬЗУЕМ ОБЪЕКТЫ

// const personalMovieDB = {
// 	count: 0,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// 	start: function () {
// 		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 		while (
// 			personalMovieDB.count == '' ||
// 			personalMovieDB.count == null ||
// 			isNaN(personalMovieDB.count)
// 		) {
// 			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 		}
// 	},
// 	rememberMyFilms: function () {
// 		for (let i = 0; i < 1; i++) {
// 			const a = prompt('Один из просмотренных фильмов?', ''),
// 				b = prompt('На сколько оцените его?', '');

// 			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 				personalMovieDB.movies[a] = b;
// 				console.log('done');
// 			} else {
// 				console.log('error');
// 				i--;
// 			}
// 		}
// 	},
// 	detectPersonalLevel: function () {
// 		if (personalMovieDB.count < 10) {
// 			console.log('Просмотренно довольно мало фильмов!');
// 		} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
// 			console.log('Вы классический зритель!');
// 		} else if (personalMovieDB.count >= 30) {
// 			console.log('Вы киноман!');
// 		} else {
// 			console.log('Произошла ошибка');
// 		}
// 	},
// 	showMyDB: function (hidden) {
// 		if (!hidden) {
// 			console.log(personalMovieDB);
// 		}
// 	},
// 	toggleVisibleMyDB: function () {
// 		if (personalMovieDB.privat) {
// 			personalMovieDB.privat = false;
// 		} else {
// 			personalMovieDB.privat = true;
// 		}
// 	},
// 	writeYourGenres: function () {
// 		for (let i = 1; i <= 3; i++) {
// 			let genre = prompt(`Ваш любимый жанр под номером ${i}`);
// 			if (genre == '' || genre === null) {
// 				console.log('Вы ввели некорректные данные');
// 			} else {
// 				personalMovieDB.genres[i - 1] = genre;
// 			}
// 		}
// 		personalMovieDB.genres.forEach((item, i) => {
// 			console.log(`"Любимый жанр ${i + 1} - это ${item}`);
// 		});
// 	},
// };

// УРОК 23 ОСНОВЫ ООП, прототипно-ориентированное наследие

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
// 	health: 400,
// 	armor: 100,
// 	sayHello: function() {
// 		console.log('Hello');
// 	}
// };

// const john = Object.create(soldier);

// // const john = {
// // 	health: 100,
// // };
// //УСТАРЕВШИЙ
// john.__proto__ = soldier;
// //АКТУАЛЬНЫЙ
// Object.setPrototypeOf(john, soldier); //функции солдата дефолтные для джона

// // console.log(john.armor);
// john.sayHello();

// УРОК 22 ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ SPREAD OPERATOR ES6-ES9

// let a = 5,
// 	b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// ССЫЛКА
// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj; // Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// Создаем копию меняя значение только в копии
// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4
// 	}
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// // OBJECT ASSIGN - добавить структуру в объект
// const add = {
// 	d: 17,
// 	e: 20
// };

// // console.log(Object.assign(numbers, add));

// // const clone = Object.assign({}, add); //новый объект

// // clone.d = 20;

// // console.log(add);
// // console.log(clone);

// // копия массива slice
// const oldArray = ['a', 'b', 'c']
// const newArray = oldArray.slice();

// newArray[1] = 'adsdad';

// console.log(newArray);
// console.log(oldArray);

// // SPREAD оператор
// const video = ['youtube', 'vimeo', 'rutube'],
// blogs = ['wordpress', 'livejournal', 'blogger'],
// internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);
// //
// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// //
// const array = ['a', 'b'];

// const newAarray = [...array];

// //

// const q = {
// 	one: 1,
// 	two: 2,
// }
// const newObj = {...q};

//УРОК 21 МАССИВЫ И ПСЕВДОМАССИВЫ

// const arr = [1, 12, 26, 6, 8];
// arr.sort(compareNum);
// console.log(arr);
// // console.log(arr.length);
// // console.log(arr);

// function compareNum(a, b) {
// 	return a - b;
// }

// //Метод перебора массива
// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// //методы массива сплит создает данные в массив разделенные таким то символом
// const str = prompt('', '');
// const products = str.split(', ');
// products.sort(); // сортировка по алфавиту (только в строчных элементах)
// console.log(products.join('; ')); // строковое разделение

// //arr.pop() //Удаляет последний элемент массива
// //arr.push(10); //добавляет последний элемент

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
// for (let value of arr) {
// 	console.log(value);
// }

//УРОК 2О Объекты, ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

// const options = {
// 	name: 'test',
// 	with: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red',
// 	},
// 	makeTest: function() {
// 		console.log('Test');
// 	}
// };
// options.makeTest();

// //Деструктуризация
// const {border, bg} = options.colors;
// console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0

// for (let key in options) {
// 	if (typeof options[key] == 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter);

//console.log(Object.keys(options).length);

// УРОК 19 Callback-функции
// callback - функция которая должна быть выполнена после того как выполнена другая
// function first() {
// 	//Do something
// 	setTimeout(function() {
// 		console.log(1);
// 	}, 500);
// }

// function second() {
// 	console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
// 	console.log(`Я учу: ${lang}`);
// 	callback();
// }

// function done() {
// 	console.log('Я прошел этот урок');

// }

// learnJS('JavaScript', done);

//УРОК 18 ПРАКТИКА ИСПОЛЬЗОВАНИЯ ФУНКЦИЙ

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }

// start();

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// function rememberMyFilms() {
// 	for (let i = 0; i < 1; i++) {
// 		const a = prompt('Один из просмотренных фильмов?', ''),
// 			    b = prompt('На сколько оцените его?', '');

// 		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log('done');
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }

// rememberMyFilms();

// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		console.log('Просмотренно довольно мало фильмов!');
// 	} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
// 		console.log('Вы классический зритель!');
// 	} else if (personalMovieDB.count >= 30) {
// 		console.log('Вы киноман!');
// 	} else {
// 		console.log('Произошла ошибка');
// 	}
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }
// writeYourGenres()

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
