let str = prompt("Введите любую строку: ");

function getVowels(strr) {
  return function (x) {
    let counter = 0;
    if (x) {
      for (let i = 0; i < strr.length; i++) {
        if (strr[i] === x) {
          counter++;
        }
      }
    } else {
      let arrVowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
      let arr = strr.split("");
      
      counter = arr.reduce((sum, item) => sum + arrVowels.includes(item), 0);
    }
    return counter;
  };
}
let count = getVowels(str);
let answer = confirm("Вы хотите найти конкретную гласную?");

if(answer){
    let vowel = prompt("Введите эту гласную:");
    alert(`Количество гласных "${vowel}" в строке: ${count(vowel)}`);
}else{
    alert(`Количество ВСЕХ гласных в строке: ${count()}`);
}
