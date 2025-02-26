document.getElementById('button-send').addEventListener('click', saveUser);


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
      formData[lastLabel.textContent.replace(/\s+/g, " ").trim()] = element.value; // Добавляем в объект
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
  //document.getElementById("registration-form").reset();
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

newLabel.textContent = `${userInput} :` ;

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
  // console.log (output);
  //console.log (button);
  //
