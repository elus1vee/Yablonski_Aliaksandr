let array = [
  { name: "Ivan", salary: 1000 },
  { name: "Alex", salary: 3000 },
  { name: "Anton", salary: 2000 },
  { name: "Valera", salary: 2500 },
  { name: "Nastya" },
  { name: "Olya", salary: 700 },
  { name: "Gena", salary: 2400 },
  { name: "Ira", salary: 2000 },
  { name: "Oleg", salary: 1200 },
  { name: "Alexandr", salary: 1000 },
  { name: "Katya", salary: 1500 },
  { name: "Volodya" },
];

// Первый (лучше) вариант функции
function sumSalary(arr) {
  console.log("Результат первой функции:");
  let summa = arr.reduce((sum, item) => {
    //если у человека ЗП не задана, то рандомно задаю:
    if (!Boolean(item.salary)) {
      item.salary = Math.floor(Math.random() * 20) * 100 + 1000;
    }
    sum += item.salary;
    return sum;
  }, 0);

  return summa;
}

//Второй вариант функции
function sumSalaryV2(arr) {
  //если у человека ЗП не задана, то рандомно задаю:
  // НО так как первая функция вызвана раньше, она уже заполнила зарплаты, у кого их не было!
  let summa = 0;
  console.log("Результат второй функции:");
  arr.forEach((object) => {
    if (!Boolean(object.salary)) {
      object.salary = Math.floor(Math.random() * 20) * 100 + 1000;
    }
    for (const key in object) {
      if (key === "salary") {
        summa = summa + object[key];
      }
    }
  });

  return summa;
}

console.log(sumSalary(array));
console.log(sumSalaryV2(array));
