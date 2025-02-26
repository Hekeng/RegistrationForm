document.getElementById('button-send').addEventListener('submit', saveUser);


function saveData(event) {

  let wrapper = document.getElementById('input-wraper'); // Получаем контейнер с input-ами
  let elements = wrapper.children; // Получаем всех "детей" контейнера
  
  let formData = {}; // Итоговый объект с парами "название поля - значение"

  let lastLabel = null; // Переменная для хранения последнего найденного label

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    if (element.tagName === "LABEL") {
      lastLabel = element; // Запоминаем последний найденный label
    }

    if (element.tagName === "INPUT" && lastLabel) {
      formData[lastLabel.textContent.replace(/\s+/g, " ").trim()] = element.value;// Добавляем в объект
      lastLabel = null; // Сбрасываем lastLabel, чтобы не записывать одно и то же
    }


  }

  //console.log(formData); 

 return formData; // Выводим итоговый объект
}

function saveUser(event) {

  var userName = document.getElementById("user-name").value.trim(); // получаем значение input 

  var users = JSON.parse(localStorage.getItem("users")) || []; // создаем наш массив пользователей

  var formData = saveData(); // передаем пользователя из формы в текущую функцию.

  var userExists = users.some(function(user) {
    return user["Name :"] === formData["Name :"];
  });
    if (userExists) { 
      alert("Пользователь уже существует, введите другое имя!");
      return; 
    }
  users.push(formData); // добавляем нового пользователя в массив

  localStorage.setItem("users", JSON.stringify(users)); // сохраняем в локал сторидж
 // document.getElementById("registration-form").reset();
}


// let userData = saveData();
// console.log (userData);



document.getElementById('button-add').addEventListener('click', addInput);

function addInput(event) {


  
  let userInput = prompt("Write the information name:");

  let flagKaunt = 1;

  let informationName = `${userInput}_${flagKaunt}`;

if (userInput !== null) {


  // Создаём новый label
let newLabel = document.createElement("label");

newLabel.textContent = `${userInput} : `;

newLabel.htmlFor = informationName;

// Создаём новый input
let newInput = document.createElement("input");
newInput.type = "text";
newInput.className = "user-password";
newInput.id = informationName;

// Создаём перенос строки
let br = document.createElement("br");

let wrapper = document.getElementById('input-wraper');

wrapper.appendChild(newLabel);
wrapper.appendChild(newInput);
wrapper.appendChild(br);

}

}


// let user1 = {
//   "name" : '',
//   "age" : '',
//   "email" : '',
//   "ifadmin" : ''

// }

// class User {
//   constructor(name, age, email) {
//       this.name = name;
//       this.age = age;
//       this.email = email;
//   }

//   postinfoInfo() {
//       return `${this.name}, возраст: ${this.age}`;
//   }
// }

// function User2(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }



// document.getElementById('registration-form').addEventListener('click', checkCorrectData);

// function checkCorrectData() {

//   let analithData = document.getElementById('user-name');

//   if (analithData == '') {
//     console.log('Data incorrect rewrite data pleas')
//   }


  
// }


//Создай класс BankAccount, который содержит геттер для баланса (balance) и сеттер для внесения денег, но не позволяет устанавливать баланс вручную.
//Добавь скрытое свойство _balance, которое нельзя изменить напрямую.



// class BankAccount {

//   #balance;

//   constructor(balance, lastIncome) {
      
//     this.#balance = balance;
//     this.lastIncome = lastIncome;

//   }

//   get balance() {
//     return "Your balance with last income is: " + this.#balance + " money";
//   }

//   set lastIncome(value) {
//     if (typeof value !== "number" || Number.isNaN(value)) {
//       console.log("Ошибка: введите число!");
//   } else {
//           this.#balance += value;
//       }
//   }
// }

// var newtransaction = new BankAccount (150, 30);
// console.log(newtransaction.balance); // 30

// newtransaction.lastIncome = 50;

// console.log(newtransaction.balance);

// ["name"], но _age скрыто


// document.getElementById('registration-form').addEventListener('click', checkSpelling);


// document.getElementById('user-name').addEventListener('keydown', switchHelpState);

// function switchHelpState (event) {

//   let inputHelpState = document.getElementById('user-help');

//   if (document.getElementById('user-name').value == '') {
//     inputHelpState.style.display = 'block';
//   }

//   if (document.getElementById('user-name').value !== '') {
//     inputHelpState.style.display = 'none';
//   }
 

  
// }



// function checkSpelling(event) {

//   let switchPasswordStars = document.getElementById('user-password');

//   if (switchPasswordStars.type == 'password') {
//       switchPasswordStars.type = 'text';  
//   } else {
//   if (switchPasswordStars.type == 'text') {
//     switchPasswordStars.type = 'password';
// }
// }

// }

//задание с сортировкой

// let liList = document.querySelector('ul');
// let flag = 'up';
// document.addEventListener('click', removeAddLi);

// // buttonEvent.addEventListener('click', removeAddLi);

// function removeAddLi(event) {
//   let buttonClicked = event.target;
//   if (buttonClicked.id == 'button-rem') {
//     removeLi();
//   }
//   if (buttonClicked.id == 'button-add') {
//     addLi();
//   }
//   if (buttonClicked.id == 'button-sort') {
//     sortLi();
//   }
// }

// function removeLi() {
//   liList.lastElementChild.remove();
// }


