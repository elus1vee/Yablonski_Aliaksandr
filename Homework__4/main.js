let str = prompt("Введите любую строку: ");

function getVowels(strr) {
  strr = strr.toLowerCase();
  return function (x) {
    let counter = 0;
    let arr = strr.split("");
    let arrVowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    if (arrVowels.includes(x)) {
      counter = arr.reduce((sum, item) => (item === x ? ++sum : sum), 0);
    } else {
      counter = arr.reduce((sum, item) => sum + arrVowels.includes(item), 0);
    }
    return counter;
  };
}
let count = getVowels(str);
let answer = confirm("Вы хотите найти конкретную гласную?");

if (answer) {
  let vowel = prompt("Введите эту гласную:");
  vowel = vowel.toLowerCase();
  alert(`Количество гласных "${vowel}" в строке: ${count(vowel)}`);
} else {
  alert(`Количество ВСЕХ гласных в строке: ${count()}`);
}
