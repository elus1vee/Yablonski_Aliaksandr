const animals = [
  { name: "Собака", color: "Черный", age: "5", voice: "Гаф" },
  { name: "Корова", color: "Черно-белый", age: "3", voice: "Муу" },
  { name: "Кот", color: "Рыжий", age: "7", voice: "Мяу" },
  { name: "Волк", color: "Серый", age: "4", voice: "Ууу" },
  { name: "Ворона", color: "Белый", age: "2", voice: "Кар" },
  { name: "Лошадь", color: "Коричневый", age: "5", voice: "Игого" },
];

class Animal {
  constructor(name, color, age, voice) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.voice = voice;
  }

  say() {
    console.log(`${this.name} издает звук: ${this.voice}`);
  }
  hello() {
    let arr1 = [2, 3, 4];
    if (arr1.includes(this.age % 10)) {
      // тут я проверяю последнюю цифру возраста, чтобы правильно сказать: год,года,лет)
      console.log(`Привет, я ${this.name}. Мне ${this.age} года. У меня ${this.color} окрас.`);
    } else if (this.age % 10 === 1) {
      console.log(`Привет, я ${this.name}. Мне ${this.age} год. У меня ${this.color} окрас.`);
    } else {
      console.log(`Привет, я ${this.name}. Мне ${this.age} лет. У меня ${this.color} окрас.`);
    }
  }
  getAge() { // геттер, чтобы вернуть возраст числом
    return Number(this.age);
  }
}
function animalsFabric(animals) {
  let objectAnimals = animals.map((item) => (item = new Animal(item.name, item.color, item.age, item.voice)));
  return objectAnimals;
}
//функция для возврата суммы всех возрастов
function getAllAge(animals) {
  let allAge = animals.reduce((sum, item) => sum + item.getAge(), 0);
  return allAge;
}

let animalsObject = animalsFabric(animals);

//Выводим на экран звуки каждого животного:
animalsObject.forEach((element) => {
  element.hello();
  element.say();
});

console.log(`Сумма возрастов всех животных: ${getAllAge(animalsObject)}`);