// function addLi() {
//   let newLi = document.createElement('li');
//   let numerId = Math.floor(Math.random() * 100); 
//     Object.assign(newLi, {
//       className: 'item',
//       id: `sraka_${numerId}`,
//       textContent: `${numerId}`
//     });
//     liList.appendChild(newLi);
//     // console.log (newLi);
// }


// function sortLi() {

//   let allLiList = document.getElementsByTagName('li');

//   for (let i = 0; i < allLiList.length; i++) {
//     console.log("Итерации:", i);
//     let currentValue = parseInt(allLiList[i].textContent, 10);
//     let nextValue = parseInt(allLiList[i + 1]?.textContent, 10);

//     // Условие сортировки зависит от значения flag
//     if (i < allLiList.length - 1 && ((flag === 'up' && currentValue > nextValue) || (flag === 'down' && currentValue < nextValue))
//     ) {
//       liList.appendChild(allLiList[i]);
//       i = -1; // Сброс индекса, чтобы начать с начала
//     }
//   }

//   // Меняем направление сортировки
//   flag = flag === 'up' ? 'down' : 'up';

//   // Меняем текст кнопки
//   let buttonText = document.getElementById('button-sort');
//   buttonText.textContent =
//     flag === 'up' ? 'Отсортировать по возрастанию' : 'Отсортировать по убыванию';
// }


// function sortLi() {


//   for (let i = 0; i < liList.children.length; i++) {
//     let currentValue = parseInt(liList.children[i].textContent, 10);
//     let nextValue = parseInt(liList.children[i + 1]?.textContent, 10);

//     console.log(`Текущая пара: ${currentValue} и ${nextValue}`);

//     if (i < liList.children.length - 1 && currentValue > nextValue) {
//       // Перемещаем больший элемент в конец
//       liList.appendChild(liList.children[i]);

//       console.log("Переместили элемент:", currentValue);
//       // Сбрасываем индекс
//       i = -1;
//     }
//   }
// }



// function sortLi() {
//   let allLiList = document.getElementsByTagName('li');
  
//   // Преобразуем в массив для зафиксированного состояния
//   let allLiArray = Array.from(allLiList);
//   console.log("Создали коллекцию:", allLiArray.map(li => li.textContent));
  
//   // Сортировка с перезапуском цикла при необходимости
//   for (let i = 0; i < allLiArray.length; i++) {



//     // Проверка, если текущий элемент больше следующего
//     if (i < allLiArray.length - 1 && allLiArray[i].textContent > allLiArray[i+1].textContent) {
      
//       // Перемещаем элемент в конец
//       liList.appendChild(allLiArray[i]);
      
//       // Логируем состояние коллекции после перемещения
//       let updatedLiList = Array.from(liList.getElementsByTagName('li'));
//       console.log("Коллекция после перемещения элемента:", updatedLiList.map(li => li.textContent));
      
      
//       // Перезапускаем цикл с первого элемента
//       i = -1;
      
//       // Обновляем коллекцию после изменения DOM
//       allLiArray = Array.from(liList.getElementsByTagName('li'));
//     }
//   }
// }

// document.addEventListener('click', eventCheck);

// function eventCheck(event) {

//   const clickedElement = event.target;
//   const elementHTML = clickedElement.outerHTML;

//   console.log('Кликнули на элемент:', clickedElement);
//   console.log('HTML элемента:', elementHTML);

//     if (clickedElement.tagName.toLowerCase() === 'li') {
//     console.log('Кликнули на select с id:', clickedElement.id);
//   }
//   console.log(event);
  
// }





// let liliList = Array.from(document.querySelectorAll('li'));





//  function getRandomColor() {
//   // Генерация случайного числа для каждого канала (Red, Green, Blue)
//   let r = Math.floor(Math.random() * 256); // Красный канал (0-255)
//   let g = Math.floor(Math.random() * 256); // Зеленый канал (0-255)
//   let b = Math.floor(Math.random() * 256); // Синий канал (0-255)

//   // Преобразование каждого числа в 16-ричный формат и объединение в строку
//   return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
// }

// function changeColor() {
//   let switchColor = getRandomColor();

//   bodyColor.style.backgroundColor = `${switchColor}`;

//   console.log ("В переменную записано:", bodyColor)

// }

// let formState = document.querySelector('.textForm');

// formState.addEventListener('focus', () => {

//   formState.style.backgroundColor = 'red';

// })

// formState.addEventListener('blur', () => {

//   formState.style.backgroundColor = 'blue';

// })

// function backGround(event) {

  
// }



// // let form = document.querySelector('.main-form');
// let output = document.querySelector('.message');
// let buttonEvent = document.querySelector('.buttons-design');

// let textPerem = output.textContent;


// buttonEvent.addEventListener('click', buttonFunc);

// function buttonFunc(event) {
//   event.preventDefault(); // Предотвращаем перезагрузку страницы

//   if (output.textContent != '') {
//     console.log("Перезаписали значение на пустоту:", textPerem);
//     textPerem = output.textContent;
//     output.textContent = '';
//   } else {

//   if (output.textContent == '') {
//     console.log("Востановили значение:", textPerem);
//     output.textContent = textPerem;
   
//   }
// }
//   // console.log("Что записало в переменную:", output);
//   // console.log("Содержание текстового поля:", output);

// }



  //console.log ("Текст в переменной:",outputText);
  //console.log (inputValue);
  // console.log (output);
  //console.log (button);
  //
