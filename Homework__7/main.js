String.prototype.getVowels = getVowels;
let key = 1;
//Проверка на строку
do {
  var str = prompt("Введите любую строку: ");
  if (!(typeof str === "string")) {
    alert("ERROR! Введите строку!");
  }
  key = 0;
} while (key);

function getVowels(x) {
  let strr = this.toLowerCase();
  //return function (x) {
  let counter = 0;
  let arr = strr.split("");
  let arrVowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
  if (arrVowels.includes(x)) {
    counter = arr.reduce((sum, item) => (item === x ? ++sum : sum), 0);
  } else {
    counter = arr.reduce((sum, item) => sum + arrVowels.includes(item), 0);
  }
  return counter;
}

function checkVowel(x) {
  let arrVowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
  if (arrVowels.includes(x)) {
    return true;
  }
  return false;
}
let answer = confirm("Вы хотите найти конкретную гласную?");

if (answer) {
  let vowel = prompt("Введите эту гласную:");
  vowel = vowel.toLowerCase();
  
  //Проверка на количество символов
  if (vowel.length > 1) {
    alert("Вы ввели не одну букву!");
  } else if (checkVowel(vowel)) {
    alert(`Количество гласных "${vowel}" в строке: ${str.getVowels(vowel)}`);
  } else {
    alert(`ERROR! Вы ввели не гласную букву: ${vowel}`);
  }
} else {
  alert(`Количество ВСЕХ гласных в строке: ${str.getVowels()}`);
}
