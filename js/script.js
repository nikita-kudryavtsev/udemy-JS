'use strict'; // мы работаем в современном режиме, строгий режим




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
//git remote rm origin
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