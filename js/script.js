"use strict"

// //Практика
// Масиви

let newArray = [];
console.log(typeof newArray);
console.log(newArray);
console.log(newArray.length);
console.log(' ');//просто пробіл в консолі//просто пробіл в консолі


let todayCurencies= [39.8, 41, 17];//курс валют
console.log(todayCurencies);
console.log(todayCurencies.length);
console.log(' ');//просто пробіл в консолі//просто пробіл в консолі

//метод перебору масиву "for"
for (let i=0; i<todayCurencies.length; ++i){
  console.log(todayCurencies[i]);//вивід значень масиву в консоль
}
console.log(' ');//просто пробіл в консолі//просто пробіл в консолі
//метод "foreach"
todayCurencies.forEach((todayCurency, index) => {
  console.log(index);//вивід номера елементу масиву в консоль
  console.log(todayCurency);//вивід значень масиву в консоль

});
console.log(' ');//просто пробіл в консолі//просто пробіл в консолі

//додати елемент в масив
// let todayCurencies= [39.8, 41, 17];//курс валют
// todayCurencies.push(7.5)
todayCurencies.forEach((todayCurency, index) => {
  // console.log(index);//вивід номера елементу масиву в консоль
  console.log(todayCurency);//вивід значень масиву в консоль
});
console.log(' ');//просто пробіл в консолі

console.log(todayCurencies.includes(39.8));//пошук конкретного (точного значення) елементу в масиві (true or false)

if (!todayCurencies.includes(7.5)){
  todayCurencies.push(7.5)
  console.log(todayCurencies)
}
console.log(' ');//просто пробіл в консолі
// перевірка чи це масив
console.log(Array.isArray(todayCurencies))

console.log(' ');//просто пробіл в консолі
//сортування масиву
todayCurencies = [12, 5, 39.8, 7, 17];
console.log(todayCurencies.sort());
function compareNumberic (a, b){
  console.log(`порівнюєм ${a} і ${b}`);
  // if (a > b) return 1;
  // if (a == b) return 1;
  // if (a < b) return -1;
  return a-b; // непонятно як але воно працює
}
todayCurencies.sort(compareNumberic);
console.log(todayCurencies.sort(compareNumberic));
console.log(' ');//просто пробіл в консолі

//перевести масив у рядок
todayCurencies = todayCurencies.join('; ');
console.log(todayCurencies);
console.log(' ');//просто пробіл в консолі

// Функції
let userName;// задаємо змінні
let userAge;
let userMale;

userName = 'Микола';// присвоюємо значення змінних
userAge = 38;
userMale = 'чоловік'

// створюємо інфорсацію про користувача
function createUserInfo(a, b, c, d, e, f) {
  console.log(a + b +c + d + e + f);
}
createUserInfo(userName, ', ', userAge, ' років, ', 'стать - ', userMale);
console.log(' ');//просто пробіл в консолі

// вкладеність функції
function createUser(){
  console.log('користувач:');

 function userInfo (a, b, c, d, e, f){
    console.log(a + b +c + d + e + f);
  }
  userInfo(userName, ', ', userAge, ' років, ', 'стать - ', userMale)
}
createUser();// спочатку виводиться батківська функція а потім дочірня
console.log(' ');//просто пробіл в консолі

let userNewInfo = function (a, b, c, d, e, f){
  console.log(a + b +c + d + e + f);
}
userNewInfo(userName, ', ', userAge, ' років, ', 'стать - ', userMale)
// можна записати через стрілочну функцію
let userInfo = (a, b, c, d, e, f) => console.log(a + b +c + d + e + f);
userInfo(userName, ', ', userAge, ' років, ', 'стать - ', userMale);
console.log(' ');//просто пробіл в консолі

//=================DOM==============//

let windowWidth =window.innerWidth;
console.log(windowWidth);// ширина вікна браузера
console.log(' ');//просто пробіл в консолі

let windowHeight =window.innerHeight;
console.log(windowHeight);// висота вікна браузера
console.log(' ');//просто пробіл в консолі

console.log(navigator.userAgent);
console.log(' ');//просто пробіл в консолі

if(navigator.userAgent.includes(`hrome`)){
  console.log(`Браузер Chrome`);
  }else{console.log(`користуйтесь браузером Chrome`);
 }
 console.log(' ');//просто пробіл в консолі

// зміна адреси браузера
console.log(location.href);
// location.href = `https://ykdk.github.io/lesson_20/home.html`;
console.log(' ');//просто пробіл в консолі

//спливаюче вікно в браузері
// alert(`помилка`)//якесь повідомлення
// confirm(`eror`);// якесь запитання
// let yourAge = prompt(`скільки Вам років?`);// вікно для вводу відповіді
// console.log(yourAge);


// Робота з html

const htmlElement = document.documentElement;// звернення до всього HTML
console.log(htmlElement);
console.log(' ');//просто пробіл в консолі

const headElement = document.head;// звернення до тегу head
console.log(headElement);
console.log(' ');//просто пробіл в консолі

const bodyElement = document.body;// звернення до тегу body
console.log(bodyElement);
console.log(' ');//просто пробіл в консолі

//звернення до першого/останнього елемента (по аналогії з css)
const firstChild = bodyElement.firstElementChild;
console.log(firstChild);
const lastChild = bodyElement.lastElementChild;
console.log(lastChild);

console.log(' ');//просто пробіл в консолі

// до кожного дочірнього елемента body 
const childNodes = bodyElement.children;
console.log(childNodes);
//перебираєм получений масив
for (let i = 0; i < childNodes.length; ++i) {
  console.log(childNodes[i]);
}
// const bodyElement = document.body;// звернення до тегу body
let previousElement = bodyElement.previousElementSibling;// попередній елемент перед body 
console.log(previousElement);
console.log(' ');//просто пробіл в консолі

let nextElement = bodyElement.nextElementSibling;// наступний елемент після body 
console.log(nextElement);// null значить елемента неіснує
console.log(' ');//просто пробіл в консолі

let parentElement = bodyElement.parentElement;// батьківський елемент для body (це html)
console.log(parentElement);// null значить елемента неіснує
console.log(' ');//просто пробіл в консолі

// звернення до будьякого обєкту в html
let someObjects = document.querySelector(`.main .list__item`);
console.log(someObjects);

// звернення до всіх обєктів в середині main (отримаєм список у вигляді масиву)
let someObject = document.querySelectorAll(`.list__item`);
console.log(someObject);
console.log(' ');//просто пробіл в консолі

someObject.forEach(someObjectList => {
  console.log(someObjectList);
})
console.log(' ');//просто пробіл в консолі


const listItems = document.querySelector('.list');// звернення до списку з класом list
const firstlistItem = listItems.firstElementChild;// звернення до першого елементу списку з класом list
console.log(firstlistItem);
firstlistItem.style.cssText = `
  color: red;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  text-transform: uppercase;
`;// міняєм пешому елементу стилі



console.log(' ');//просто пробіл в консолі

const lastlistItem = listItems.lastElementChild;
console.log(lastlistItem);
lastlistItem.style.color = 'green';
console.log(' ');//просто пробіл в консолі

const secondListItem = firstlistItem.nextElementSibling;
console.log(secondListItem);
secondListItem.style.color = 'blue';
console.log(' ');//просто пробіл в консолі

const isPageParent = listItems.closest('.main');
console.log(isPageParent);
console.log(' ');//просто пробіл в консолі

// Заміна в html

const list = document.querySelectorAll('.list');
list.forEach(listItem => {
  console.log(listItem.textContent);// звернення до тексту в тегу li
});
console.log(' ');//просто пробіл в консолі

list.forEach(listItem => {
  console.log(listItem.innerHTML);// звернення до всього тексту в списку ol
});
console.log(' ');//просто пробіл в консолі

const listLi = document.querySelectorAll('.list__item');
listLi.forEach((listItem, index) => {
  console.log(listItem.innerHTML);
  listItem.innerHTML = 'color'// зміна тексту в тегах li
});
console.log(' ');//просто пробіл в консолі

// створення елементів в html
let newList = document.createElement('ul');
newList.innerHTML = '<li class="list__item">Пункт 1</li> <li class="list__item">Пункт 2</li> <li class="list__item">Пункт 3</li>';

const mainList = document.querySelector('.main__list');
mainList.after(newList);
console.log(newList);
console.log(' ');//просто пробіл в консолі

mainList.insertAdjacentHTML("beforebegin", `
<ol class="main__list list">
  <li class="list__item" style="color: #00ff2f";>салатовий</li>
  <li class="list__item" style="color: #ff00cc">розовий</li>
  <li class="list__item" style="color: #ff9100">помаранчевий</li>
</ol>
`);
console.log(' ');//просто пробіл в консолі

//==============Домашки======================//
console.log('Домашка Масиви');
console.log(' ');//просто пробіл в консолі
console.log('задача №1');
console.log(' ');//просто пробіл в консолі

// let arr = ['Ваня', 'Иштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);

console.log('задача №2');
console.log(' ');//просто пробіл в консолі

let users = ['Ваня', 'Іштван'];//створюєм масив
users.push('Оля');// додаємо елемент Оля
users.splice(users.indexOf("Іштван"), users.indexOf("Іштван"), "Петя");// пошук і заміна починаючи з позиції Іштван до Іштван на Петяк
let remove = users.splice(0, 1);// видаляєм перший елемент
console.log(remove);// виводимо видалений елемент в консоль
users.unshift('Маша', 'Паша');// вставляєм Маша Паша в початок масиву
console.log(users);
console.log(' ');//просто пробіл в консолі

console.log('задача №3');
let arr = ['Ваня', 'Іштван', 'Оля',];
let removed = arr.splice(arr.indexOf("Іштван"), arr.indexOf("Іштван"));// видаляєм Іштван
console.log(removed);// виводимо іштван
console.log(arr);

console.log(' ');//просто пробіл в консолі
console.log('задача №4');

let str = 'Ваня, Іштван, Оля';
let newStr=str.split(".");// переводимо рядок в масив
console.log(newStr);

console.log(' ');//просто пробіл в консолі
console.log('задача №5');

let arrNew = [9, 2, 8,];
let reduceValue = arrNew.reduce(function(previousValue, item, index, array) {

  console.log(previousValue);
});

console.log('Домашка Функції');
console.log(' ');//просто пробіл в консолі
console.log('задача №1');
console.log(' ');//просто пробіл в консолі

function showName(){
  console.log('Вася');
}
setTimeout(showName, 0);
console.log('Коля');
console.log(' ');//просто пробіл в консолі

console.log('задача №2');

// showMessage();
// function showMessage(){
//   console.log('повідомлення');
// }

console.log(' ');//просто пробіл в консолі
console.log('задача №3');

// let showMessage = function (){
//   console.log('повідомлення');
// }
// showMessage();
console.log(' ');//просто пробіл в консолі

console.log('задача №4');

let showMessage;
if (2>1){
  showMessage = function (){
    console.log('повідомлення');
  }
}
showMessage();
console.log(' ');//просто пробіл в консолі
console.log('Домашка Прокрутка');
console.log(' ');//просто пробіл в консолі
console.log('задача №1');
console.log(' ');//просто пробіл в консолі

let windWidth = innerWidth;
console.log(windWidth);

console.log(' ');//просто пробіл в консолі
console.log('задача №2');


let block = document.querySelector('.header');
console.log(block);
block.scrollTop = 200;
let element = block.scrollTop
console.log(element);


console.log(' ');//просто пробіл в консолі
console.log('задача №3');
//координати елемента з классом wrapper
let header = document.querySelector('.header');
let getHeaderCoord = header.getBoundingClientRect();
console.log(getHeaderCoord);
console.log(' ');//просто пробіл в консолі

let main = document.querySelector('.main');
let getMainCoord = main.getBoundingClientRect();
console.log(getMainCoord);


let footer = document.querySelector('.footer');
let getFooterCoord = footer.getBoundingClientRect();
console.log(getFooterCoord);

console.log(' ');//просто пробіл в консолі
console.log('Домашка DOM');
console.log(' ');//просто пробіл в консолі

console.log('задача №1');
console.log(' ');//просто пробіл в консолі

let dataSay = document.querySelector 
('[data-say-hi="yes"]');// шукаєм елемент з атрибутом data-say-hi="yes"
console.log(dataSay);
dataSay.innerHTML = 'Обєктна модель документу';// змінюєм текст в елементі
console.log(dataSay);
console.log(' ');//просто пробіл в консолі

console.log('задача №2');
console.log(' ');//просто пробіл в консолі
let dataSayLis = document.querySelectorAll('li'); // звернення до всіх тегів li
dataSayLis.forEach(dataSayLi => {
  if (dataSayLi.textContent==='Йончи') // перебір колекції і якщо є li з текстом Йончи то вивести в консоль
  console.log(dataSayLi);
  // звернення до тексту в тегу li
});
console.log(' ');//просто пробіл в консолі

console.log('задача №3');
console.log(' ');//просто пробіл в консолі

let likeElements = document.querySelectorAll('.like');// звернення до всіх елементів зкласом like
console.log(likeElements);
let likeElement = document.querySelectorAll('[class="like"]');// звернення до конкретного елемента зкласом like
console.log(likeElement);

console.log(' ');//просто пробіл в консолі

console.log('задача №4');
console.log(' ');//просто пробіл в консолі

const listUl = document.querySelector('ul');// querySelectorAll викличе помилку
listUl.insertAdjacentHTML(
  'beforeend',
  '<li>Текст</li>'
);
console.log(listUl);

